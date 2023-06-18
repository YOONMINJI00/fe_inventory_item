import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logInState } from '../../state/loginState';
import axios from 'axios';
import { Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './MiniBoardExp2020.css';

const { Search } = Input;

function MiniBoardExp2020() {
  const [storeProductData, setStoreProductData] = useState([]);
  const [logInData, setLogInData] = useRecoilState(logInState);
  const [searchTerm, setSearchTerm] = useState('');

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayDate = `${year}-${month}-${day}`;

  useEffect(() => {
    fetchData();
  }, []);

  const url_be = `http://localhost:8080/storeproduct/listexp/${logInData.store_id}`;

  const fetchData = () => {
    axios(url_be, {
      method: 'get'
    })
      .then((res) => {
        const addData = res.data.map((item) => ({
          ...item,
          addData: subtractDates(todayDate, item.exp),
        }));
        setStoreProductData(addData);
      })
      .catch((err) => {

      });
  };

  const subtractDates = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round((new Date(date2) - new Date(date1)) / oneDay);
    return diffDays;
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredProducts = storeProductData.filter(
    (item) =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.product_code.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    return new Date(a.exp) - new Date(b.exp);
  });

  const columns = [
    { title: 'SKU Code', dataIndex: 'product_code' },
    {
      title: '상품 이름',
      dataIndex: 'product_name',
      render: (text, record) => (
        <Link to={`/storeproduct/detail/${record.id}`} className="link">
          [{record.brand}] {text}
        </Link>
      )
    },
    {
      title: '재고',
      dataIndex: 'qnt',
      sorter: (a, b) => a.qnt - b.qnt,
      defaultSortOrder: 'ascend',
    },
    {
      title: '유통기한',
      dataIndex: 'exp',
      sorter: (a, b) => new Date(a.exp) - new Date(b.exp), // Add a sorter function
      render: (text, record) => {
        const daysDiff = subtractDates(todayDate, text);
        if (daysDiff <= 0) {
          return <span className="expired">{text}</span>;
        } else if (daysDiff <= 3) {
          return <span className="exp-soon">{text}</span>;
        } else {
          return <span>{text}</span>;
        }
      }
    }
  ];

  return (
    <div className="mini-board-container" style={{ overflow: 'auto', maxHeight: '600px' }}>
      <Search
        placeholder="Search..."
        prefix={<SearchOutlined />}
        allowClear
        onSearch={handleSearch}
        className="search-input"
      />
      <Table
        dataSource={sortedProducts}
        columns={columns}
        rowKey="id"
        className="customTable"
        pagination={false}
      />
    </div>
  );
}

export default MiniBoardExp2020;

