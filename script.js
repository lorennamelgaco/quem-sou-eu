/* =====================================
   ANIMAÇÃO AO ROLAR A PÁGINA
===================================== */

const elementos = document.querySelectorAll(
    '.story-content, .photo-text, .plot-twist > div, .final > div'
);


const observer = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add('aparecer');

            }

        });

    },

    {
        threshold: 0.2
    }

);


elementos.forEach((elemento) => {

    elemento.classList.add('antes');

    observer.observe(elemento);

});