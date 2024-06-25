"use client"

import { useEffect, useState } from 'react';

function Products() {
    const [pizzas, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="home">
            <div>
                <strong className="p-2" style={{ fontSize: '2em' }}>Products</strong>
            </div>
            <div className='p-2'>
                {pizzas.map((product: any) => (
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