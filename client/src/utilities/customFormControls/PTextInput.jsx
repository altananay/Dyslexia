import { useField } from 'formik'
import React from 'react'
import { FormField, Input, Label } from 'semantic-ui-react'

export default function PTextInput({...props}) {

  const [field, meta] = useField(props)
  return (
    <div>
        <FormField error={meta.touched && !!meta.error}>
            <Input {...field} {...props}></Input>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color='red' content={meta.error}></Label>
            ):null}
        </FormField>
    </div>
  )
}
