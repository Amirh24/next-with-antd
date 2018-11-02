const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CollectibleSchema = new schema({
  tagline: { type: String }
});

module.exports = mongoose.model("collectibles", CollectibleSchema);
