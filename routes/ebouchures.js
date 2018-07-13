var express = require('express')
var con = require('../config/route')
var router = express.Router()
var mongoObjectId = require('../utils/generateId')
const doQuery = require('../utils/doQuery')


router.route('/ebouchures')

     .get((req, res) => {
      var sql = `SELECT * FROM ebouchures`
      const query = req.query
      if (!!query.id) {
         sql = `SELECT * FROM ebouchures WHERE id='${query.id}'`
      }
      if (query.q){
            sql = `SELECT * FROM ebouchures WHERE  name REGEXP '${query.q}' OR content REGEXP '${query.q}' OR organization REGEXP '${query.q}' OR 
            tel REGEXP '${query.q}' OR tel REGEXP '${query.q}' OR cc_tel REGEXP '${query.q}' OR email REGEXP '${query.q}' OR 
            website REGEXP '${query.q}' OR line REGEXP '${query.q}' OR facebook REGEXP '${query.q}' OR twitter REGEXP '${query.q}' OR
            linkedin REGEXP '${query.q}' OR photo REGEXP '${query.q}' OR qrcode REGEXP '${query.q}' OR address REGEXP '${query.q}' OR 
            locality REGEXP '${query.q}' OR region REGEXP '${query.q}' OR country REGEXP '${query.q}' OR postalCode REGEXP '${query.q}' OR 
            isActive REGEXP '${query.q}' OR locale REGEXP '${query.q}' OR publish REGEXP '${query.q}' OR private REGEXP '${query.q}' OR
            market REGEXP '${query.q}' OR note REGEXP '${query.q}'`
      }
      doQuery(sql).then(resp => res.json(resp))
         .catch((err) => {
            res.json({
               message: err
            })
         })
   })

router.route('/ebouchures/:id')

   .get((req, res) => {
      const params = req.params
      var sql = `SELECT * FROM ebouchures WHERE id='${params.id}'`
      doQuery(sql).then(resp => res.json(resp))
         .catch((err) => {
            res.json({
               message: err
            })
         })
   })

router      
   .route('/ebouchures/create')

   .post((req, res) => {
      const body = req.body
      let action = true
      let miss = []
      if (!body.name) {
         miss.push({
            message: 'require name'
         })
         action = false
      }
      if (!body.content) {
         miss.push({
            message: 'require content'
         })
         action = false
      }
      if (!body.organization) {
         miss.push({
            message: 'require organization'
         })
         action = false
      }
      if (!body.tel) {
         miss.push({
            message: 'require tel'
         })
         action = false
      }
      if (!body.email) {
         miss.push({
            message: 'require email'
         })
         action = false
      }
      if(!body.cc_tel){
         miss.push({
            message: 'require cc_tel'
         })
         action = false
      }
      if (!body.postalCode) {
         miss.push({
            message: 'require postalcode'
         })
         action = false
      }
      if (!body.country) {
         miss.push({
            message: 'require country'
         })
         action = false
      }
      if (!body.address) {
         miss.push({
            message: 'require address'
         })
         action = false
      }
      if (body.name && action) {
         var sql = `INSERT INTO ebouchures(name, ebrochureId, userId, content, organization, tel, cc_tel, email,
                website, line, facebook, twitter, linkedin,  photo, qrcode, address, locality, region, country,
                postalCode, isActive, locale, publish, private, market, note) 
                VALUES ('${body.name}', '${mongoObjectId()}', '${body.userId}', '${body.content}', '${body.organization}',
                '${body.tel}', '${body.cc_tel}', '${body.email}', '${body.website}', '${body.line}', '${body.facebook}', '${body.twiiter}',
                '${body.linkedin}', '${body.photo}', '${body.qrcode}', '${body.address}', '${body.locality}', '${body.region}', '${body.country}',
                '${body.postalCode}', '${body.isActive}', '${body.locale}', '${body.publish}', '${body.private}',
                '${body.market}', '${body.note}')`
         doQuery(sql).then(resp => res.json({message: 'added success'}))
            .catch((err) => {
               res.json({
                  message: err
               })
            })
      }else{
            res.json(miss)
      }
   })

router
   .route('/ebouchures/update')

   .post((req, res) => {
      const body = req.body
      let sql = `UPDATE ebouchures SET name='${body.name}', content='${body.content}', organization='${body.organization}', 
                  tel='${body.tel}', tel='${body.tel}', cc_tel='${body.cc_tel}', email='${body.email}', 
                  website='${body.website}', line='${body.line}', facebook='${body.facebook}', twitter='${body.twiiter}',
                  linkedin='${body.linkedin}', photo='${body.photo}', qrcode='${body.qrcode}', address='${body.address}', 
                  locality='${body.locality}', region='${body.region}', country='${body.country}', postalCode='${body.postalCode}', 
                  isActive='${body.isActive}', locale='${body.locale}', publish='${body.publish}', private='${body.private}',
                  market='${body.market}', note='${body.note}' WHERE id='${body.id}'  `

      doQuery(sql).then(resp => res.json({message: 'update success!'}))
         .catch((err) => {
            res.json({
               message: err
            })
         })
   })

router
   .route('/ebouchures/delete')

   .post((req, res) => {
      var sql = `DELETE FROM ebouchures WHERE id='${req.body.id}'`
      doQuery(sql).then(resp => res.json({message: 'deleted success!'}))
         .catch((err) => {
            res.json({
               message: err
            })
         })
   })


module.exports = router