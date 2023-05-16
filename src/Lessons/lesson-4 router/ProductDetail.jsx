import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {

    let { id } = useParams();



    const [name, setname] = useState('');
    const [unitPrice, setunitPrice] = useState(0);
    const [quantityPerUnit, setquantityPerUnit] = useState('');
    const [unitsInStock, setunitsInStock] = useState(0);


    let navigate = useNavigate();


    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products/' + id)
            .then(res => {
                let updateProduct = res.data;

                setname(updateProduct.name);
                setunitPrice(updateProduct.unitPrice);
                setquantityPerUnit(updateProduct.quantityPerUnit);
                setunitsInStock(updateProduct.unitsInStock);
            }
            )

    }, [id])


    const update = () => {

        let updateProduct = {
            id: id,
            name: name,
            unitPrice: unitPrice,
            quantityPerUnit: quantityPerUnit,
            unitsInStock: unitsInStock
        }

        axios.put('https://northwind.vercel.app/api/products/' + id, updateProduct)
            .then(res => {
                navigate('/products');
              
            }
            )
    }


    return (<>
        <button onClick={() => navigate(-1)} >Go Back</button>
        <h1>Product Detail</h1>
        <div>
            <div>
                <label htmlFor="">Product Name</label>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='text' value={unitPrice} onChange={(e) => setunitPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Quantity Per Unit</label>
                <input type='text' value={quantityPerUnit} onChange={(e) => setquantityPerUnit(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Units In Stock</label>
                <input type='text' value={unitsInStock} onChange={(e) => setunitsInStock(e.target.value)} />
            </div>
            <button onClick={update} >Update</button>
            {/* <button onClick={() => update()} >Update</button> */}
        </div>
    </>
    )
}

export default ProductDetail