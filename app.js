const express = require("express");
const app = express();
const port = 4001;
const { connect } = require("./config/mongo");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect();

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
