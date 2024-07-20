const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
app.get('/', function (req, res) {
    res.send("hello baliram");
})
app.listen(port, () => console.log('listening on port ' + port + '...'));  //