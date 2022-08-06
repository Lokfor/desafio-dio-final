import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'black',
      maxWidth: 'none',
      border: '1px solid',
      borderRadius: '5px',
      color: 'white',
      padding: '10px'
    },
  }));

const Header = () => {
    const classes = useStyles();
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} className={classes.root}>
            <Typography variant='h3'>
                Dio Shopping
            </Typography>
            <Link to="/">
                <Button class="btn btn-outline-success" color="primary">Página Inicial</Button>
            </Link>
            <Link to="/contato">
                <Button class="btn btn-outline-success" color="primary">Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
