const express = require('express')
const path = require('path')
const fs = require('fs')
const MasjidTime = require(path.join(__dirname, '../models/MasjidTime.js'))
var router = express.Router()

router.use('/:location_key/:month/:day', (req, res, next) => {
  const location_key = req.params.location_key
  const month = req.params.month
  const day = req.params.day
  MasjidTime.find({month: month, day: day, masjid_key: location_key}, (err, times) => {
    err
      ? console.log(err)
      : res.json(times)
  })
})

router.use('/:location_key/:month', (req, res) => {
  const location_key = req.params.location_key
  const month = req.params.month
  MasjidTime.find({ month: month, masjid_key: location_key }, (err, times) => {
    err
      ? console.log(err)
      : res.json(times)
  })
})

router.use('/:location_key', (req, res) => {
  const location_key = req.params.location_key
  MasjidTime.find({masjid_key: location_key }, (err, times) => {
    err
      ? console.log(err)
      : res.json(times)
  })
})

module.exports = router
