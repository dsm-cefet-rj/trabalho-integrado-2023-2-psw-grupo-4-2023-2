import React from 'react'
import { useState, useEffect } from 'react';
import "./Lista.css"
const Lista = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/static/livros.json')
          .then((response) => response.json())
          .then(setData);
      }, []);
      return (
      <div className="container-list">
        {data.filter((item, idx)=>idx<6).map((item) => {
          const { id, image, name, descricao } = item;
          return (
            <div className="item-list" key={id}>
              <div className="image">
                <img src={require("/src/assets/img/livros/" + image)} alt={image} min-height={"100px"} width={"100px"}/>
              </div>
              <div className="info-list">
                <div className="bookmark">
                  <h5 className="name-list">{name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ) 
}

export default Lista