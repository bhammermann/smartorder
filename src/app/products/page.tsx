"use client" // allows you to write plain react code

import { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="home">
            <div>
                <h1 className="p-2">Products</h1>
            </div>
            <div className='p-2'>
                {products.map((product:any) => (
                    <div key={product._id}>
                        {product.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;