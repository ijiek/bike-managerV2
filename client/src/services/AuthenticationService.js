// for the login page
/* eslint-disable */

import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticatorService.register({
//     email: 'testing@gmail.com',
//     password: 'asdfg'
// })
