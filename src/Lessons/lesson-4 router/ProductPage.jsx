import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function ProductPage() {

    const [products, setproducts] = useState([]);

    let navigate = useNavigate();


    useEffect(() => {

        loadData();

    }, [])

    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })
    }


    const deleteProduct = (id) => {

        axios.delete('https://northwind.vercel.app/api/products/' + id)
            .then(res => {
                loadData();
            })
    }


    return (<>
        <table className="w3-table w3-striped">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity Per Unit</th>
                    <th>Units In Stock</th>
                    <th>Go To Detail</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td><Link to={'/products/' + product.id}>{product.name}</Link></td>
                        <td>{product.unitPrice}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitsInStock}</td>
                        <td><button onClick={() => navigate('/products/' + product.id)}>Go to detail</button></td>
                        <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>

        </table>
    </>
    )
}

export default ProductPage