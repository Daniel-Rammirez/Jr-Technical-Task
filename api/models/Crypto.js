const mongoose = require("mongoose");
const { Schema } = mongoose;

const CryptoSchema = new Schema({
  symbol: String,
  slug: String,
  max_supply: Number,
  cmc_rank: Number,
  quote: Object,
  id: Number,
});

const CryptoModel = mongoose.model("Crypto", CryptoSchema);

module.exports = CryptoModel;
