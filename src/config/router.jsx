import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ServiceReport from '.'
import CreateSerReport from'./Create'
import ShowSerReport from'./Show'
import EditSerReport from'./Edit'

export default function Router() {
 return <Switch>
          <Route exact path='/'component={ServiceReport}/>
          <Route exact path='/service-report/new' component={CreateSerReport}/>
          <Route exact path='/service-report/:id' component={ShowSerReport}/>
          <Route exact path='/service-report/:id/edit' component={EditSerReport}/>
        </Switch>
}