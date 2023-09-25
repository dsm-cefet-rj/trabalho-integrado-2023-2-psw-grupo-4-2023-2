import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js';
import './Leitor.css';
import { Button, IconButton } from '@mui/material';
import { ArrowCircleLeft, ZoomIn, ZoomOut } from '@mui/icons-material';

const Leitor = ({ namePdf }) => {
    const [pageNum, setPageNum] = useState(1);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [tamanhoPdf, setTamanhoPdf] = useState('pequeno');

    const path = '/src/assets/pdf/';

    useEffect(() => {
        const url = path + namePdf + '.pdf';
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

        pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
            setPdfDoc(pdfDoc_);
        });
    }, [namePdf]);

    useEffect(() => {
        const renderizaPagina = (pageNumber) => {
            if (pdfDoc) {
                let pageRendering = false;
                let pageNumPending = null;

                if (pageRendering) {
                    pageNumPending = pageNumber;
                } else {
                    pageRendering = true;

                    pdfDoc.getPage(pageNumber).then((page) => {
                        const scale = 1.5;
                        const viewport = page.getViewport({ scale: scale });
                        const canvas = document.getElementById('the-canvas');
                        const context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport,
                        };

                        const renderTask = page.render(renderContext);

                        renderTask.promise.then(() => {
                            pageRendering = false;
                            if (pageNumPending !== null) {
                                renderizaPagina(pageNumPending);
                            }
                        });
                    });
                }

                document.getElementById('page_num').textContent = pageNumber;
                document.getElementById('page_count').textContent = pdfDoc.numPages;
                document.getElementById('porcentagem').textContent = (
                    (pageNumber * 100) /
                    pdfDoc.numPages
                ).toFixed(2);
            }
        };

        renderizaPagina(pageNum);
    }, [pageNum, pdfDoc]);

    const onPrevPage = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
    };

    const onNextPage = () => {
        if (pdfDoc && pageNum < pdfDoc.numPages) {
            setPageNum(pageNum + 1);
        }
    };

    const voltarInicio = () => {
        setPageNum(1);
    };

    const mudarTamanho = () => {
        const tamanhos = ['pequeno', 'medio', 'grande', 'super-grande'];
        const indiceAtual = tamanhos.indexOf(tamanhoPdf);
        const novoIndice = (indiceAtual + 1) % tamanhos.length;
        setTamanhoPdf(tamanhos[novoIndice]);
    };

    return (
        <div className="container">
            <div className="leitor">
                <canvas id="the-canvas" className={tamanhoPdf}></canvas>
            </div>

            <div className="menu-leitor-fixado">
                <Button variant='contained' color='secondary' onClick={voltarInicio} >
                    Voltar a página inicial
                </Button>
                <div className="menu-leitor-botoes">
                    <IconButton onClick={onPrevPage}>
                        <ArrowCircleLeft></ArrowCircleLeft>
                    </IconButton>
                    <IconButton onClick={mudarTamanho}>
                        {tamanhoPdf === 'super-grande' ? (
                            <ZoomOut></ZoomOut>
                        ) : (
                            <ZoomIn></ZoomIn>
                        )}
                    </IconButton>
                    <button id="next" onClick={onNextPage}>
                        Próxima <i className="bx bxs-right-arrow"></i>
                    </button>
                </div>

                <div id="contador">
                    <span>
                        Página: <span id="page_num"></span> / <span id="page_count"></span>(
                        <span id="porcentagem"></span>%)
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Leitor;
