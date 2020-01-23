import React from "react"
//import ServiceReport from'./features/service-report'
import Router from './config/router'
import Navbar from './features/navbar'

class App extends React.Component {
  render() {
    return <div className='content'>
      <Navbar/>
      <Router/>
    </div>
  }
}


export default App