
let products = [
    { name: 'Producto1', price: 100 },
    { name: 'Producto2', price: 100 },
    { name: 'Producto3', price: 100 }
];

export const getProducts = () => products;

export const addProduct = (product) => {
    products.push(product);
};

export const deleteProduct = (name) => {
    return products = products.filter(product => product.name !== name);
};
