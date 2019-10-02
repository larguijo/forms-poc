import { FieldProps } from 'formik'
import React from 'react'
import Select from 'react-select'

export const SelectField = ({
  options,
  field,
  form,
}) => (
    <Select
      options={options}
      name={field.name}
      value={field.value}
      onChange={(option) => {
        console.log('option', option);
        form.setFieldValue(field.name, option)
      }
      }
      onBlur={field.onBlur}
      isMulti
    />
  )