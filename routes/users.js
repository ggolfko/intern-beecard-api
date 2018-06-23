var express = require("express");
var con = require("../config/route");
var router = express.Router();
var mongoObjectId = require("../utils/generateId");

router
   .route("/users")

   .get((req, res) => {
      var sql = "SELECT * FROM users";
      const query = req.query;
      if (!!query.id) {
         sql = `SELECT * FROM users WHERE id='${body.id}'`;
      }
      doQuery(sql)
         .then(resp => res.json(resp))
         .catch(err => {
            res.json({
               message: err
            });
         });
   })

   .post((req, res) => {
      const body = req.body;
      let mistake = [];
      if (!body.firstname) {
         mistake.push({
            message: "require field!"
         });
      }
      if (!body.lastname) {
         console.log(body.lastname);
         mistake.push({
            message: "require lastname"
         });
      }
      if (!body.username) {
         mistake.push({
            message: "require username"
         });
      }
      if (!body.password) {
         mistake.push({
            message: "require password"
         });
      }
      if (!body.email) {
         mistake.push({
            message: "require email"
         });
      }
      if (body.firstname && body.lastname && body.username && body.password && body.email) {
         let sql = `INSERT INTO users(userId, firstname, lastname, username, password, email, tel, privilege)
          VALUES ('${mongoObjectId()}', '${body.firstname}', '${
          body.lastname}', '${body.username}', '${body.password}', 
          '${body.email}', '${body.tel}', '${body.privilege}')`;
         doQuery(sql).then(resp => {
            console.log(resp)
            res.json({
               message: 'added success'
            })
         }).catch(err => {
            res.json({
               message: err
            });
         });
      }
      if (mistake.length != 0)
         res.json(mistake);
   })

   .put((req, res) => {
      const body = req.body;
      let sql = `UPDATE users SET firstname='${body.firstname}', lastname='${
      body.lastname
    }', username='${body.username}', password='${body.password}', 
                  email='${body.email}', tel='${body.tel}', privilege='${
      body.privilege
    }' WHERE id='${body.id}'`;
      doQuery(sql)
         .then(resp => res.json("updated success!"))
         .catch(err => {
            res.json({
               message: err
            });
         });
   })

   .delete((req, res) => {
      const body = req.body;
      let sql = `DELETE FROM users WHERE id='${body.id}'`;
      doQuery(sql)
         .then(resp => res.json("deleted success!"))
         .catch(err => {
            res.json({
               message: err
            });
         });
   });

router
   .route("/users/:id")

   .get((req, res) => {
      const params = req.params;
      var sql = `SELECT * FROM users WHERE id='${params.id}'`;
      // con.query(sql, function(err, result) {
      //     if(err) throw err
      //     res.json(result)
      // })
      doQuery(sql)
         .then(resp => res.json(resp))
         .catch(err => {
            res.json({
               message: err
            });
         });
   });

function doQuery(sql) {
   return new Promise(function (resolve, reject) {
      con.query(sql, function (err, result) {
         if (err) reject(err);
         resolve(result);
      });
   });
}

module.exports = router;