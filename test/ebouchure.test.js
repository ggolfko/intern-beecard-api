const expect = require('chai').expect
const getEbouchure = require('./ebouchure').getEbouchure
const doQuery = require('../utils/doQuery')
const postEbouchure = require('./ebouchure').postEbouchure
const putEbouchure = require('./ebouchure').putEbouchure
const deleteEbouchure = require('./ebouchure').deleteEbouchure


describe('EBOUCHURES TEST : ', () => {

  describe('Method POST ebouchures test', () => {

    it('create success', () => {
      let body = {
        "name": "Travel PHUKET Agency",
        "userId": 0,
        "content": "50% sales on the phuket now",
        "organization": "Marina HKT",
        "tel": "0856789875",
        "cc_tel": "+66",
        "email": "Marina@mail.com",
        "website": "https://www.marinabay.com",
        "line": "MarinaBay",
        "facebook": "Marina Bay",
        "twitter": "Marina Bay",
        "linkedin": "Marina Bay",
        "photo": "",
        "qrcode": "",
        "address": "Phuket, Thailand",
        "locality": "Phuket",
        "region": "Thai",
        "country": "Thailand",
        "postalCode": "83120",
        "isActive": 1,
        "locale": "",
        "publish": 1,
        "private": "",
        "market": "Tourism in Phuket",
        "note": "BIG Agency!!"
      }
      return postEbouchure(body)
        .then((resp) => {
          expect(resp.message).to.equal('added success')
        })
    })
    it('validate name, content, organization, tel, cc_tel, email, postalcode, country and address', () => {
      let body = {
        "name": "",
        "userId": 0,
        "content": "",
        "organization": "",
        "tel": "",
        "cc_tel": "",
        "email": "",
        "website": "https://www.marinabay.com",
        "line": "MarinaBay",
        "facebook": "Marina Bay",
        "twitter": "Marina Bay",
        "linkedin": "Marina Bay",
        "photo": "",
        "qrcode": "",
        "address": "",
        "locality": "Phuket",
        "region": "Thai",
        "country": "",
        "postalCode": "",
        "isActive": 1,
        "locale": "",
        "publish": 1,
        "private": "",
        "market": "Tourism in Phuket",
        "note": "BIG Agency!!"
      }
      return postEbouchure(body)
        .then((resp) => {
          for (let Res of resp) {
            if (Res.message == 'require name') {
              expect(Res.message).to.equal('require name')
            }
            if (Res.message == 'require content') {
              expect(Res.message).to.equal('require content')
            }
            if (Res.message == 'require organization') {
              expect(Res.message).to.equal('require organization')
            }
            if (Res.message == 'require tel') {
              expect(Res.message).to.equal('require tel')
            }
            if (Res.message == 'require email') {
              expect(Res.message).to.equal('require email')
            }
            if (Res.message == 'require cc_tel') {
              expect(Res.message).to.equal('require cc_tel')
            }
            if (Res.message == 'require postalcode') {
              expect(Res.message).to.equal('require postalcode')
            }
            if (Res.message == 'require country') {
              expect(Res.message).to.equal('require country')
            }
            if (Res.message == 'require address') {
              expect(Res.message).to.equal('require address')
            }
  
          }
  
        })
    })
  })
  
  describe('Method GET ebouchures test', () => {
  
    it('get all ebouchure', () => {
      return getEbouchure()
        .then((resp) => {
          expect(typeof resp).to.equal('object')
          expect(resp[0].name).to.be.a('string')
          expect(resp[0].content).to.be.a('string')
          expect(resp[0].organization).to.be.a('string')
          expect(resp[0].tel).to.be.a('string')
          expect(resp[0].cc_tel).to.be.a('string')
          expect(resp[0].email).to.be.a('string')
          expect(resp[0].website).to.be.a('string')
          expect(resp[0].line).to.be.a('string')
          expect(resp[0].facebook).to.be.a('string')
          expect(resp[0].twitter).to.be.a('string')
          expect(resp[0].linkedin).to.be.a('string')
          expect(resp[0].photo).to.be.a('string')
          expect(resp[0].qrcode).to.be.a('string')
          expect(resp[0].address).to.be.a('string')
          expect(resp[0].locality).to.be.a('string')
          expect(resp[0].region).to.be.a('string')
          expect(resp[0].country).to.be.a('string')
          expect(resp[0].postalCode).to.be.a('string')
          expect(resp[0].locale).to.be.a('string')
          expect(resp[0].market).to.be.a('string')
          expect(resp[0].note).to.be.a('string')
        })
    })
  
    it('Method GET: an ebouchures by id', () => {
      let sql = `SELECT * FROM ebouchures WHERE name LIKE 'Travel PHUKET Agency' AND email LIKE 'Marina@mail.com'`
      doQuery(sql).then((resp) => {
        return resp
      }).then((resp) => {
        return getEbouchure(resp[0].id)
      }).then((resp) => {
        expect(typeof resp).to.equal('object')
      })
    })
  })
  
  describe('Method PUT ebouchures test', () => {
  
    it('update success', () => {
      let sql = `SELECT * FROM ebouchures WHERE name LIKE 'Travel PHUKET Agency' AND email LIKE 'Marina@mail.com'`
      doQuery(sql).then((resp) => {
        return resp
      }).then((resp) => {
        let body = {
          "id": resp[0].id,
          "name": "Travel Marina Bay",
          "userId": 0,
          "content": "80% sales NOW !!",
          "organization": "Marina bay",
          "tel": "0856789875",
          "cc_tel": "+66",
          "email": "Marina@mail.com",
          "website": "https://www.marinabay.com",
          "line": "MarinaBay",
          "facebook": "Marina Bay",
          "twitter": "Marina Bay",
          "linkedin": "Marina Bay",
          "photo": "",
          "qrcode": "",
          "address": "Phuket, Thailand",
          "locality": "Phuket",
          "region": "Thai",
          "country": "Thailand",
          "postalCode": "83120",
          "isActive": 1,
          "locale": "",
          "publish": 1,
          "private": "",
          "market": "Tourism in Phuket",
          "note": "BIG Agency!!"
        }
        return putEbouchure(body)
      }).then((resp) => {
        expect(resp.message).to.equal('update success!')
      })
    })
  })
  
  describe('Method DELETE ebouchure', () => {
  
    it('delete success', () => {
      let sql = `SELECT * FROM ebouchures WHERE name LIKE 'Travel Marina Bay' AND email LIKE 'Marina@mail.com'`
      setTimeout(function () {
        doQuery(sql).then((resp) => {
          return resp
          
        }).then((resp) => {
          let body = {
            "id": resp[0].id
          }
          return deleteEbouchure(body)
        }).then((resp) => {
          expect(resp.message).to.equal('deleted success!')
        })
      
      }, 2000)
    })
  })
})

