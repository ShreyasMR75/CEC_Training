const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Agriculture Smart Farming API - Phase 1' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Random joke generator using external API (JokeAPI)
app.get('/api/joke', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any', {
      params: { type: 'single' },
      timeout: 5000,
    });

    const data = response.data || {};
    let jokeText = '';
    if (data.joke) jokeText = data.joke;
    else if (data.setup && data.delivery) jokeText = `${data.setup} ${data.delivery}`;
    else jokeText = 'No joke found';

    res.json({ joke: jokeText, source: 'jokeapi.dev' });
  } catch (err) {
    console.error('Error fetching joke:', err.message || err);
    res.status(502).json({ error: 'Failed to fetch joke', details: err.message || String(err) });
  }
});

// Crop recommendation proxy endpoint
app.post('/api/recommend-crop', async (req, res) => {
  const payload = req.body;
  const mlUrl = process.env.ML_SERVICE_URL || 'http://localhost:5001/predict_crop';

  try {
    const response = await axios.post(mlUrl, payload, { timeout: 20000 });
    return res.json(response.data);
  } catch (err) {
    console.error('Error calling ML service:', err.message || err);
    if (err.response && err.response.data) {
      // forward status and message from ML service
      return res.status(err.response.status).json(err.response.data);
    }
    return res.status(502).json({ error: 'Failed to reach ML service', details: err.message || String(err) });
  }
});

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
