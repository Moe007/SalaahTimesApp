const mongoose = require("mongoose");

//SCHEMA SETUP
let MasjidSchema = new mongoose.Schema({
    name: String,
    alt_name: String,
    key: String,
    address: String,
    area: String
});


let Masjid = mongoose.model("Masjid", MasjidSchema);

module.exports = Masjid;