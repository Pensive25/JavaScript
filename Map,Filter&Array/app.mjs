// MAP (Array Method) EXERCISE
const products = [
    {   
        id: '001',
        name: 'Product 1',
        price: 10.0, 
        category: 'Category A'


    },
    {
        id: '002',
        name: 'Product 2',
        price: 20.0,
        category: 'Category B'
    },
    {
        id: '003',
        name: 'Product 3',
        price: 15.0,
        category: 'Category A'
    },
    {
        id: '004',
        name: 'Product 4',
        price: 25.0,
        category: 'Category C'
    }]; 

let discountedProducts = products.map(product => {
    return {
        ...product,
        discountedPrice: (product.price * 0.9).toFixed(2) // 10% discount
    };
})

console.log(discountedProducts);//new array with discounted prices
console.log("Original Products:", products);//? Original products remain unchanged


//Filter (Array Method) EXERCISE

let categoryAProducts = products.filter(product =>{
    return product.category === 'Category A';
}
);

console.log(categoryAProducts);//new array with products from Category A, changed array

//Reduce (Array Method) EXERCISE

let totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
}, 0);

console.log("Total Price of all products:", totalPrice);//total price of all products, returned as a single 