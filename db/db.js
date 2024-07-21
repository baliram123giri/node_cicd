const mongoose = require('mongoose');
mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.serxuuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => console.log("Connection success")).catch((err) => console.log(err))
    