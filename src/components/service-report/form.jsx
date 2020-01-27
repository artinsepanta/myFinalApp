import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'

function validate(values) {
  const errors ={}
  const{ nom, type, description, process } = values
  if(!values.nom) errors.nom = "required"
  if(!values.type) errors.type = "required"
  if(!values.description) errors.description = "required"
  if(!values.process) errors.process = "required"

  return errors
}

function renderInput({input, label, type, meta:{touched,error}}) {
  return <div>
    <label>{label}{touched && ((error && <span className='error'>({error})</span>))}</label>
    <div>
      <input {...input } placeholder={label} type={type}/>
    </div>
  </div>
}

function renderTextArea({input, label, rows, meta: {touched, error}}) {
  return <div>
    <label>{label}{touched && ((error && <span className='error'>{error}</span>))}</label>
    <div>
      <textarea {...input } placeholder={label} rows={rows}/>
    </div>
  </div>
}

function SerReportForm(props) {
  const { handleSubmit, submitting, valid} = props
  return <form onSubmit={handleSubmit}>
    <Field name="nom" component={renderInput} type="text" label="No."/>
    <Field name="type" component={renderInput} type="text" label="Type"/>
    <Field name="description" component={renderTextArea} rows= {10} label="Description"/>
    <Field name="process" component={renderTextArea} rows= {10} label="Process"/>
   
    <div>
      <button 
        type="submit"
        className="primary"
        disabled = {!valid || submitting}
       onClick={() => props.history.push('/')} //index page ask about tout
      >Save</button>
      <button
        type="button"
        className="secondary"
      >Cancel</button>
    </div>
  </form>
}

const withForm = reduxForm({ form: 'serReport', validate})(SerReportForm)
const withRedux = connect(state=>({
  initialValues: state.serviceReport.ser,
}))(withForm)

export default withRouter(reduxForm({form:'serReport', validate})(SerReportForm)) 
