import React from 'react'
import Error from './Error'

const EmailInput = ({
  name='email',
  children='Email',
  handleInputChange,
  required = false,
  error='',
  ...rest
}) => (
  <fieldset className="form-group" key={name}>
    <label id={`${name}-label`}>
      {children}
      {required ? <span className="required">*</span> : ''}
    </label>
    <input
      type="email"
      name={name}
      aria-labelledby={`${name}-label`}
      onChange={evt => handleInputChange(evt.target)}
      required={required}
      {...rest}
      />
      <Error msg={error} />
  </fieldset>
)

export default EmailInput
