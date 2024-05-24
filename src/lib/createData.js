"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
require('dotenv').config({ path: '../../.env.local' });
var MONGO_URI = process.env.MONGO_URI;
var productSchema = new mongoose_1.default.Schema({
    name: String,
    price: Number,
    description: String
});
var Pizza = mongoose_1.default.model('Pizza', productSchema);
var Pasta = mongoose_1.default.model('Pasta', productSchema);
var Salad = mongoose_1.default.model('Salad', productSchema);
var Dessert = mongoose_1.default.model('Dessert', productSchema);
var Drink = mongoose_1.default.model('Drink', productSchema);
var createProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var pizzaData, pastaData, saladData, dessertData, drinksData, _i, pizzaData_1, product, newProduct, _a, pastaData_1, product, newProduct, _b, saladData_1, product, newProduct, _c, dessertData_1, product, newProduct, _d, drinksData_1, product, newProduct, error_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                pizzaData = [
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
                pastaData = [
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
                saladData = [
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
                dessertData = [
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
                drinksData = [
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
                _e.label = 1;
            case 1:
                _e.trys.push([1, 23, 24, 25]);
                return [4 /*yield*/, mongoose_1.default.connect(MONGO_URI, {})];
            case 2:
                _e.sent();
                _i = 0, pizzaData_1 = pizzaData;
                _e.label = 3;
            case 3:
                if (!(_i < pizzaData_1.length)) return [3 /*break*/, 6];
                product = pizzaData_1[_i];
                newProduct = new Pizza(product);
                return [4 /*yield*/, newProduct.save()];
            case 4:
                _e.sent();
                _e.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6:
                _a = 0, pastaData_1 = pastaData;
                _e.label = 7;
            case 7:
                if (!(_a < pastaData_1.length)) return [3 /*break*/, 10];
                product = pastaData_1[_a];
                newProduct = new Pasta(product);
                return [4 /*yield*/, newProduct.save()];
            case 8:
                _e.sent();
                _e.label = 9;
            case 9:
                _a++;
                return [3 /*break*/, 7];
            case 10:
                _b = 0, saladData_1 = saladData;
                _e.label = 11;
            case 11:
                if (!(_b < saladData_1.length)) return [3 /*break*/, 14];
                product = saladData_1[_b];
                newProduct = new Salad(product);
                return [4 /*yield*/, newProduct.save()];
            case 12:
                _e.sent();
                _e.label = 13;
            case 13:
                _b++;
                return [3 /*break*/, 11];
            case 14:
                _c = 0, dessertData_1 = dessertData;
                _e.label = 15;
            case 15:
                if (!(_c < dessertData_1.length)) return [3 /*break*/, 18];
                product = dessertData_1[_c];
                newProduct = new Dessert(product);
                return [4 /*yield*/, newProduct.save()];
            case 16:
                _e.sent();
                _e.label = 17;
            case 17:
                _c++;
                return [3 /*break*/, 15];
            case 18:
                _d = 0, drinksData_1 = drinksData;
                _e.label = 19;
            case 19:
                if (!(_d < drinksData_1.length)) return [3 /*break*/, 22];
                product = drinksData_1[_d];
                newProduct = new Drink(product);
                return [4 /*yield*/, newProduct.save()];
            case 20:
                _e.sent();
                _e.label = 21;
            case 21:
                _d++;
                return [3 /*break*/, 19];
            case 22:
                console.log('Products created successfully');
                return [3 /*break*/, 25];
            case 23:
                error_1 = _e.sent();
                console.error('Error creating products:', error_1);
                return [3 /*break*/, 25];
            case 24:
                mongoose_1.default.connection.close();
                return [7 /*endfinally*/];
            case 25: return [2 /*return*/];
        }
    });
}); };
createProducts();
