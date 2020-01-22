import React from 'react'
import {connect} from 'react-redux'

import {getServiceReport} from '../../api/service-report'

import SerReportTable from './table'

class ServiceReport extends React.Component {

  componentDidMount() {
    const{persistServiceReport} = this.props
    getServiceReport().then(json =>persistServiceReport({ service: json, loaded: true }))
  }
  render () {
    const { service, loaded } =this.props
    return <div>
       <h1>The Service Type Report</h1>
       <SerReportTable service = {service} loaded ={loaded} />  
    </div> 
  }
}
function mapStateToProps(state) {
  return {
    service: state.serviceReport.service,
    loaded: state.serviceReport.loaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistServiceReport:(payload) => {
      dispatch({type:'LOAD', payload})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceReport)