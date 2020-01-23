import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ServiceReport from '../features/service-report'
import CreateSerReport from'../features/service-report/create'
import ShowSerReport from'../features/service-report/show'

export default function Router () {
 return <Switch>
          <Route exact path='/'component={ServiceReport}/>
          <Route exact path='/service-report/new'component={CreateSerReport}/>
          <Route exact path='/service-report/:id'component={ShowSerReport}/>
        </Switch>
}