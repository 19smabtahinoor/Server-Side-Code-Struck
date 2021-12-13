const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoute');
const productsRoute = require('./routes/productsRoute');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/posts", postRoutes)
app.use("/products", productsRoute)

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(5000,() => {
    console.log('Server is running on port 5000');
})