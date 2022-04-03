import React from 'react'
import { FormField, Input, Label, TextArea } from 'semantic-ui-react'
import { useField } from 'formik'

export default function PTextArea({...props}) {

  const [field, meta] = useField(props)

  return (
    <div>
        <FormField error={meta.touched && !!meta.error}>
            <TextArea {...field} {...props} style={{ minHeight: 100 }}></TextArea>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color='red' content={meta.error}></Label>
            ):null}
        </FormField>
    </div>
  )
}
