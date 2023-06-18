import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Modal } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { confirm } = Modal;

// 스태프 업데이트 이지만 비밀번호 변경만 있습니다. 
const StaffUpdate = () => {
  const { id } = useParams(); // useparams -> staffList에서 줬던 params을 넘겨줌 
  const [stateId, setStateId] = useState(id);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // e.target.value = id;
    setStateId(id);
  };

  const initialValues = {
    id: stateId,
  };

  const onFinish = async (values) => {

    try {
      await fetch(`${process.env.REACT_APP_BE_API}/staff/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    confirm({
      title: '삭제 확인',
      content: '정말로 삭제하시겠습니까?',
      okText: '예',
      cancelText: '아니오',
      onOk: deleteStaff,
      onCancel() {

      },
    })
  };

  const deleteStaff = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BE_API}/staff/delete?id=${id}`, {
        method: 'DELETE',
      });
      message.success('staff가 삭제되었습니다.');
      navigate("/staff");
    } catch (error) {
      console.error(error);
      message.error('staff 삭제에 실패하였습니다.');
    }
  };


  return (
    <>
      <Form
        initialValues={initialValues}
        onFinish={onFinish}>
        <Form.Item label="아이디" name="id" labelCol={{ span: 2 }} wrapperCol={{ span: 12 }}>
          <Input value={id} onChange={handleChange} readOnly style={{ width: '50%' }} />
        </Form.Item>
        <Form.Item label="비밀번호" name="pwd" labelCol={{ span: 2 }} wrapperCol={{ span: 12 }}>
          <Input style={{ width: '50%' }} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit">
            수정하기
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button type="primary" htmlType="submit" danger onClick={handleDelete} >
            삭제하기
          </Button>
        </Form.Item>
      </Form>

      {/* <div>
        <Button type="dashed" htmlType="submit" >
          <Link to="/staff">뒤로가기</Link> 
        </Button>
      </div> */}
      <div>

      </div>
    </>

  );
};

export default StaffUpdate;