const axios = require('axios');

module.exports = {
    getEbouchure(id) {
        let url
        if (id) {
            url = `http://localhost:7777/api/images/${id}`
        } else {
            url = `http://localhost:7777/api/images`
        }
        return axios
            .get(url)
            .then(res => res.data)
            .catch(error => console.log(error))
    },
    postEbouchure(body) {
        return axios.post('http://localhost:7777/api/images/create', body)
            .then((resp) => {
                // console.log(resp.data[0])
                return resp.data
            })
            .catch(error => console.log(error))
    },
    deleteEbouchure(body) {
        return axios.post('http://localhost:7777/api/images/delete', body)
            .then((resp) => {
                return resp.data
            })
            .catch(error => console.log(error))
    },
    putEbouchure(body) {
        return axios.post('http://localhost:7777/api/images/update', body
            )
            .then((resp) => {
                return resp.data

            }).catch(error => console.log(error))
    }
};