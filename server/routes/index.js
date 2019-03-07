const express = require('express')
const path = require('path')
const router = express.Router()
const Masjid = require(path.join(__dirname, '../models/Masjid.js'))

router.use('/:location_key', (req, res) => {
  const location_key = req.params.location_key
  Masjid.findOne({key: location_key}, (err, index) => {
    err
      ? console.log(err)
      : res.json(index)    
  })
})

router.use('/', (req, res) => {
  Masjid.find((err, masaajid) => {
    err 
      ? console.log(err)
      : res.json(masaajid)
  })
})

module.exports = router
