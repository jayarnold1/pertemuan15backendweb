// quotes.js – Server Node.js dengan tema Cyber Neon Punk
const http = require("http");

// ============================================================
//  DATA KUTIPAN
// ============================================================
const quotesData = [
  {
    id: 8,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 26,
    text: "Satu-satunya batasan untuk meraih mimpi kita adalah keragu-raguan kita akan hari ini.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 3,
    text: "Jangan menunggu. Waktu tidak akan pernah tepat.",
    author: "Napoleon Hill",
  },
  {
    id: 15,
    text: "Jangan biarkan masa lalu mencuri masa depan Anda.",
    author: "Unknown",
  },
  {
    id: 33,
    text: "Disiplin adalah jembatan antara tujuan dan pencapaian.",
    author: "Jim Rohn",
  },
  {
    id: 18,
    text: "Rahasia untuk maju adalah memulai.",
    author: "Mark Twain",
  },
  {
    id: 29,
    text: "Orang yang optimis melihat peluang di setiap bencana; orang pesimis melihat bencana di setiap peluang.",
    author: "Winston Churchill",
  },
  {
    id: 24,
    text: "Keberanian bukan berarti tidak takut, melainkan bertindak meskipun merasa takut.",
    author: "Nelson Mandela",
  },
  {
    id: 12,
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
];

// ============================================================
//  FUNGSI PEMBANTU
// ============================================================

// Pengacakan Fisher‑Yates
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Render setiap kutipan menjadi HTML kartu
function renderQuotes(quotes) {
  return quotes
    .map(
      (item) => `
        <div class="card">
          <div class="quote-icon" aria-hidden="true">❝</div>
          <div class="quote">${item.text}</div>
          <hr class="divider" />
          <div class="author">${item.author}</div>
        </div>
      `,
    )
    .join("");
}

// ============================================================
//  GENERATE FULL HTML (Cyber Neon Punk)
// ============================================================

function getFullHTML() {
  const shuffled = shuffleArray([...quotesData]);
  const quotesHTML = renderQuotes(shuffled);

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>⚡ Daily Cyber Inspiration</title>

  <!-- Google Fonts (Sci‑fi & modern) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;700&display=swap" rel="stylesheet" />

  <style>
    /* ===== RESET & VARIABEL NEON ===== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --bg-body: #0a0a0f;
      --bg-card: rgba(12, 12, 30, 0.85);
      --neon-green: #fcfcfc;
      --neon-cyan: #f8f409;
      --neon-magenta: #ff00ff;
      --neon-yellow: #ffe600;
      --neon-purple: #b300ff;
      --glow-green: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 40px #00ff41;
      --glow-cyan: 0 0 10px #f2fae5, 0 0 20px #f2fae5;
      --glow-magenta: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
      --border-neon: 2px solid var(--neon-cyan);
      --radius: 12px;
      --transition: 0.3s ease;
    }

    body {
      font-family: 'Exo 2', sans-serif;
      background: var(--bg-body);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      color: #c0c0e0;
      background-image:
        radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 30%),
        radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.05) 0%, transparent 30%),
        linear-gradient(rgba(0, 255, 65, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 65, 0.03) 1px, transparent 1px);
      background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
    }

    /* ===== HEADER ===== */
    .hero {
      background: linear-gradient(135deg, #0d0d2b, #1a0033);
      border-bottom: var(--border-neon);
      box-shadow: var(--glow-cyan);
      padding: 2rem 1rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 255, 65, 0.02) 2px,
        rgba(0, 255, 65, 0.02) 4px
      );
      animation: scanlines 8s linear infinite;
      pointer-events: none;
    }

    @keyframes scanlines {
      0% { transform: translateY(0); }
      100% { transform: translateY(40px); }
    }

    .hero h1 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 900;
      font-size: 2.8rem;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--neon-green);
      text-shadow: var(--glow-green);
      position: relative;
      z-index: 1;
    }

    .hero h1 span {
      color: var(--neon-cyan);
      text-shadow: var(--glow-cyan);
    }

    .hero p {
      font-size: 1.2rem;
      font-weight: 300;
      color: var(--neon-magenta);
      text-shadow: 0 0 8px rgba(255, 0, 255, 0.6);
      margin-top: 6px;
      letter-spacing: 2px;
      position: relative;
      z-index: 1;
    }

    /* ===== CONTAINER & GRID ===== */
    .container {
      width: min(1200px, 95%);
      margin: -30px auto 0;
      flex: 1;
      padding: 0 0 3rem;
      position: relative;
      z-index: 2;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    /* ===== CARD ===== */
    .card {
      background: var(--bg-card);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(0, 212, 255, 0.3);
      border-radius: var(--radius);
      padding: 24px 20px;
      box-shadow: 0 0 15px rgba(0, 212, 255, 0.1);
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
      min-height: 180px;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
    }

    .card::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: var(--radius);
      background: linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta), var(--neon-green));
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    .card:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(255, 0, 255, 0.15);
      border-color: var(--neon-cyan);
    }

    .card:hover::after {
      opacity: 0.6;
    }

    .quote-icon {
      color: var(--neon-green);
      font-size: 2.8rem;
      line-height: 1;
      margin-bottom: 4px;
      text-shadow: var(--glow-green);
      opacity: 0.8;
      user-select: none;
    }

    .quote {
      font-size: 1.1rem;
      color: #e0e0ff;
      font-style: italic;
      line-height: 1.7;
      flex: 1;
      text-shadow: 0 0 5px rgba(0, 212, 255, 0.2);
    }

    .divider {
      margin: 18px 0 14px;
      border: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--neon-cyan), var(--neon-magenta), transparent);
      box-shadow: 0 0 8px var(--neon-cyan);
    }

    .author {
      text-align: right;
      color: var(--neon-yellow);
      font-weight: 600;
      font-size: 0.95rem;
      letter-spacing: 0.5px;
      text-shadow: 0 0 8px rgba(255, 230, 0, 0.4);
    }

    .author::before {
      content: "— ";
      color: var(--neon-magenta);
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }
      .hero p {
        font-size: 1rem;
      }
      .quote {
        font-size: 1rem;
      }
      .grid {
        grid-template-columns: 1fr;
        gap: 18px;
      }
      .card {
        padding: 18px 16px;
        min-height: 150px;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 1.5rem;
        letter-spacing: 2px;
      }
      .hero {
        padding: 1.5rem 0.5rem;
      }
      .quote-icon {
        font-size: 2.2rem;
      }
    }
  </style>
</head>
<body>
  <header class="hero">
    <h1>⚡ Daily <span>Cyber</span> Inspiration</h1>
    <p>⎯⎯⎯⎯  neon thoughts for the future  ⎯⎯⎯⎯</p>
  </header>

  <main class="container">
    <div id="quotesContainer" class="grid" role="list">
      ${quotesHTML}
    </div>
  </main>
</body>
</html>`;
}

// ============================================================
//  SERVER HTTP
// ============================================================

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(getFullHTML());
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server cyber berjalan di http://localhost:${PORT}`);
  console.log(`✨ Tekan Ctrl+C untuk menghentikan.`);
});
