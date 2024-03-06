const express = require('express');
const app = express();
const port = 3002; // Use the desired port

// Your other middleware and route definitions can go here

// Example GET route at the root endpoint
app.get('/', (req, res) => {
  try {
    // Your normal route handling logic here
    res.send('Hello, World!');
  } catch (error) {
    console.error('Error:', error);
    // Send an error response
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
