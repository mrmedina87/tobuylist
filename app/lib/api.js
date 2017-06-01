class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      // 'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET')
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    console.log("3")
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    // const host = 'http://www.itempuppy.com' // items implementation
    const host = "http://rest.learncode.academy/api/mindworking-test"
    const url = `${host}${route}`
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null )
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json()
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err})
    // }).then( json => json.results ) // items implementation
    }).then( json => json )
  }
}
export default Api