import React from 'react'
import { FormField,  Label, TextArea } from 'semantic-ui-react'
import { useField } from 'formik'

export default function PTextArea({...props}) {

  const [field, meta] = useField(props)

  return (
    <div>
        <FormField error={meta.touched && !!meta.error}>
            <TextArea {...field} {...props} style={{ minHeight: 100, marginTop:"15px", maxHeight:100 }}></TextArea>
            {meta.touched && !!meta.error ? (
                <Label pointing basic color='red' content="Minimum 20 karakter olmalıdır."></Label>
            ):null}
        </FormField>
    </div>
  )
}
