import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../reducer/actions';


export default function SimpleCart() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.cart.cartProducts);
    function deleteHandler(productName) {
        dispatch(deleteFromCart(productName));
    }
    return (
        <div id='simple-cart'>
            <ul>
                {state.map((product) => (
                    <>
                        <li id='li'>
                            {product} <button onClick={() => deleteHandler(product)}>Delete</button>

                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}