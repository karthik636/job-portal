import React from 'react'
import { Grid, TextField, Button, Box, makeStyles } from '@material-ui/core'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    homeBtn:{
        position: "fixed",
        bottom: "1rem",
        right: "1rem"
    }
}));

const initialValues = {
    companyName: '',
    position: '',
    email: '',
    salary: "10k"
};

const SCHEMA = Yup.object().shape({
    companyName: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(255)
        .required('Required'),
    position: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(255)
        .required('Required'),
    salary: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(255)
        .required('Required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Email is Required'),

});


const Recruter_dashboard = (props) => {

    const classes = useStyles()

    const { jobData, setJobData } = props

    const handleSubmit = (values) => {
        setJobData([...jobData, values])
        localStorage.setItem('data', "sharath");
    }
    console.log(props)
    return (
        <Box p={5}>
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
                                    label="Company Name"
                                    name="companyName"
                                    value={formHandler.values.companyName}
                                    onChange={formHandler.handleChange}
                                    error={formHandler.touched.companyName && formHandler.errors.companyName}
                                    helperText={formHandler.touched.companyName && formHandler.errors.companyName}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Position"
                                    name="position"
                                    value={formHandler.values.position}
                                    onChange={formHandler.handleChange}
                                    error={formHandler.touched.position && formHandler.errors.position}
                                    helperText={formHandler.touched.position && formHandler.errors.position}
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
                                    label="Salary"
                                    name="salary"
                                    value={formHandler.values.salary}
                                    onChange={formHandler.handleChange}
                                    error={formHandler.touched.salary && formHandler.errors.salary}
                                    helperText={formHandler.touched.salary && formHandler.errors.salary}
                                />
                            </Grid>
                            <Button
                                color="secondary"
                                title="add members"
                                type="submit"
                                variant="contained"

                            >
                                Add Job
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
            {
                jobData?.map(data =>
                    <Box boxShadow="3" p={5} m={3}>
                        <Grid container>
                            <Grid item xs="3">
                                <h1>Company Name:</h1>
                            </Grid>
                            <Grid item xs="9">
                                <h1>{data.companyName}</h1>
                            </Grid>
                            <Grid item xs="3">
                                <h3>Position:</h3>
                            </Grid>
                            <Grid item xs="9">
                                <h3>{data.position}</h3>
                            </Grid>
                            <Grid item xs="3">
                                <p>Salary</p>
                            </Grid>
                            <Grid item xs="9">
                                <p>{data.salary}</p>
                            </Grid>
                            <Grid item xs="3">
                                <p>Apply to:</p>
                            </Grid>
                            <Grid item xs="9">
                                <p>{data.email}</p>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }
            <Link to="/">
                <Button
                    color="primary"
                    title="Home"
                    variant="contained"
                    className={classes.homeBtn}
                >
                    Home
                </Button>
            </Link>
        </Box>
    )
}

export default Recruter_dashboard
