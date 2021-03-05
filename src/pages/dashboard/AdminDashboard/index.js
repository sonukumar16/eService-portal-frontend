import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

const AdminDashboard = () => {
    const classes = useStyles();
    return <Container component="main" className={classes.container} >
        <Typography component="h1" variant="h5">
            Welcome to admin dashboard
        </Typography>

    </Container>
};

export default AdminDashboard;