import { createStore, combineReducers } from 'redux'
 import { reducer as formReducer } from 'redux-form';
import state from '../../redux/state';
import serviceReportsReducer from '../../redux/reducers/serviceReportsReducer';

const rootReducer = combineReducers({
   form: formReducer,
  serviceReports: serviceReportsReducer,
})

const store = createStore(
  rootReducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store