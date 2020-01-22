import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ServiceReport from'../features/service-report'

export default function Router () {
 return <Switch>
          <Route exact path='/'component={ServiceReport}/>
        </Switch>
}