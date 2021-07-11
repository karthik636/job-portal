import { Grid, TextField, Button, Box } from '@material-ui/core'
import { Grid, TextField, Button, Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
};

const SCHEMA = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(255)
        .required('Required'),
    lastName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(255)
        .required('Required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Email is Required'),
    password: Yup.string()
        .required('Password is Required')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/(?=(.*[0-9]))/, 'Password must contain a number.')
        .matches(/(?=(.*[A-Z]))/, 'Password must contain a upercase letter.')
        .matches(/(?=(.*[!@#$%^&*()\-__+.]){1,})/, 'Password must contain a special character.'),
    confirmPassword: Yup.string().required('Password is Required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const handleSubmit = () => {

}

const JobSeekerSignIn = () => {
    return (
        <Box p={10}>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SCHEMA}
                enableReinitialize
            >
                {(formHandler) => (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="First Name"
                                    name="firstName"
                                    value={formHandler.values.firstName}
                                    onChange={formHandler.handleChange}
                                    error={formHandler.touched.firstName && formHandler.errors.firstName}
                                    helperText={formHandler.touched.firstName && formHandler.errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Last Name"
                                    name="lastName"
                                    value={formHandler.values.lastName}
                                    onChange={formHandler.handleChange}
                                    error={formHandler.touched.lastName && formHandler.errors.lastName}
                                    helperText={formHandler.touched.lastName && formHandler.errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Enter Emial Id"
                                    name="email"
                                    error={formHandler.touched.email && formHandler.errors.email}
                                    helperText={formHandler.touched.email && formHandler.errors.email}
                                    value={formHandler.values.email}
                                    onChange={formHandler.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Enter password"
                                    type="password"
                                    name="password"
                                    value={formHandler.values.password}
                                    onChange={formHandler.handleChange}
                                    error={formHandler.touched.password && formHandler.errors.password}
                                    helperText={formHandler.touched.password && formHandler.errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="Confirm password"
                                    type="password"
                                    name="confirmPassword"
                                    value={formHandler.values.confirmPassword}
                                    onChange={formHandler.handleChange}
                                    error={formHandler.touched.confirmPassword && formHandler.errors.confirmPassword}
                                    helperText={formHandler.touched.confirmPassword && formHandler.errors.confirmPassword}
                                />
                            </Grid>
                            <Button
                                color="secondary"
                                title="add members"
                                type="submit"
                                variant="contained"
                                
                            >
                                Sign Up
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default JobSeekerSignIn
