const express = require('express');
const path = require('path');
const app = express()

app.listen(process.env.PORT || 4200);

// set static folder
const staticPath = path.join(__dirname, '/dist/floor-plan-management/');
app.use(express.static(staticPath));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'floor-plan-management', 'index.html'));
});

app.get('/health-check', (req, res) => {
  return res.send('online');
});
