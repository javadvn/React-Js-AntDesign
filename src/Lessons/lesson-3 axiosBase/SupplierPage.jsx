import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { axiosBase } from './axiosBase';
import { baseService } from './baseService';

function SupplierPage() {

    const [suppliers, setsuppliers] = useState([]);


    const [companyName, setcompanyName] = useState('');
    const [contactName, setcontactName] = useState('');
    const [concattitle, setconcacttitle] = useState('');

    const [loading, setloading] = useState(true)


    useEffect(() => {

        // axiosBase.get('suppliers')
        //     .then(res => {
        //         setsuppliers(res.data);
        //     })


        loadData();



    }, []);

    const loadData = () => {
        baseService.getAll('suppliers')
            .then(data => {
                setsuppliers(data);
                setloading(false);
            })
            .catch(err => {

            })
    }


    const add = () => {
        setloading(true);
        const newData = {
            companyName,
            contactName,
            concattitle
        }

        baseService.add('suppliers', newData)
            .then(res => {
                console.log(res);
                loadData();
            })
            .catch(err => {
                setloading(false);
                alert('Hata meydana geldi!')
            })
    }


    const deleteSupplier = (id) => {

        setloading(true)
        baseService.delete("suppliers", id)
            .then(res => {
                loadData();
            })
            .catch(err => {
                setloading(false);
                alert('Hata meydana geldi!')
            })
    }

    return (<>
        <div>
            <div>
                <label>Şirket Adı</label>
                <input type="text" onChange={(e) => setcompanyName(e.target.value)} />
            </div>
            <div>
                <label>İletişim Adı</label>
                <input type="text" onChange={(e) => setcontactName(e.target.value)} />
            </div>
            <div>
                <label>İletişim nvanı</label>
                <input type="text" onChange={(e) => setconcacttitle(e.target.value)} />
            </div>
            <div>
                <button onClick={add}>Add</button>
            </div>
        </div>
        {
            loading ? <h1>loading...</h1> : <ul>
                {
                    suppliers && suppliers.map(item => <li style={{ cursor: 'pointer' }} onClick={() => deleteSupplier(item.id)}>{item.companyName}</li>)
                }
            </ul>
        }

    </>
    )
}

export default SupplierPage