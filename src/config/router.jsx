import React from 'react'
import { Switch, Route } from 'react-router-dom'

import serviceReport from '../features/service-report'
import CreateSerReport from'../features/service-report/create'

export default function Router () {
 return <Switch>
          <Route exact path='/'component={serviceReport}/>
          <Route exact path='/service-report/new'component={CreateSerReport}/>
        </Switch>
}