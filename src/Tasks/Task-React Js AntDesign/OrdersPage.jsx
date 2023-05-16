import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import Input from "antd/es/input/Input";
import { Button } from "antd/es/radio";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [customerIdFilter, setCustomerIdFilter] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get("https://northwind.vercel.app/api/orders")
      .then((res) => {
        setOrders(res.data);
        setFilteredOrders(res.data);
      })
      .catch((error) => {
        console.error("Error occured:", error);
      });
  };

  const handleFilterChange = (e) => {
    setCustomerIdFilter(e.target.value);
  };

  const handleFilter = () => {
    const filteredData = orders.filter((order) =>
      order.customerId.toLowerCase().includes(customerIdFilter.toLowerCase())
    );
    setFilteredOrders(filteredData);
  };

  const handleClearFilter = () => {
    setCustomerIdFilter("");
    setFilteredOrders(orders);
  };

  const formatDate = date => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB');
    return formattedDate;
  };

  const rowClassName = record => {
    const shippedDate = new Date(record.shippedDate);
    const requiredDate = new Date(record.requiredDate);

    if (shippedDate > requiredDate) {
      return 'highlight-row';
    }

    return '';
  };


  const columns = [
    { title: "Customer ID", dataIndex: "customerId", key: "customerId" },
    {
      title: "Freight",
      dataIndex: "freight",
      key: "freight",
      sorter: (a, b) => a.freight - b.freight,
    },
    { title: "Ship City", dataIndex: ["shipAddress", "city"], key: "shipCity" },
    {
      title: "Ship Country",
      dataIndex: ["shipAddress", "city"],
      key: "shipCountry",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      sorter: (a, b) => new Date(a.orderDate) - new Date(b.orderDate),
      render: date => formatDate(date),
    },
    { title: "Required Date", dataIndex: "requiredDate", key: "requiredDate", render: date => formatDate(date),},
    { title: "Shipped Date", dataIndex: "shippedDate", key: "shippedDate", render: date => formatDate(date), },
  ];

  return (
    <>
    <style>
        {`
          .highlight-row {
            background-color: red;
          }
        `}
      </style>
      <div>
        <Input
          placeholder="Filter by Customer ID"
          value={customerIdFilter}
          onChange={handleFilterChange}
          style={{ width: 200, marginRight: 8 }}
        />
        <Button type="primary" onClick={handleFilter}>
          Filter
        </Button>
        <Button onClick={handleClearFilter}>Clear Filter</Button>
      </div>
      <Table dataSource={filteredOrders} columns={columns} rowClassName={rowClassName} />
    </>
  );
};

export default OrdersPage;
