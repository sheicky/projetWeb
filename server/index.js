const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/api/auth');
const productRoutes = require('./routes/api/products');
const userRoutes = require('./routes/api/users'); // New route for user management
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); // New route for user management

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
