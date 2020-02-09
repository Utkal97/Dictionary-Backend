const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();    //Load the environment variables
const specificRoutes = require('./routes/specificRoutes.js');
const unSpecificRoutes = require('./routes/unSpecificRoutes.js');

mongoose.connect( 
    process.env.DB_CONNECT,
    { useNewUrlParser: true })
        .then(()=>console.log("Connection established to MongoDB Cloud"))
        .catch((err) => console.log(`Could connect to MongoDB due to ERROR : ${err}`));

const app = express();
app.use('/word',specificRoutes);
app.use('/words',unSpecificRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running. Listening at port ${PORT}`);
});