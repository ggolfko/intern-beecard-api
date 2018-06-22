var express = require('express')
var con = require ('../config/route')
var router = express.Router()
var mongoObjectId = require('../utils/generateId')

router.route('/users')

    .get((req, res) => {
        var sql = "SELECT * FROM users"
        const query = req.query
        if(!!query.id){
            sql = `SELECT * FROM users WHERE id='${body.id}'`
        }
        con.query(sql, function(err, result) {
            if(err) throw err
            console.log("get it now")
            res.json(result)
    })
        })

    .post((req, res) => {
        const body = req.body
        let sql = `INSERT INTO users(userId, firstname, lastname, username, password, email, tel, privilege)
                VALUES ('${mongoObjectId()}', '${body.firstname}', '${body.lastname}', '${body.username}', '${body.password}', 
                '${body.email}', '${body.tel}', '${body.privilege}')`
        console.log(mongoObjectId)
        console.log(sql)
        con.query(sql, function(err, result) {
            if(err) throw err
            res.json("add success!")
    })
    })

    .put((req, res) => {
        const body = req.body
        let sql = `UPDATE users SET firstname='${body.firstname}', lastname='${body.lastname}', username='${body.username}', password='${body.password}', 
                  email='${body.email}', tel='${body.tel}', privilege='${body.privilege}' WHERE id='${body.id}'`
        console.log(sql)
        con.query(sql, function(err, result) {
            if(err) throw err
            res.json("success!")
        })
    })

    .delete((req, res) => {
        const body = req.body
        let sql = `DELETE FROM users WHERE '${body.id}'`
        con.query(sql, function(err, result) {
            if(err) throw err
            res.json({message:"deleted success!"})
        })
    })

router.route('/users/:id')

    .get((req, res) => {
        const params = req.params
        var sql = `SELECT * FROM users WHERE id='${params.id}'`
        con.query(sql, function(err, result) {
            if(err) throw err
            res.json(result)
        })
    })
    
module.exports = router