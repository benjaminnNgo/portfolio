import React from 'react'
import { ErrorMessage, useField } from 'formik'

export default function InputField({ label, ...props }) {

    const [field, meta] = useField(props)


    return (
        <div className='email-input'>
            <input {...field}  {...props} className='form-control' placeholder={label}></input>
            <ErrorMessage className='error' component="div" name={field.name} />


        </div>
    )
}
