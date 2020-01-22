import api from '../'

export function getServiceReport() {
  return api('get', 'service-report')
}