import React from 'react'
import {BsBookmark} from "react-icons/bs"
import ListaVazia from './ListaVazia'
import "./MinhaLista.css"
import Lista from './Lista'
import { useEffect, useState } from 'react'

const MinhaLista = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/static/livros.json')
          .then((response) => response.json())
          .then(setData);
      }, []);
  return (
    <>
        <section className='body-box'>
            <div className="containerLista">
                <div className="text-myfavorite">
                    <h1><BsBookmark/> Meus Favoritos</h1>
                </div>
                <div className='list-box'>
                    {data? <Lista/>:<ListaVazia/>}
                </div>
            </div>
        </section>
    </>
  )
}

export default MinhaLista