import React from 'react'
import { Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Recruter_icon from '../Assets/recruter.png'
import Student_icon from '../Assets/student.png'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    container:{
        height: "100vh",
    },
    item:{
        transitionDuration: "0.5s",
        "&:hover":{
            transform: "scale(1.1)",
        }
    },
    icons:{
        height: theme.spacing(30)
    },
}));

const Home = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.container} container justifyContent="center" alignContent="center" spacing={5}>
            <Grid className={classes.item} item>
                <Link to="/r_dashBoard" style={{textDecoration: "none", color:"#404040"}}>
                    <Box width="300" height="300" boxShadow="3" p={3} borderRadius="10" borderColor="primary.main">
                        <img className = {classes.icons} src={Recruter_icon} alt="recruter" />
                        <Typography variant="h3" component="h3" align="center">
                            Recruter
                        </Typography>
                    </Box>
                </Link>
            </Grid>
            <Grid className={classes.item} item>
                <Link to="/j_dashBoard" style={{textDecoration: "none", color:"#404040"}}>
                    <Box width="300" height="300" boxShadow="3" p={3} borderRadius="10" borderColor="primary.main">
                        <img className = {classes.icons} src={Student_icon} alt="job-seekers" />
                        <Typography variant="h3" component="h3" align="center">
                            Job seekers
                        </Typography>
                    </Box>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Home