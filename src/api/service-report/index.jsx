import api from '../'	

export function getServiceReport() {	
  return api('get', 'service-report')	
}	

export function createSerReport (values) {	
  return api('post', 'service-report',{...values})	
}	

export function getSerReport (id) {	
  return api('get', `service-report/${id}`)	
}	

export function updateSerReport (id,values) {	
  return api('put', `service-report/${id}`,{...values})	
}	

export function deleteSerReport (id,values) {	
  return api('delete', `service-report/${id}`, {...values})	
}