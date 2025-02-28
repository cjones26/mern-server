const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./services/db');

// Connect to MongoDB
connectDatabase();

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use('/', (req, res) => {
  res.send('Welcome to the backend');
});
app.use('/user', require('./routes/user'));

app.listen(8080, () => console.log('Server is running on port 8080'));
