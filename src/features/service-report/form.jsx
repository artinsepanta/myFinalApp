import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'

function validate(values) {
  const errors ={}
  const{ no, type, description, process } = values
  if(!no) errors.no = "required"
  if(!type) errors.type = "required"
  if(!description) errors.description = "required"
  if(!process) errors.process = "required"

  return errors
}

function renderInput({input, lable,type,meta:{touched,error}}) {
  return <div>
    <lable>{lable}{touched && ((error && <span className='error'>{error}</span>))}</lable>
    <div>
      <input {...input } placeholder={lable} type={type}/>
    </div>
  </div>
}

function renderTextArea({input, lable, rows, meta: {touched, error}}) {
  return <div>
    <lable>{lable}{touched && ((error && <span className='error'>{error}</span>))}</lable>
    <div>
      <textarea {...input } placeholder={lable} rows={rows}/>
    </div>
  </div>
}

function SerReportForm(props) {
  const { handleSubmit, submitting,valid} = props
  return <form onSubmit={handleSubmit}>
    <Field name="no" component={renderInput} type="text" lable="No."/>
    <Field name="tupe" component={renderInput} type="text" lable="Type"/>
    <Field name="description" component={renderTextArea} rows= {10} lable="Description"/>
    <Field name="process" component={renderTextArea} rows= {10} lable="Process"/>
   
    <div>
      <button 
        type="submit"
        className="primary"
        disabled = {!valid ||submitting}
      >Save</button>
      <button
        type="button"
        className="secondary"
        onClick={() => props.history.push('/')}
      >Cancel</button>
    </div>
  </form>
}

const withForm = reduxForm({ form: 'serReport', validate})(SerReportForm)
const withRedux = connect()(withForm)

export default(withRedux) 
