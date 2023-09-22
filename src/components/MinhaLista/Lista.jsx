import React from 'react'
import { useState, useEffect } from 'react';
import { useFetch } from "../../hooks/useFetch";
import {AiTwotoneDelete} from "react-icons/ai";
import "./Lista.css"
const Lista = () => {
   
    const { data: items, httpConfig, loading, error } = useFetch('http://localhost:3000/favoritos');
    
      const deleteBook = (id) => {
        httpConfig(id, "DELETE")
      }
      return (
      <div className="container-list">
        {items && items.filter((item, idx)=>idx<10).map((item) => {
          const { id, image, name, descricao } = item;
          return (
            <div className="item-list" key={id}>
              <button className="button-delete" onClick={()=>deleteBook(id)}><AiTwotoneDelete/></button>
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