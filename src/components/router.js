import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ServiceReport from './service-report/ServiceReport'
import CreateSerReport from'./service-report/CreateSerReport'
import ShowSerReport from'./service-report/ShowSerReport'
import EditSerReport from'./service-report/EditServiceReport'

export default function Router() {
 return <Switch>
          <Route exact path='/'component={ServiceReport}/>
          <Route exact path='/service-report/new' component={CreateSerReport}/>
          <Route exact path='/service-report/:id' component={ShowSerReport}/>
          <Route exact path='/service-report/:id/edit' component={EditSerReport}/>
        </Switch>
}