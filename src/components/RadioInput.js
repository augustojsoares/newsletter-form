import React from 'react'

const RadioInput = ({
  name='radio',
  children='',
  options,
  selected='',
  handleInputChange,
  required=false,
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
          onChange={evt =>
            handleInputChange({ name, value: evt.target.name })
          }
        />
        <label id={`${name}-${identifier}-label`}>{label}</label>
      </div>
    ))}
  </fieldset>
)

export default RadioInput
