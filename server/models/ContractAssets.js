const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ContractAssetsSchema = new schema({
  tagline: { type: String }
});

module.exports = mongoose.model("contractsassets", ContractAssetsSchema);
