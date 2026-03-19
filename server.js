const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos do build
app.use(express.static(path.join(__dirname, 'dist/site-psicologia')));

// Redirecionar todas as requisições para index.html (importante para roteamento Angular)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/site-psicologia/index.html'));
});

// Catch-all para rotas do Angular
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist/site-psicologia/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║   🚀 Servidor da Psicologia em Produção   ║
╠════════════════════════════════════════════╣
║   Local:   http://localhost:${PORT}                ║
║   URL:     https://seu-dominio.com        ║
╚════════════════════════════════════════════╝
  `);
});
