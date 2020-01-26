import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import serviceReportReducer from './reducer'

const rootReducer = combineReducers({
  form: formReducer,
  serviceReport: serviceReportReducer,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store