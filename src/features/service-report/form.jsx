import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'

function validate(values) {
  const errors ={}
  const{ no } = values
  if(!no) errors.no = "required"

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

function SerReportForm(props) {
  const { handleSubmit, submitting,valid} = this.props
  return <form onSubmit={handleSubmit}>
    <Field name="no" component={renderInput} type="text" lable="No."/>
  </form>
}

const withForm = reduxForm({ form:'serReport', validate})(SerReportForm)
const withRedux = connect()(withForm)

export default withRedux