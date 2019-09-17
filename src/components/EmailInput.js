import React from 'react'

const EmailInput = ({
  name='email',
  children='Email',
  handleInputChange,
  required=false,
  ...rest
}) => (
  <fieldset className="form-group" key={name}>
    <label id={`${name}-label`}>
      {children}
      {required ? <span className="required">*</span> : ''}
    </label>
    <input
      name={name}
      aria-labelledby={`${name}-label`}
      onChange={evt => handleInputChange(evt.target)}
      required={required}
      {...rest}
    />
  </fieldset>
)

export default EmailInput
