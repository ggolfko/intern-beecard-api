# RESTFUL API DOC


GET     /ebouchures    
get ebourchures table
```JSON
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
    }
```
PUT    /ebouchures
payload id=?

##### id is primary key that can take you update data
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
