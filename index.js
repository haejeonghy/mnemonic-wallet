const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', function(req, res, next) {
    res.status(200).send({"message": "Mnemonic server is running..."});
});

const walletRouter = require('./routes/wallet');
app.use('/wallet', walletRouter);

app.listen(port, () => {
    console.log(`Server listening on port: ${port} ...`);
});
  
module.exports = app;
  