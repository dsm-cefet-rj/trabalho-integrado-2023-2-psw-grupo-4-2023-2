import "./Leitor.css"
import React from 'react';
import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.js'
import pdf from '../../assets/pdf/exemplo.pdf'


const Leitor = () => {
    let pdfDoc = null;
    var url = pdf;

    // Carrega via <script> tag, cria endereço para acesso ao PDF.js exports.
    //var pdfjsLib = window['pdfjs-dist/build/pdf'];

    // Local do dpf.worker.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    // Asynchronous download do PDF
    var loadingTask = pdfjsLib.getDocument(url);

    var pageNum=1,
        pageRendering = false,
        pageNumPending = null;

    function renderizaPagina(pageNumber) {
        pageRendering=true;

        // eslint-disable-next-line no-unused-expressions
        loadingTask.promise.then(function(pdf) {
            console.log('PDF loaded');
        
            // Pega primeira page
            pdf.getPage(pageNumber).then(function(page) {
            console.log('Page loaded: '+ pageNumber );
            
            var scale = 1.5;
            var viewport = page.getViewport({scale: scale});

            // Prepara canvas usando as dimensões da página PDF
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Renderiza página PDF para canvas 
            var renderContext = {
            canvasContext: context,
            viewport: viewport
            };
            var renderTask = page.render(renderContext);

            renderTask.promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {
                    renderizaPagina(pageNumPending);
                    pageNumPending = null;
                }
                });

        })});

        document.getElementById('page_num').textContent = pageNumber;
    }

    function queueRenderPage(pageNumber) {
        if (pageRendering) {
        pageNumPending = pageNumber;
        } else {
            renderizaPagina(pageNumber);
        }
    }
    /**
     * mostra a página anterior
     */
    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum);
    }

    /**
     * mostra a proxima página
     */
    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum);
    }

    window.onload=function(){
        document.getElementById('prev').addEventListener('click', onPrevPage);
        document.getElementById('next').addEventListener('click', onNextPage);
    }
    //mostra a primeira página do arquivo pdf
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;
        document.getElementById('page_num').textContent = pageNum;  

        // Chamando a renderizacao da página 1
        renderizaPagina(pageNum);
    });
  return (
    <>  
        <div class="container">
        <div class="Leitor">
            <button id="prev">Prev</button>
            <canvas id="the-canvas"></canvas>
            <button id="next">Next</button>
        </div>
        <div id="contador">
            <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>
        </div>
        </div>
    </>
  )
}
export default Leitor