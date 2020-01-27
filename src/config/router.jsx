import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ServiceReport from '../features/service-report/index'
import CreateSerReport from './featuers/service-report/Create'
import ShowSerReport from './featuers/service-report/show'
 import EditSerReport from './featuers/service-report/Edit'

export default function Router() {
 return <Switch>
          <Route exact path='/'component={ServiceReport}/>
          <Route exact path='/service-report/new' component={CreateSerReport}/>
          <Route exact path='/service-report/:id' component={ShowSerReport}/>
          <Route exact path='/service-report/:id/edit' component={EditSerReport}/> */}
        </Switch>
}