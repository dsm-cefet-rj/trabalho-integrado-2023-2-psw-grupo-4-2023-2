import React from 'react'
import {BsBookmark} from "react-icons/bs"
import ListaVazia from './ListaVazia'
import "./MinhaLista.css"
import Lista from './Lista'
import { useEffect, useState } from 'react'
import { useFetch } from "../../hooks/useFetch";

const MinhaLista = () => {
    // eslint-disable-next-line no-undef
    const { data, httpConfig, setCallFetch, loading, error } = useFetch('http://localhost:3000/favoritos');
  return (
    <>
        <section className='body-box'>
            <div className="containerLista">
                <div className="text-myfavorite">
                    <h1><BsBookmark/> Meus Favoritos</h1>
                </div>
                <div className='list-box'>
                    <Lista/>
                </div>
            </div>
        </section>
    </>
  )
}

export default MinhaLista