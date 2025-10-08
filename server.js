const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
