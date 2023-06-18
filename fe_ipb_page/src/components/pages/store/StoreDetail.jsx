import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Divider } from "antd";
import { Link } from 'react-router-dom';

function StoreDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [store, setStore] = useState([]);


  useEffect(() => {

    fetch(`${process.env.REACT_APP_BE_API}/storedetail/${id}`)
      .then(res => res.json())
      .then(data => {
        setStore(data)
      })
      .catch(err => console.log(err))
  }, [id]);


  return (
    <>
      <div>
        {
          store && (
            <div >
              <img src={store.imgname} alt={store.name} />
              {/* // 이미지 없음 //  */}
              <h2 >{store.name}</h2>
              <div >
                <p>주소 : {store.location}</p>
                <p>전화번호 : {store.number}</p>
                <p>지역 : {store.area}</p>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default StoreDetail;