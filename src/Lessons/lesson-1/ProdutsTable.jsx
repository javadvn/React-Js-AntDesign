import React from 'react'

function ProductsTable(props) {

    let { products, removeProduct, editProduct } = props

    return (<>
        <h1>Length: {products.length}</h1>
        <table className="w3-table w3-striped">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Delete</td>
                    <td>Edit</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        let color = 'red';
                        if (item.unitPrice > 20)
                            color = 'lightgreen'

                        return <tr style={{backgroundColor:color}}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => removeProduct(item.id)}>Delete Product</button></td>
                            <td><button onClick={() => editProduct(item)}>Edit</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductsTable