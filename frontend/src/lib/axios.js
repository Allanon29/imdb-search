import axios from 'axios'
import miniToastr from './minitoastr'

const formatErrors = (errors) => {
  let msg = '<ul>'
  if (errors === undefined) {
    errors = {}
  }
  Object.keys(errors).forEach((error) => {
    msg += `<li>${error}: ${errors[error]}</li>`
  })
  msg += '</ul>'
  return msg
}

const handleError = (error) => {
  switch (error.response.status) {
    case 404:
      miniToastr.warn(formatErrors(error.response.data))
      break
    case 401:
      miniToastr.error(formatErrors(error.response.data), 'Unauthorized')
      break
    case 403:
      miniToastr.error(formatErrors(error.response.data), 'Forbidden')
      break
    case 422:
      miniToastr.warn(formatErrors(error.response.data), 'Unprocessable Entity')
      break
    case 500:
      miniToastr.error(formatErrors(error.response.data), 'Internal Server Error')
      break
    default:
      miniToastr.error(formatErrors(error.response.data), 'Unknown Error')
  }
}

class Axios {
  constructor () {
    this.instance = axios.create({
      baseURL: process.env.API_URL,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      if (error.response) {
        handleError(error)
      } 
      return Promise.reject(error)
    })
  }

  base () {
    return this.instance
  }
}

export default new Axios()
