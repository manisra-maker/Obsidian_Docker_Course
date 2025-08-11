const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(express.static('public/view/'));


// API routes
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
