import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const FormikLogin = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (value) => {
            console.log(value)
        },
        validationSchema: Yup.object({
            username: Yup.string().required().max(15, "Username should not exceed 15 characters").min(3, "Minimum of 3 characters are required"),
            password: Yup.string().required().max(20, "Username should not exceed 20 characters").min(8, "Minimum of 8 characters are required")
        })
        
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formik.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? formik.errors.username : null}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? <p style={{color: 'red'}}>{formik.errors.password}</p> : null}
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default FormikLogin