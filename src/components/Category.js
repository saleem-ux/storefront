import React from 'react';

import Button from '@material-ui/core/Button';
import '../App.css';

import { connect } from 'react-redux';
import * as actions from '../reducer/actions'

const Categories = props => {
    return (

        <section className="breadcrumbs">
            <p className='Select' >Select Category:</p>
            <>
                <Button id="Button1" size="large" variant="contained" color="primary" onClick={() => props.get()}>ALL</Button>
                <Button id="Button2" size="large" variant="contained" color="primary" onClick={() => props.food()}>FOOD</Button>
                <Button id="Button3" size="large" variant="contained" color="primary" onClick={() => props.electronics()}>ELECTRONICS</Button>
            </>

        </section>
    )
}

const mapStateToProps = state => ({
    state
})

const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
    food: () => dispatch(actions.getFood()),
    electronics: () => dispatch(actions.getElectronics())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);