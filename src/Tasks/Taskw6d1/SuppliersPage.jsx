import { Button, Modal, Table } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';


const { confirm } = Modal;

function SuppliersPage() {
  const [suppliers, setsuppliers] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    
     loadData()

  }, [])


  const loadData = ()=> {
    axios.get('https://northwind.vercel.app/api/suppliers')
    .then(res=> {
      setsuppliers(res.data)
      setloading(false)
    })
  }

  const deleteProduct = (id) => {

    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      onOk() {
        setloading(true);
        axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
          .then(data => {
            loadData();
          })

      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }

  let columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      key: 'companyName',
      sorter:(a,b)=>a.companyName.localeCompare(b.companyName)
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
      key: 'contactName',
      sorter:(a,b)=>a.contactName.localeCompare(b.contactName)
    },
    {
      title: 'City',
      dataIndex: ['address','city'],
      key: ['address','city'],
      sorter:(a,b)=>a['address?.city'].localeCompare(b['address?.city']),
    },
    {
      title: 'Delete',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <Button onClick={() => deleteProduct(id)} type='primary' danger>Delete</Button>
    }
  ]

  
  return (
    <div>
     <Table
      dataSource={suppliers}
      columns={columns}
      loading={loading}
    />
    </div>
  )
}

export default SuppliersPage