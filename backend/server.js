const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  if (age >= 18) {
    return res.json({ message: 'Welcome to the main site!' });
  } else {
    return res.json({ message: 'Welcome to the kid version!' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
