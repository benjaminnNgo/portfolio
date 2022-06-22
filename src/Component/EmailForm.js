import React, { useRef } from 'react'
import { Formik, Form } from 'formik'
import InputField from './InputField'
import * as Yup from 'yup'
import { Editor } from '@tinymce/tinymce-react'
import TextArea from './textArea'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

export default function EmailForm() {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_4xahak3",
            "template_bh8jztd",
            e.target,
            "xYBlI7VVnCgvF-m5G"
        ).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    const validation = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Requied'),
        mailSubject: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
    })
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                mailSubject: '',
                message: ''
            }}
            validationSchema={validation}
            onSubmit={values => {
                console.log(values)
                emailjs.send(
                    "service_4xahak3",
                    "template_bh8jztd",
                    values,
                    "xYBlI7VVnCgvF-m5G"
                ).then(res => {
                    console.log(res);
                    Swal.fire({
                        icon: 'success',
                        title: 'Sent',
                        text: 'Bao has already received email. Thank you',
                    })
                }).catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong!',
                        text: 'Resend or send an mail to my email or text me!',
                    })
                })
            }}
        >
            {formik => (
                <div>

                    <Form className='m-auto'>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className='col-span-2 md:col-span-1'>
                                <InputField className='col-span-2 md:col-span-1' label='Name' name='name' type='text' />
                            </div>
                            <div className='col-span-2 md:col-span-1'>
                                <InputField className='col-span-2 md:col-span-1' label='Email' name='email' type='text' />

                            </div>
                            <div className='col-span-2'>
                                <InputField label='Mail Subject' name='mailSubject' type='text' />


                            </div>
                            <div className='col-span-2'>
                                <TextArea style={{ height: 'auto' }} label='Message' name='message' type='text' />

                            </div>

                        </div>
                        <button type="submit " className='button-pink mt-10'>Send email</button>
                        
                    </Form>
                </div>
            )}
        </Formik>
    )
}
