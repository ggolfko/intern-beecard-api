const axios = require('axios');

module.exports = {
    getAllUser() {
        return axios
            .get(`http://localhost:7777/api/users`)
            .then(res => res.data)
            .catch(error => console.log(error))
    },
    postUser(body) {
        return axios.post('http://localhost:7777/api/users', body)
            .then((resp) => {
                // console.log(resp.data[0])
                return resp.data[0]
            })
            .catch(error => console.log(error))
    }
};