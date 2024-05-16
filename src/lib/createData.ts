import Product from './models/product';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

require('dotenv').config({ path: '../../.env.local' });
const MONGO_URI = process.env.MONGO_URI;

const createProducts = async () => {
    const productsData = [
        { name: 'Small Product 1', price: 1.99, description: 'Description for small product 1' },
        { name: 'Small Product 2', price: 2.99, description: 'Description for small product 2' },
        { name: 'Small Product 3', price: 3.99, description: 'Description for small product 3' },
        { name: 'Small Product 4', price: 4.99, description: 'Description for small product 4' },
        { name: 'Small Product 5', price: 5.99, description: 'Description for small product 5' },
        { name: 'Small Product 6', price: 6.99, description: 'Description for small product 6' },
        { name: 'Small Product 7', price: 7.99, description: 'Description for small product 7' },
        { name: 'Small Product 8', price: 8.99, description: 'Description for small product 8' },
        { name: 'Small Product 9', price: 9.99, description: 'Description for small product 9' },
        { name: 'Small Product 10', price: 10.99, description: 'Description for small product 10' }
    ];

    try {
        await mongoose.connect(MONGO_URI, {});
        for (let productData of productsData) {
            const newProduct = new Product(productData);
            const savedProduct = await newProduct.save();
            console.log('Product created:', savedProduct);
        }
    } catch (error) {
        console.error('Error creating products:', error);
    }
};

createProducts();
