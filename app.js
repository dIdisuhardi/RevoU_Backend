require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const materiRoutes = require('./routes/materiRoutes');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/materi", materiRoutes)

app.listen(PORT, () => {
  console.log('Service Running on port ' + PORT);
});