import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getSerReport} from '../../api/service-report'


class ShowSerReport extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.props
    const { persistSerReport } = this.props
    getSerReport(id).then(json =>{
      persistSerReport({ser:json, loaded:true})
    }) 
  }

  renderSer(){
    const {history,ser:{id, no, type, description, process} } = this.props
    return <div>
      <h1>Dera Service Report</h1>
      <div>
        <Link to={`/service-report/${id}/edit`}>Edit</Link>
        | 
        <a herf= '#delete' onClick ={() => {
          if(window.confirm(`Are you sure you want to delete service report(${id})?`)) {
            deleteSerReport(id)
            history.push('/')
          }
        }}>Delete</a>
      </div>
      <div >
        <strong>NO.</strong> 
        { no }
        </div>
      <div >
        <strong>Type</strong>
        { type }
      </div>
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
    const{ loaded, ser } = this.props
    return loaded && ser
      ? this.renderSer() : "loading..."

    
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