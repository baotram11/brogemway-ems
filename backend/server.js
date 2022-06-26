const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect the database
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('EMS database connection established successfully!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
