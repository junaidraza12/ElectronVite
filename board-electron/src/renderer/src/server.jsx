// server.js
const express = require('express');
const app = express();
const port = 6000; // Choose a port

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;
  // Process the form data (e.g., save to database)
  console.log('Received form data:', formData);
  res.status(200).send('Form data received successfully');
});

// Start the server
app.listen(6000, () => {
  console.log(`Server listening on port http://localhost: ${6000}`);
});
