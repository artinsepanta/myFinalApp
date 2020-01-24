import React from "react"
//import ServiceReport from'./components/service-report'
import Router from './reduxFile/router'
import Navbar from './components/navbar'

class App extends React.Component {
  render() {
    return <div className='content'>
      <Navbar/>
      <Router/>
    </div>
  }
}


export default App