# RESTFUL API DOC


GET     /ebouchures    
get ebourchures table
```JSON
{
        "id": 1,
        "name": "horus",
        "ebrochureId": "",
        "paramsUrl": "",
        "content": "",
        "organization": "",
        "tel": "",
        "cc_tel": "",
        "email": "",
        "website": "",
        "line": "",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "photo": "",
        "qrcode": "",
        "address": "",
        "locality": "",
        "region": "",
        "country": "",
        "postalCode": "",
        "isActive": 0,
        "locale": "",
        "publish": 0,
        "private": "",
        "market": "",
        "note": "",
        "expiryDate": "0000-00-00 00:00:00",
        "created_at": "2018-06-20T10:02:18.000Z",
        "updated_at": "2018-06-20T10:02:18.000Z"
    }
```
PUT    /ebouchures
payload id=?

id is primary key that can take you update data
```json
{
        "id": 1,
        "name": "horus",
        "ebrochureId": "",
        "paramsUrl": "",
        "userId": 0,
        "content": "",
        "organization": "",
        "tel": "",
        "cc_tel": "",
        "email": "",
        "website": "",
        "line": "",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "photo": "",
        "qrcode": "",
        "address": "",
        "locality": "",
        "region": "",
        "country": "",
        "postalCode": "",
        "isActive": 0,
        "locale": "",
        "publish": 0,
        "private": "",
        "market": "",
        "note": "",
        "expiryDate": "0000-00-00 00:00:00",
        "created_at": "2018-06-20T10:02:18.000Z",
        "updated_at": "2018-06-20T10:02:18.000Z"
    },
``` 

POST /ebouchures

insert data into ebouchures table

```Json
{
        "name": "haleluya",
        "ebrochureId": "",
        "paramsUrl": "",
        "userId": 0,
        "content": "",
        "organization": "",
        "tel": "",
        "cc_tel": "",
        "email": "",
        "website": "",
        "line": "",
        "facebook": "",
        "twitter": "",
        "linkedin": "",
        "photo": "",
        "qrcode": "",
        "address": "",
        "locality": "",
        "region": "",
        "country": "",
        "postalCode": "",
        "isActive": 0,
        "locale": "",
        "publish": 0,
        "private": "",
        "market": "",
        "note": "",
}
```

DELETE /ebouchures require id in payload

delete row which id you fill in payload

```json
{
    "id" : 19
}
```

GET     /ebouchures/users    
get users table

GET     /ebourchures/users?id=1 ( require id if you want to get only 1 row )
```json
{
        "id": 1,
        "userId": "",
        "firstname": "สวัสดี",
        "lastname": "เราเอง",
        "username": "aabababab",
        "password": "xx56782",
        "email": "zzzzzzzb@hotmail.com",
        "tel": "0823333333",
        "privilege": "user",
        "created_at": "2018-06-21T06:56:55.000Z"
}
```
POST /ebouchures/users

insert data into users table
```json
{
        "userId": "5b2b7a7e0c5571757e967f20",
        "firstname": "aaaaa",
        "lastname": "bbbbb",
        "username": "aabababab",
        "password": "xx56782",
        "email": "aaabbbb@hotmail.com",
        "tel": "0823333333",
        "privilege": "user",
        "created_at": "2018-06-21T10:14:22.000Z"
    }
```
PUT    /ebouchures/users
payload id=?

id is primary key that can take you update data
```json
{  
	"id" : 2,
	"firstname": "Kobe"
}
```
