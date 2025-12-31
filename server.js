const express = require('express');
const errorHandler = require('./middleware/errorHandle.js');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 4001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});