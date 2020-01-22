import { createStore, combineReducers } from 'redux'

import serviceReportReducer from '../features/service-report/reducer'

const rootReducer = combineReducers({
  serviceReport: serviceReportReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store