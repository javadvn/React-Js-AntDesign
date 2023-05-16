import React, { useState } from 'react'
import { ProductData } from './ProductData';
import ProductsTable from './ProdutsTable';

function ProductPage() {

    const [products, setproducts] = useState(ProductData);
    const [productId, setproductId] = useState(0);

    //edit form inputs
    const [editName, seteditName] = useState('');
    const [editPrice, seteditPrice] = useState(0);
    const [editId, seteditId] = useState(0)

    const removeProduct = (id) => {
        let filteredProducts = products.filter(q => q.id != id);
        setproducts(filteredProducts)
    }

    // const removeProductById = () => {
    //     let filteredProducts = products.filter(q => q.id != productId);
    //     setproducts(filteredProducts)
    // }

    const search = (value) => {
        
        let filteredProducts = ProductData.filter(q => q.name.toLowerCase().includes(value.toLowerCase()))

        setproducts(filteredProducts)
    }


    const editProduct = (item) => {
        seteditName(item.name);
        seteditPrice(item.unitPrice)
        seteditId(item.id)
    }


    const save = () => {
        let product = products.find(q => q.id == editId);

        product.name = editName;
        product.unitPrice = editPrice;

        setproducts([...products])
    }

    return (<>
        <div>
            <label>Search: </label>
            <input type='text' onChange={(e) => search(e.target.value)} />
        </div>
        <div>
            <button onClick={() => setproducts([])}>Clear All</button>
        </div>

        <div>
            <input type='text' onChange={(e) => setproductId(e.target.value)} />
            <button onClick={() => removeProduct(productId)}>Remove</button>
        </div>
        <hr></hr>
        <div>
            <div>
                <label>Name: </label>
                <input type='text' value={editName} onChange={(e) => seteditName(e.target.value)}/>
            </div>
            <div>
                <label>Price: </label>
                <input type='text' value={editPrice} onChange={(e) => seteditPrice(e.target.value)}/>
            </div>
            <div>
                <button onClick={save}>Save</button>
            </div>
        </div>

        <ProductsTable products={products} removeProduct={removeProduct} editProduct={editProduct} />
    </>
    )
}

export default ProductPage