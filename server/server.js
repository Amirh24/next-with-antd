const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fetch = require("isomorphic-unfetch");

const routes = require("./routes/routes");
const keys = require("../config/keys");
require("./models/Collectible");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production";
const nextApp = next({ dev });
const handle = routes.getRequestHandler(nextApp); //part of next config

mongoose.Promise = global.Promise;
const db = mongoose.connect(keys.MongoURI);

const Collectible = mongoose.model("collectibles");

new Collectible({
  tagline: "fdsfsd"
}).save();

nextApp.prepare().then(() => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  fetch(
    "https://api.opensea.io/api/v1/assets/?asset_contract_address=0x0239769a1adf4def9f07da824b80b9c4fcb59593&order_by=current_price&order_direction=asc"
  )
    .then(r => r.json())
    .then(data => {
      console.log(data);
    });

  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
