import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().max(15, "Must be 15 characters").required()
        }),
        onSubmit: (value) => {
            
        }
        
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? formik.errors.username : null}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup