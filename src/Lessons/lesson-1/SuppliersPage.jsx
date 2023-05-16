import React, { useState } from 'react'
import { SuppliersData } from './SuppliersData';

function SupplierTable() {

    const [suppliers, setsuppliers] = useState(SuppliersData);


    const clearByCountry = () => {
        let filteredSuppliers = suppliers.filter(q => q.address?.country !== 'USA');
        setsuppliers(filteredSuppliers)
    }

    return (<>
        <div>
                <button onClick={clearByCountry}>Clear By Country</button>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Country</td>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.address?.country}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default SupplierTable