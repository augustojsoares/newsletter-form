import React from 'react'
import Error from './Error'

const RadioInput = ({
  name = 'radio',
  children = '',
  options,
  selected = '',
  handleInputChange,
  required = false,
  error = '',
}) => (
  <fieldset className="form-group stacked">
    <legend>
      {children}
      {required ? <span className="required">*</span> : ''}
    </legend>
    {options.map(({ label, identifier }) => (
      <div key={identifier}>
        <input
          type="radio"
          name={identifier}
          aria-labelledby={`${name}-${identifier}-label`}
          checked={selected === identifier}
          onChange={evt => handleInputChange({ name, value: evt.target.name })}
        />
        <label id={`${name}-${identifier}-label`}>{label}</label>
      </div>
    ))}
    <Error msg={error} />
  </fieldset>
)

export default RadioInput
