import React from 'react'
import { connect } from 'react-redux'

import SerReportForm from './SerReportForm'

  class EditSerReport extends React.Component {
    componentDidMount() {
      const { id } = this.props.match.params
      const { persistSerReport } = this.props
      getSerReport(id).then(json =>{
        persistSerReport({ser:json, loaded:true})
      }) 
    }

    submitForm(values) {
      const { persistSerReport, history, ser: { id } } = this.props
      updateSerReport( id, values).then(json => {
        persistSerReport({ser: json})
        history.push(`/service-report/${json.id}`)
      })
    }

  render() {
   return <div>
       <h1>Edit Service Report</h1>
       <SerReportForm onSubmit ={values => this.submitForm(values)}/>
       {/* <SerReportForm >
         <button  onSubmit ={values => this.submitForm(values)}/>
         </SerReportForm> */}
    </div>
  }
}

function mapStateToProps(state) {
  return {
    ser: state.serviceReport.ser,
    loaded: state.serviceReport.loaded,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistSerReport: payload => dispatch ({type: 'LOAD', payload})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditSerReport)
