const express = require('express');
const app = express();
require("dotenv").config()
//database
require('./db/db')
const cors = require("cors")
const port = process.env.PORT || 4000

app.use(cors({ origin: "*" }))
app.use(express.json());

app.use("/api/v1", require("./routers/index"))

app.use("", (req, res) => {
    return res.status(404).json({ message: `${req.path} not found` });
})
app.listen(port, () => console.log('listening on port ' + port + '...'));  //