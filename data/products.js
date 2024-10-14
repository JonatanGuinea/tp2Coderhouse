
let products = [
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 1', price: 100 },
    { name: 'Producto 1', price: 100 }
];

export const getProducts = () => products;

export const addProduct = (product) => {
    products.push(product);
};

export const deleteProduct = (name) => {
    products = products.filter(product => product.name !== name);
};
