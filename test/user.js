const axios = require('axios');

module.exports = {
  getUser(id) {
    let url
    if (id) {
      url = `http://localhost:7777/api/users/${id}`
    } else {
      url = `http://localhost:7777/api/users`
    }
    return axios
      .get(url)
      .then(res => res.data)
      .catch(error => console.log(error))
  },
  postUser(body) {
    return axios.post('http://localhost:7777/api/users/create', body)
      .then((resp) => {
        // console.log(resp.data[0])
        return resp.data
      })
      .catch(error => console.log(error))
  },
  deleteUser(body) {
    return axios.post('http://localhost:7777/api/users/delete', body)
      .then((resp) => {
        return resp.data
      })
      .catch(error => console.log(error))
  },
  putUser(body) {
    return axios.post('http://localhost:7777/api/users/update', body

      )
      .then((resp) => {
        return resp.data

      }).catch(error => console.log(error))
  }
};