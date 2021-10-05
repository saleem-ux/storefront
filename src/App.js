import React from 'react';
import Categories from './components/Category';
import Products from './components/Products';
import Header from './components/Header';
import ActiveCategory from './components/current-category';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';

function App() {
    return (
        <>
            <Header />
            <Container minHeight="100 vh">
                <Categories />
                <ActiveCategory />
                <Products />
            </Container>
            <Footer />
        </>
    );
}

export default App;