// process.env.NODE_ENV = 'test'
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = require('chai').should
let expect = require('chai').expect
chai.use(chaiHttp)
const getUser = require('./user').getUser;
const postUser = require('./user').postUser;
const deleteUser = require('./user').deleteUser
const doQuery = require('../utils/doQuery')


describe('Post User tests', () => {

    it('create success', () => {
        let body = {
            "firstname": "LY34234sN",
            "lastname": "43242",
            "username": "babababa",
            "password": "323333333334",
            "email": "aasdsdbababa@mails.com",
            "tel": "0843456543",
            "privilege": "users"
        }
        return postUser(body)
            .then(resp => {
                expect(resp.message).to.equal('added success')
            })
    })
    it('validate username and email', () => {
        let body = {
            "firstname": "LY34234sN",
            "lastname": "43242",
            "username": "",
            "password": "323333333334",
            "email": "",
            "tel": "0843456543",
            "privilege": "users"
        }
        return postUser(body)
            .then(resp => {
                expect(typeof resp).to.equal('object')
                expect(resp.message).to.equal('username or email is require')
            });
    });
    it('validate firstname, lastname, password and username', () => {
        let body = {
            "firstname": "",
            "lastname": "",
            "username": "lolololololololol",
            "password": "",
            "email": "hello@mail.com",
            "tel": "0843456543",
            "privilege": "users"
        }
        return postUser(body)
            .then(resp => {
                expect(resp[0].message).to.equal('Username must have 5 to 10 characters')
                expect(resp[1].message).to.equal('firstname require')
                expect(resp[2].message).to.equal('Password must have 8 to 16 characters')
                expect(resp[3].message).to.equal('password require')
                expect(resp[4].message).to.equal('lastname require')

            })
    })
    it('create email existed', () => {
        let body = {
            "firstname": "LY34234sN",
            "lastname": "43242",
            "username": "babababa",
            "password": "323333333334",
            "email": "aasdsdbababa@mails.com",
            "tel": "0843456543",
            "privilege": "users"
        }
        return postUser(body)
            .then(resp => {
                expect(resp[0].message).to.equal('existed')
            })
    })
    it('create username existed', () => {
        let body = {
            "firstname": "LY34234sN",
            "lastname": "43242",
            "username": "babababa",
            "password": "323333333334",
            "email": "aasdsdbababa@mails.com",
            "tel": "0843456543",
            "privilege": "users"
        }
        return postUser(body)
            .then(resp => {
                expect(resp[0].message).to.equal('existed')
            })
    })
});

describe('Get User tests', () => {

    it('Get all user ', () => {
        return getUser()
            .then(resp => {
                //expect an object back
                expect(typeof resp).to.equal('object')
                expect(resp[0].firstname).to.a('string')
                expect(resp[0].lastname).to.a('string')
                expect(resp[0].username).to.a('string')
                expect(resp[0].password).to.a('string')
                expect(resp[0].email).to.a('string')
                expect(resp[0].tel).to.a('string')
            });
    });

    it('Method GET: a user by id', () => {
        let sql = `SELECT * FROM users WHERE username LIKE 'babababa' AND email LIKE 'aasdsdbababa@mails.com'`
        doQuery(sql).then((resp) => {
            return resp
        }).then((resp) => {
            return getUser(resp[0].id)
        }).then((resp) => {
            // console.log(resp[0].id)
            expect(typeof resp).to.equal('object')
            expect(resp[0].firstname).to.a('string')
            expect(resp[0].lastname).to.a('string')
            expect(resp[0].username).to.a('string')
            expect(resp[0].password).to.a('string')
            expect(resp[0].email).to.a('string')
            expect(resp[0].tel).to.a('string')
        })
    })

});



describe('Method DELETE users test', () => {

    it('Delete a user by id', () => {
        let sql = `SELECT * FROM users WHERE username LIKE 'babababa' AND email LIKE 'aasdsdbababa@mails.com'`
        doQuery(sql).then((resp) => {
            return resp
        }).then((resp) => {
            // console.log(resp[0].id)
            return deleteUser(resp[0])
        }).then((resp) => {
            expect(typeof resp).to.equal('object')
            expect(resp.message).to.equal('delete success')
        })
    })
})

