// process.env.NODE_ENV = 'test'
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = require('chai').should
let expect = require('chai').expect
chai.use(chaiHttp)
const getAllUser = require('./user').getAllUser;
const postUser = require('./user').postUser;




describe('Get User tests', () => {
    it('Get all user ', () => {
        return getAllUser()
            .then(resp => {
                //expect an object back
                expect(typeof resp).to.equal('object')
                expect(resp[0].firstname).to.equal('LY34234sN')
            });
    });
});

describe('Post User tests', () => {
    let body = {
        "firstname": "LY34234sN",
        "lastname": "43242",
        "username": "erererasds",
        "password": "323333333334",
        "email": "aasdsd@mails.com",
        "tel": "0843456543",
        "privilege": "users"
    }
    it('create ', () => {
        return postUser(body)
            .then(resp => {
                //expect an object back
                expect(typeof resp).to.equal('object')
                expect(resp.message).to.equal('existed')
            });
    });
});