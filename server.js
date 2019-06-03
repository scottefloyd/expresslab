"use strict";

const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", routes);

let port = 3000;
app.listen(port, () => console.log(`Server running on PORT: ${port}`));  