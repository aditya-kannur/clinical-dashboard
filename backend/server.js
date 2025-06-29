const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const trialRoutes = require('./routes/trialRoutes');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('📡 API is running');
});

app.use('/trials', trialRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
