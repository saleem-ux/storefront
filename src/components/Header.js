import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Cart from './SimpleCart ';

export default function Header() {
    const displayDesktop = () => {
        return <Typography variant='h4' id='tittle' >
            OUR STORE
        </Typography>


    };

    return (
        <header id='nav-bar'>
            <AppBar id='nav-bar'>
                {displayDesktop()}
                <Cart />
            </AppBar>
        </header>
    );
}