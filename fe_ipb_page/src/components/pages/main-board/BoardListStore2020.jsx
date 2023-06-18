import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { logInState } from "../../state/loginState";

const { Search } = Input;

function BoardListStore2020() {
  const [boardData, setBoardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [logInData, setLogInData] = useRecoilState(logInState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_API}/board/list`);
      const data = await response.json();
      setBoardData(data);
      setFilteredData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    {
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <Link to={`/board/${record.id}`}>{text}</Link>,
    },
    // {
    //   title: '내용',
    //   dataIndex: 'body_text',
    //   key: 'body_text',
    // },
    {
      title: '작성자',
      dataIndex: 'name',
      key: 'staff_id',
    },
  ];

  const handleSearch = (value) => {
    const filtered = boardData.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Search
          placeholder="이름으로 검색"
          onSearch={handleSearch}
          style={{ width: 200 }}
        />


        {/* {logInData.name && (
            <Button type="primary">
                <Link to="/board/add">글쓰기</Link>
            </Button>
          )} */}

      </div>
      <Table dataSource={filteredData} columns={columns} />
    </>
  );
}

export default BoardListStore2020;