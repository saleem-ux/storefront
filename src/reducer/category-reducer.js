let initialState = {
    categories: [
        { name: 'FOOD', description: 'this is a collection of food products' },
        { name: 'ELECTRONICS', description: 'this is a collection of electronics products' }
    ],
    products: [],
    activeCategory: ''
}

const changeCategory = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {

        case 'FOOD':
            let activeCategory = 'FOOD';
            let categories = state.categories.map(category => {
                if (category.name === payload) {
                    return { name: category.name, description: category.description }
                }
                return category;
            });
            let fetched = payload;
            let products = fetched.filter(product => product.category === activeCategory);

            return { activeCategory, categories, products };

        case 'ELECTRONICS':
            let active = 'ELECTRONICS';
            let cats = state.categories.map(category => {
                if (category.name === payload) {
                    return { name: category.name, description: category.description }
                }
                return category;
            });
            let fetchedProducts = payload;
            let prods = fetchedProducts.filter(product => product.category === active);

            return { activeCategory: active, categories: cats, products: prods };

        case 'ADDCART':
            let items = state.products.map(product => {
                if (product.name === payload.name) {
                    return { id: product.id, category: product.category, name: product.name, description: product.description, price: product.price, inventory: product.inventory - 1, image: product.image };
                }
                return product;
            })

            return { categories: state.categories, activeCategory: state.activeCategory, products: items };

        case 'REMOVECART':
            let allItems = state.products.map(product => {
                if (product.name === payload.name) {
                    return { id: product.id, category: product.category, name: product.name, description: product.description, price: product.price, inventory: product.inventory + 1, image: product.image };
                }
                return product;
            })

            return { categories: state.categories, activeCategory: state.activeCategory, products: allItems };

        case 'GET':
            let fetchedProds = payload;
            return { categories: state.categories, activeCategory: state.activeCategory, products: fetchedProds };

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

export default changeCategory;