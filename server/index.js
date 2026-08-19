require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Agriculture Smart Farming API - Phase 1' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
