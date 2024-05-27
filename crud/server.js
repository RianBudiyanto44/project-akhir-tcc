// crud/server.js
const express = require('express');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

app.use('/data', dataRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`CRUD service is running on port ${PORT}`);
});
