import "./Leitor.css"
import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js';
import pdf from '../../assets/pdf/exemplo.pdf';

const Leitor = () => {
    const [pageNum, setPageNum] = useState(1);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [tamanhoPdf, setTamanhoPdf] = useState('pequeno');

    useEffect(() => {
        const url = pdf;
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

        // Carregar o PDF e definir o documento PDF no estado
        pdfjsLib.getDocument(url).promise.then((pdfDoc_) => {
            setPdfDoc(pdfDoc_);
        });
    }, []);

    useEffect(() => {
        // Função para renderizar a página quando pageNum ou pdfDoc mudarem
        const renderizaPagina = (pageNumber) => {
            if (pdfDoc) {
                var pageRendering = false;
                var pageNumPending = null;

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
                            viewport: viewport
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
                document.getElementById('porcentagem').textContent = (pageNumber * 100 / pdfDoc.numPages).toFixed(2);
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
        const novaClasse = tamanhoPdf === 'pequeno' ? 'medio' : tamanhoPdf === 'medio' ? 'grande' : tamanhoPdf === 'grande' ? 'super-grande' : 'pequeno';
        setTamanhoPdf(novaClasse);
    };

    return (
        <>
            <div className="container">
                <div className="leitor">
                    <button id="inicio" onClick={voltarInicio}>Voltar a página inicial</button>
                    <br></br>
                    <canvas id="the-canvas" className={tamanhoPdf}></canvas>
                </div>

                <div className="menu-leitor-fixado">
                    <div className="menu-leitor-botoes">
                        <button id="prev" onClick={onPrevPage}><i className='bx bxs-left-arrow' ></i>Anterior</button>
                        <button id="expandir" onClick={mudarTamanho}>
                            { tamanhoPdf === "super-grande"? 
                                <><i className='bx bx-collapse'> </i>Diminuir</>
                                :  <><i className='bx bx-expand'> </i>Expandir </>
                            }
                        </button>
                        <button id="next" onClick={onNextPage}>Próxima<i className='bx bxs-right-arrow'></i></button>
                    </div>

                    <div id="contador">
                        <span>Página: <span id="page_num"></span> / <span id="page_count"></span>(<span id="porcentagem"></span>%)</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Leitor;


/* <i className='bx bx-collapse'></i> :                       <i className='bx bx-expand'></i> */