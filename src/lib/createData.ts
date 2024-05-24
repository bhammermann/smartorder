import Product from './models/product';
import mongoose from 'mongoose';

require('dotenv').config({ path: '../../.env.local' });
const MONGO_URI = process.env.MONGO_URI;

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const Pizza = mongoose.model('Pizza', productSchema);
const Pasta = mongoose.model('Pasta', productSchema);
const Salad = mongoose.model('Salad', productSchema);
const Dessert = mongoose.model('Dessert', productSchema);
const Drink = mongoose.model('Drink', productSchema);

const createProducts = async () => {
    // const productsData = [
    //     { name: 'Small Product 1', price: 1.99, description: 'Description for small product 1' },
    //     { name: 'Small Product 2', price: 2.99, description: 'Description for small product 2' },
    //     { name: 'Small Product 3', price: 3.99, description: 'Description for small product 3' },
    //     { name: 'Small Product 4', price: 4.99, description: 'Description for small product 4' },
    //     { name: 'Small Product 5', price: 5.99, description: 'Description for small product 5' },
    //     { name: 'Small Product 6', price: 6.99, description: 'Description for small product 6' },
    //     { name: 'Small Product 7', price: 7.99, description: 'Description for small product 7' },
    //     { name: 'Small Product 8', price: 8.99, description: 'Description for small product 8' },
    //     { name: 'Small Product 9', price: 9.99, description: 'Description for small product 9' },
    //     { name: 'Small Product 10', price: 10.99, description: 'Description for small product 10' }
    // ];
    const pizzaData = [
        { name: 'Margherita', price: 8.99, description: 'Classic pizza with fresh tomatoes, mozzarella, and basil' },
        { name: 'Pepperoni', price: 9.99, description: 'Pepperoni, mozzarella, and tomato sauce' },
        { name: 'Hawaiian', price: 10.99, description: 'Ham, pineapple, mozzarella, and tomato sauce' },
        { name: 'BBQ Chicken', price: 11.99, description: 'Grilled chicken, BBQ sauce, red onions, and cilantro' },
        { name: 'Veggie', price: 9.99, description: 'Bell peppers, onions, mushrooms, olives, and mozzarella' },
        { name: 'Meat Lover\'s', price: 12.99, description: 'Pepperoni, sausage, ham, bacon, and mozzarella' },
        { name: 'Supreme', price: 11.99, description: 'Pepperoni, sausage, bell peppers, onions, mushrooms, and olives' },
        { name: 'Four Cheese', price: 10.99, description: 'Mozzarella, cheddar, parmesan, and gorgonzola' },
        { name: 'Buffalo Chicken', price: 12.99, description: 'Buffalo chicken, mozzarella, and ranch dressing' },
        { name: 'Mediterranean', price: 11.99, description: 'Spinach, feta, sun-dried tomatoes, olives, and mozzarella' }
    ];
    const pastaData = [
        { name: 'Spaghetti Carbonara', price: 12.99, description: 'Spaghetti with pancetta, eggs, and parmesan' },
        { name: 'Fettuccine Alfredo', price: 13.99, description: 'Fettuccine with cream, butter, and parmesan' },
        { name: 'Penne Arrabiata', price: 11.99, description: 'Penne with spicy tomato sauce and parmesan' },
        { name: 'Lasagna', price: 14.99, description: 'Layered pasta with meat sauce, ricotta, and mozzarella' },
        { name: 'Ravioli', price: 13.99, description: 'Stuffed pasta with ricotta, parmesan, and marinara' },
        { name: 'Penne alla Vodka', price: 12.99, description: 'Penne with vodka sauce, cream, and parmesan' },
        { name: 'Linguine with Clams', price: 14.99, description: 'Linguine with clams, garlic, white wine, and parsley' },
        { name: 'Pasta Primavera', price: 13.99, description: 'Pasta with mixed vegetables, garlic, and olive oil' },
        { name: 'Pasta Puttanesca', price: 12.99, description: 'Pasta with olives, capers, anchovies, and tomato sauce' },
        { name: 'Pasta Bolognese', price: 14.99, description: 'Pasta with meat sauce, garlic, and parmesan' }
    ];
    const saladData = [
        { name: 'Caesar Salad', price: 6.99, description: 'Romaine lettuce, croutons, parmesan, and Caesar dressing' },
        { name: 'Garden Salad', price: 5.99, description: 'Mixed greens, tomatoes, cucumbers, and carrots' },
        { name: 'Greek Salad', price: 7.99, description: 'Romaine lettuce, olives, feta, tomatoes, and Greek dressing' },
        { name: 'Cobb Salad', price: 8.99, description: 'Mixed greens, chicken, bacon, eggs, avocado, and blue cheese' },
        { name: 'Spinach Salad', price: 6.99, description: 'Spinach, bacon, eggs, mushrooms, and warm bacon dressing' },
        { name: 'Caprese Salad', price: 7.99, description: 'Tomatoes, mozzarella, basil, olive oil, and balsamic' },
        { name: 'Nicoise Salad', price: 8.99, description: 'Mixed greens, tuna, eggs, olives, green beans, and potatoes' },
        { name: 'Waldorf Salad', price: 7.99, description: 'Mixed greens, apples, walnuts, celery, and blue cheese' },
        { name: 'Chef\'s Salad', price: 8.99, description: 'Mixed greens, ham, turkey, eggs, cheddar, and ranch dressing' },
        { name: 'Antipasto Salad', price: 9.99, description: 'Mixed greens, salami, pepperoni, olives, and Italian dressing' }
    ];
    const dessertData = [
        { name: 'Tiramisu', price: 4.99, description: 'Ladyfingers, coffee, mascarpone, and cocoa' },
        { name: 'Cannoli', price: 3.99, description: 'Fried pastry, ricotta, chocolate, and pistachios' },
        { name: 'Cheesecake', price: 5.99, description: 'Graham cracker crust, cream cheese, and fruit topping' },
        { name: 'Chocolate Cake', price: 4.99, description: 'Moist chocolate cake with chocolate frosting' },
        { name: 'Apple Pie', price: 4.99, description: 'Flaky crust, apple filling, and cinnamon sugar' },
        { name: 'Brownie Sundae', price: 5.99, description: 'Fudgy brownie, vanilla ice cream, and hot fudge' },
        { name: 'Lemon Tart', price: 4.99, description: 'Buttery crust, lemon curd, and powdered sugar' },
        { name: 'Pecan Pie', price: 5.99, description: 'Buttery crust, pecan filling, and maple syrup' },
        { name: 'Red Velvet Cake', price: 4.99, description: 'Moist red cake with cream cheese frosting' },
        { name: 'Key Lime Pie', price: 5.99, description: 'Graham cracker crust, key lime filling, and whipped cream' }
    ];
    const drinksData = [
        { name: 'Coke', price: 1.99, description: 'Coca-Cola' },
        { name: 'Diet Coke', price: 1.99, description: 'Diet Coca-Cola' },
        { name: 'Sprite', price: 1.99, description: 'Sprite' },
        { name: 'Fanta', price: 1.99, description: 'Fanta' },
        { name: 'Lemonade', price: 1.99, description: 'Lemonade' },
        { name: 'Iced Tea', price: 1.99, description: 'Iced Tea' },
        { name: 'Coffee', price: 1.99, description: 'Coffee' },
        { name: 'Decaf Coffee', price: 1.99, description: 'Decaf Coffee' },
        { name: 'Espresso', price: 1.99, description: 'Espresso' },
        { name: 'Cappuccino', price: 1.99, description: 'Cappuccino' }
    ];

    try {
        await mongoose.connect(MONGO_URI, {});

        for (const product of pizzaData) {
            const newProduct = new Pizza(product);
            await newProduct.save();
        }

        for (const product of pastaData) {
            const newProduct = new Pasta(product);
            await newProduct.save();
        }

        for (const product of saladData) {
            const newProduct = new Salad(product);
            await newProduct.save();
        }

        for (const product of dessertData) {
            const newProduct = new Dessert(product);
            await newProduct.save();
        }

        for (const product of drinksData) {
            const newProduct = new Drink(product);
            await newProduct.save();
        }

        console.log('Products created successfully');
    } catch (error) {
        console.error('Error creating products:', error);
    } finally {
        mongoose.connection.close();
    }
};

createProducts();
