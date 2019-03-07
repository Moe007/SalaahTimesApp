const mongoose = require("mongoose");

//SCHEMA SETUP
let AreaTimeSchema = new mongoose.Schema({
    area: String,
    month: Number,
    day: Number,
    fajr: String,
    sunrise: String,
    zuhr: String,
    asr: String,
    magrib: String,
    esha: String,
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


let AreaTime = mongoose.model("AreaTime", AreaTimeSchema);

module.exports = AreaTime;