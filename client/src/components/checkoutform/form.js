import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Input, FormBtn} from "../Form"
function CheckoutForm(props) {
  const { handleSubmit } = props

  return <div style={{height: 200 +"px"}}>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="order[name]">Your name:</label><br/>
        <Field name="order[name]" component="input" type="text" />
      </div>

      <div>
        <label htmlFor="order[email]">Email:</label><br/>
        <Field name="order[email]" component="input" type="email" />
      </div>

      <div>
      <FormBtn>
            Submit
      </FormBtn>
      </div>
    </form>
  </div>
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm)

export default CheckoutForm