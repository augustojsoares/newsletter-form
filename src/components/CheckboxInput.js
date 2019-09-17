import React from 'react'

const CheckboxInput = ({
  name='checkbox',
  children='',
  handleInputChange,
  required=false,
  ...rest
}) => (
  <fieldset className="form-group">
    <input
      type="checkbox"
      name={name}
      aria-labelledby={`${name}-label`}
      onChange={evt =>
        handleInputChange({
          name: evt.target.name,
          value: evt.target.checked,
        })
      }
      required={required}
      {...rest}
    />
    <label id={`${name}-label`}>
      {children}
      {required ? <span className="required">*</span> : ''}
    </label>
  </fieldset>
)

export default CheckboxInput