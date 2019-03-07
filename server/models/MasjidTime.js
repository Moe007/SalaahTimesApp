const mongoose = require("mongoose");

//SCHEMA SETUP
let MasjidTimeSchema = new mongoose.Schema({
    masjid_key: String,
    month: Number,
    day: Number,
    fajr_athan: String,
    fajr_salaah: String,
    zuhr_athan: String,
    zuhr_salaah: String,
    asr_athan: String,
    asr_salaah: String,
    magrib_athan: String,
    magrib_salaah: String,
    isha_athan: String,
    isha_salaah: String,
    jummah_athan: String,
    jummah_khutbah: String,
    jummah_salaah: String,
    zuhr_athan_special: String,
    zuhr_salaah_special: String
});


let MasjidTime = mongoose.model("MasjidTime", MasjidTimeSchema);

module.exports = MasjidTime;