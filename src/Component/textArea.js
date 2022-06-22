import React from 'react'
import { ErrorMessage, useField } from 'formik'

export default function TextArea({ label, ...props }) {

    const [field, meta] = useField(props)


    return (
        <div className='email-input'>
            <textarea {...field}  {...props} className='text-area form-control' placeholder={label}></textarea>
            <ErrorMessage className='error' component="div" name={field.name} />


        </div>
    )
}