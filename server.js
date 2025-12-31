const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 4001;

app.use("/api/contacts", require("./routes/contactRoutes.js"));

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});