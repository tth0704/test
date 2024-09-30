const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/test', function(req, res){ 
  res.status(200).json({ip: req.ip.split(':').pop()})
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
