const express = require('express');
const app = express();

const ENV = 'development';
const DOMAIN = ENV === 'development' ? 'localhost' : '';
const PORT = 6001;

app.use(express.json({ extended: false }));

app.get('/api/', (req, res) => {
  try {
    const mockData = {
      firstName: 'Adeesh',
      lastName: 'Sharma',
    };

    res.json(mockData);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, `${DOMAIN}`, () => {
  console.log(`Server listening on port ${PORT}`);
});
