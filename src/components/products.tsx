"use client"

import "/src/styles/products.css"
import { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState({
        pizzas: [],
        desserts: [],
        drinks: [],
        pastas: [],
        salads: []
    });

    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="main-content">
            <div>
                <strong className="p-2" style={{ fontSize: '2em' }}>Products</strong>
            </div>

            <div className='p-2 bg-def'>
                <strong>Pizzas</strong>
                {products.pizzas.map((product: any) => (
                    <div key={product._id} className="product-item" style={{ padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
                        <div><strong>{product.name}</strong></div>
                        <div>Price: ${product.price}</div>
                    </div>
                ))}
            </div>

            <div className='p-2 bg-def'>
                <strong>Desserts</strong>
                {products.desserts.map((product: any) => (
                    <div key={product._id} className="product-item" style={{ padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
                        <div><strong>{product.name}</strong></div>
                        <div>Price: ${product.price}</div>
                    </div>
                ))}
            </div>

            <div className='p-2 bg-def'>
                <strong>Drinks</strong>
                {products.drinks.map((product: any) => (
                    <div key={product._id} className="product-item" style={{ padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
                        <div><strong>{product.name}</strong></div>
                        <div>Price: ${product.price}</div>
                    </div>
                ))}
            </div>

            <div className='p-2 bg-def'>
                <strong>Pastas</strong>
                {products.pastas.map((product: any) => (
                    <div key={product._id} className="product-item" style={{ padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
                        <div><strong>{product.name}</strong></div>
                        <div>Price: ${product.price}</div>
                    </div>
                ))}
            </div>

            <div className='p-2 bg-def'>
                <strong>Salads</strong>
                {products.salads.map((product: any) => (
                    <div key={product._id} className="product-item" style={{ padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
                        <div><strong>{product.name}</strong></div>
                        <div>Price: ${product.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;
