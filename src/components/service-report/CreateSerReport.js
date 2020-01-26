import React from 'react'
import { connect } from 'react-redux'

import SerReportForm from './SerReportForm'

function submitForm(values, props) {
  const { persistSerReport } = props
    createSerReport(values).then(json => {
    persistSerReport({ser: json})
    props.history.push(`/service-report/${json.id}`)
  })
}


function CreateSerReport (props) {
  return <div>
    <h1> Dera Charity Service Report</h1>
    <SerReportForm onSubmit ={values => submitForm(values, props)}/>
  </div>
}

function mapStateToProps(state) {
  return {
    serReport: state.serviceReport.ser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistSerReport: payload => dispatch ({type: 'LOAD', payload})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSerReport)