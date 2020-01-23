const serviceReportReducer = (state ={
  ser:[],
  loaded:false,
}, action) => {
  switch(action.type) {
    case 'LOAD':
      return action.payload

      default:
        return state
  }
}

export default serviceReportReducer