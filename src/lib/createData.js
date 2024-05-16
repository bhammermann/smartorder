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
var product_1 = require("./models/product");
var mongoose_1 = require("mongoose");
// import dotenv from 'dotenv';
require('dotenv').config({ path: '../../.env.local' });
var MONGO_URI = process.env.MONGO_URI;
var createProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var productsData, _i, productsData_1, productData, newProduct, savedProduct, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productsData = [
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
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                return [4 /*yield*/, mongoose_1.default.connect(MONGO_URI, {})];
            case 2:
                _a.sent();
                _i = 0, productsData_1 = productsData;
                _a.label = 3;
            case 3:
                if (!(_i < productsData_1.length)) return [3 /*break*/, 6];
                productData = productsData_1[_i];
                newProduct = new product_1.default(productData);
                return [4 /*yield*/, newProduct.save()];
            case 4:
                savedProduct = _a.sent();
                console.log('Product created:', savedProduct);
                _a.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 8];
            case 7:
                error_1 = _a.sent();
                console.error('Error creating products:', error_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
createProducts();
