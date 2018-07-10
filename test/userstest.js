// process.env.NODE_ENV = 'test'
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = require('chai').should
let expect = require('chai').expect

chai.use(chaiHttp)

// describe('test test', () => {
//     beforeEach(() => {
//         chai.request(server)
//             .get('http://localhost:7777/api/users')
//             .reply(200, res)
//     })
// })


describe('/POST users', () => {
    let users = {
        firstname: 'LYN',
        lastname: 'LYNNYX',
        username: 'lynadmin',
        password: 'adminLyn',
        email: 'lyn@mail.com',
        tel: '0843456543',
        privilege: 'users'
    }
    it('it should POST data', (done) => {
        chai.request(server)
            .post('http://localhost:7777/api/users')
            .send(users)
            .end((err, res) => {
                console.log({data: res})
                expect(res).to.be.an('object')            
                done()
            })
    })

    it('check field', (done) => {
        chai.request(server)
            .post('http://localhost:7777/api/users')
            .send(users)
            .end((err, res) => {
                done()
            })         
    })
})

describe('/GET users', () => {
    it('it should GET all the users is object', (done) => {
        chai.request(server)
            .get('http://localhost:7777/api/users')
            .end((err, res) => {
                console.log(res.status)
                expect(res).status(200)
                //expect(typeof res).to.equal('object')
                done()
            })
    })

})


describe('/PUT users', () => {
    it('update users', (done) => {
        chai.request(server)
            .put('http://localhost:7777/api/users')
            .end((err, res) => {
                done()
            })
    })
})

describe('/DELETE users', () => {
    it('delete users', (done) => {
        chai.request(server)
            .delete('http://localhost:7777/api/users')
            .end((err ,res) => {
                done()
            })
    })
})