const express = require('express')
const con = require('../config/route')
const router = express.Router()
const multer = require('multer')
const crypto = require('crypto')
const hashInt = require('hash-int')



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})

const upload = multer({
  storage: storage
})

const time = Date.now()
const hashed = crypto.getHashes();


console.log(time)
console.log(hashInt(time))

var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9)
}
var boat = ID('hello')
console.log(boat)

router
  .route('/images')

  .post(upload.single('Images'), (req, res) => {
    console.log(req.file)

    // let sql = `INSERT INTO images(filename, path, mimetype) VALUES ('${req.file.filename}', '${req.file.path}', '${req.file.mimetype}')`
    doQuery(sql).then((resp) => {
      res.json({
        message: 'success',
        resp

      })
    })
  })

  .get((req, res) => {
    let sql = `SELECT * FROM images`
    doQuery(sql).then((resp) => res.json(resp))
  })


function doQuery(sql) {
  return new Promise(function (resolve, reject) {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}

function sha1(data) {
  var generator = crypto.createHash('sha1');
  generator.update(data)
  return generator.digest('hex')
}

// function md5(data) {
//   var generator = crypto.createHash('md5');
//   generator.update(data)
//   return generator.digest('hex')
// }



// crypto.createHash('sha1'), update(data).digest('hex')
module.exports = router