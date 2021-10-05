import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Typography from '@material-ui/core/Typography';
const ActiveCategory = props => {
    return (
        <>
            <p className="active"> Active Category : {props.activeCategory}</p>
            <Typography gutterBottom variant="h5" color="textSecondary" component="h3" className="desc">
                {props.categories.map((category) => {
                    if (category.name === props.activeCategory) {
                        return (
                            category.description
                        )
                    }
                })
                }
            </Typography>
        </>
    )
}

const mapStateToProps = state => ({
    activeCategory: state.category.activeCategory,
    categories: state.category.categories
})

export default connect(mapStateToProps)(ActiveCategory);