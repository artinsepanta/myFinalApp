import api from '../'

export function getServiceReport() {
  return api('get', 'service-report')
}

export function createSerReport (values) {
  return api('post', 'service-report',{...values})
}