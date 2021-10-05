import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} className='card-ui'>
            <CardActionArea>
                <CardMedia className={classes.media} image={props.product.img} title='Contemplative Reptile' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                        {props.product.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {props.product.description}
                    </Typography>
                    <Typography gutterBottom variant='h6' component='h6'>
                        Price : {props.product.price}
                    </Typography>
                    <Typography gutterBottom variant='h6' component='h6'>
                        available : {props.product.inventoryCount} pieces
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
        </Card>
    );
}