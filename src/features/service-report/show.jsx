import React from 'react'
import { connect } from 'react-redux'

import { getSerReport} from '../../api/service-report'

class ShowSerReport extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.props
    const { persistSerReport } = this.props
    getSerReport(id).then(json =>{
      persistSerReport({ser:json})
    }) 
  }

  renderSer(){
    const {_id, no, type, description, process} = this.props
    return <div>
      <div ><lable>NO.</lable>{ no }</div>
      <div ><lable>Type</lable>{ type }</div>
      <div>
        <lable>Description</lable>
        <ol>
          {
            description.split('\n').map(line => <li>{ line}</li>)
          }
        </ol>
      </div>
      <div>
        <lable>Process</lable>
        <ol>
          {
            process.split('\n').map(line => <li>{ line}</li>)
          }
        </ol>
      </div>
    </div>
  }

  render(){
    return <div>

    </div>
  }
}

function mapStateToProps(state){
  return {
    ser: state.serviceReport.ser,
    loaded: state.serviceReport.loaded,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistSerReport:payload => dispatch({type:'LOAD', payload})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowSerReport)