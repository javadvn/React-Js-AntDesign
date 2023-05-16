import { Button, Form, Input } from 'antd';
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';



function AddSupplier() {


  let navigate = useNavigate();

  const addNewSupplier = (values) => {

    axios.post('https://northwind.vercel.app/api/suppliers', values)
      .then(res => {
        navigate('/suppliers');
      })

  }


  return (<>

    <Form
      name='basic'
      initialValues={{ companyName: '', contactName: '', contactTitle: '' }}
      onFinish={addNewSupplier}
    >

      <Form.Item
        label="Company Name"
        name="companyName"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Name"
        name="contactName"
        rules={[{ required: true, message: 'Please input unit price!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Title"
        name="contactTitle"
        rules={[{ required: true, message: 'Please input units in stock!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>


    </Form>

  </>
  )
}

export default AddSupplier