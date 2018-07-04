const express = require('express')
const con = require('../config/route')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const UPLOAD_PATH = 'uploads'
const del = require('del')

var ID = function () {
  return Math.random().toString(36).substr(2, 9)
}
const cleanFolder = function (folderPath, filename) {
  del.sync([`${folderPath}/${filename}`])
}

const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('Only image file are allowed'), false)
  }
  cb(null, true)
}

var hashtime = ID(Date.now())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    let name = file.originalname
    let ext = name.substr(name.lastIndexOf('.') + 1);
    console.log(ext)
    cb(null, hashtime + '_' + ID(name) + "." + ext)
  }
})

const upload = multer({
  storage: storage,
  fileFilter: imageFilter
})

const time = Date.now()

router
  .route('/images')

  .post(upload.single('Images'), (req, res) => {
    console.log(req.file)

    let sql = `INSERT INTO images(filename, path, mimetype) VALUES ('${req.file.filename}', '${req.file.path}', '${req.file.mimetype}')`
    doQuery(sql).then((resp) => {
      res.json({
        message: 'success',
        resp: resp,
        data: req.file

      })
    })
  })

  .get((req, res) => {
    let sql = `SELECT * FROM images`
    doQuery(sql).then((resp) => res.json(resp))
  })


  .delete((req, res) => {
    const body = req.body
    let sql = `SELECT * FROM images WHERE id='${body.id}'`
    doQuery(sql).then((resp) => {
      let state = false
      console.log(resp)
      if (resp) {
        for (let img of resp) {
          if (img.id == body.id) {
            cleanFolder(UPLOAD_PATH, img.filename)
            state = true
          }
        }
      }
      return state
    }).then((state) => {
      if(state){
        sql = `DELETE FROM images WHERE id='${body.id}'`
        doQuery(sql).then((resp)=>{
          res.json({
            message: 'delete success'
          })
        })
      }else{
        res.json({message:'error'})
      }
          
    })
  })


router
  .route('/images/:filename')

  .get((req, res) => {

    const params = req.params
    let sql = `SELECT * FROM images WHERE filename='${params.filename}'`
    doQuery(sql).then((resp) => {
      if (resp) {
        for (let img of resp) {
          if (params.filename == img.filename) {
            res.setHeader('Content-Type', img.mimetype)
            fs.createReadStream(path.join(UPLOAD_PATH, img.filename)).pipe(res)
            return
          }
        }
      }
      res.sendStatus(404)
    })

  })





function doQuery(sql) {
  return new Promise(function (resolve, reject) {
    con.query(sql, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}




// function sha1(data) {
//   var generator = crypto.createHash('sha1');
//   generator.update(data)
//   return generator.digest('hex')
// }

// function md5(data) {
//   var generator = crypto.createHash('md5');
//   generator.update(data)
//   return generator.digest('hex')
// }



// crypto.createHash('sha1'), update(data).digest('hex')
module.exports = router