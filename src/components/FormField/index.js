import React from 'react';
import PropTypes from 'prop-types'
import {Input, Label, FormFieldWraper} from './style';

function FormField({ label, type, name, value, onChange }) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag =  isTextarea ? 'textarea' : 'input'
  const hasValue = Boolean(value.length);
  console.log(type)
    return (
      <FormFieldWraper>
        <Label
          htmlFor = {fieldId}
        >
         
          <Input
            as= {tag}
            id ={fieldId}
            type={type}
            value={value}
            hasValue={hasValue}
            name={name}
            onChange={onChange}
          />
           <Label.Text>
            {label}: 
            <br />
          </Label.Text>
        </Label>
      </FormFieldWraper>
    )
  }

FormField.defaultProps = {
  type: 'test',
  value: '',
  onChange: () => {},
}

FormField.propTypes = {
  label: PropTypes.string.isRequired, 
  type: PropTypes.string, 
  name:PropTypes.string.isRequired,
  value: PropTypes.string, 
  onChange: PropTypes.func,
}

export default FormField;