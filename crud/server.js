const express = require('express');
const sequelize = require('./db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
