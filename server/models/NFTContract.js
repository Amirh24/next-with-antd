const mongoose = require("mongoose");
const schema = mongoose.Schema;

const NFTContractSchema = new schema({
  tagline: { type: String }
});

module.exports = mongoose.model("nftcontracts", NFTcontractSchema);
