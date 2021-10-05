import React, { useEffect } from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import * as actions from '../reducer/actions';


import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    root: {
        maxWidth: 200,
    },
    media: {
        height: 80,
    },
}));


const Cart = props => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const fetchData = (e) => {
        e && e.preventDefault();
        props.getCart();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="cart">
            <Button size="large" className="cart-button" aria-describedby={id} variant="contained" color="light" onClick={handleClick}>
                CART ({props.cart.cartCounter})
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>CART ({props.cart.cartCounter})</Typography>
                {props.cart.cart.map(product => {
                    return (
                        <Card className={classes.root} key={product.name}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" variant="contained" color="primary" onClick={() => props.removeFromCart(product.id, product)}>
                                    REMOVE
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </Popover>
        </section>
    )
}

const mapStateToProps = state => ({
    cart: state.cart,
    cartCounter: state.cartCounter
})


const mapDispatchToProps = (dispatch, getState) => ({
    getCart: () => dispatch(actions.getCartData()),
    removeFromCart: (id, product) => dispatch(actions.deleteCartItem(id, product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);