import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Box, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    homeBtn:{
        position: "fixed",
        bottom: "1rem",
        right: "1rem"
    }
}));

const JobSeeker_Dashboard = (props) => {

    const classes = useStyles()
    const { jobData } = props

    return (
        <>
            {
                jobData?.map(data =>
                    <Box boxShadow="3" p={10}>
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
        </>
    )
}

export default JobSeeker_Dashboard
