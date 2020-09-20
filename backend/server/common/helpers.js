'use strict'
const formatErrors = (e) => {
  return [{ param: 'unknown', msg: e.message }]
}

export { formatErrors }
