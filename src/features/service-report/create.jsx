import React from 'react'
import { connect } from 'react-redux'

import { createSerReport } from '../../api/service-report'
import SerReportForm from './form'

function CreateSerReport (props) {
  return <div>
    <h1>Create Dera Charity Service Report</h1>

    <SerReportForm/>
  </div>
}

function mapStateToProps(state) {
  return {
    serReport: state.serviceReport.ser,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSerReport)


