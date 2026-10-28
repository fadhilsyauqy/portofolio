import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { portfolioData } from './src/data/portfolioData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
}

// Middleware
app.use(cors());
app.use(express.json());

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Portfolio API Backend',
  });
});

// API: Get portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// API: Submit contact message
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Nama, email, dan pesan wajib diisi.',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Format email tidak valid.',
      });
    }

    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    let messages = [];
    try {
      const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
      messages = JSON.parse(data);
    } catch {
      messages = [];
    }

    messages.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log(`[Contact API] Pesan baru diterima dari: ${name} (${email})`);

    res.status(201).json({
      success: true,
      message: 'Pesan Anda berhasil dikirim! Terima kasih telah menghubungi.',
      data: newMessage,
    });
  } catch (err) {
    console.error('[Contact API Error]:', err);
    res.status(500).json({
      success: false,
      error: 'Terjadi kesalahan di server saat memproses pesan.',
    });
  }
});

// API: Get messages (for admin review)
app.get('/api/messages', (req, res) => {
  try {
    const data = fs.readFileSync(MESSAGES_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch {
    res.json([]);
  }
});

// Serve frontend static files
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use('/portofolio', express.static(distPath));
  app.use(express.static(distPath));

  // SPA fallback for all unmatched GET requests
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.use((req, res) => {
    res.send(
      '<h1>Backend Server Aktif</h1><p>Frontend belum di-build. Jalankan <code>npm run build</code> terlebih dahulu.</p>'
    );
  });
}

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Backend Portfolio Server berjalan di http://localhost:${PORT}`);
  console.log(`📡 API Health Check: http://localhost:${PORT}/api/health`);
  console.log(`💼 API Portfolio Data: http://localhost:${PORT}/api/portfolio`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});
