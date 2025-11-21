import {useState} from "react";

const SliderHome = () => {

   interface Slides {
      key: number;
      titulo: string;
      conteudo: string;
   }

   const slides: Slides[] = [
      {
         key: 1,
         titulo: "Vida leve com pets",
         conteudo:
            "Uma vida mais feliz começa ao lado de quem late, ronrona e ama sem medidas. Aqui, cada pet encontra a chance de viver com alegria",
      },
      {
         key: 2,
         titulo: "Conexão e cuidado",
         conteudo:
            "Cuidamos de cada pet com dedicação porque sabemos que eles fazem parte da família. Amor, bem-estar e muita energia boa para transformar cada dia no melhor dia.",
      },
      {
         key: 3,
         titulo: "Bem-estar e natureza",
         conteudo:
            "Viver com um pet é sentir a vida pulsar em pequenos momentos: um passeio no parque, um carinho inesperado, um olhar cheio de confiança. Aqui, celebramos essa vida simples e cheia de amor.",
      },
      {
         key: 4,
         titulo: "Nova vida para pets e tutores",
         conteudo:
            "Cada adoção é uma história que começa com carinho e se transforma em parceria. Seu novo amigo está esperando para compartilhar aventuras e construir memórias ao seu lado.",
      },
   ];

   const [slide, setSlide] = useState(1);

   function previousSlide (){
      setSlide(slide === 1 ? 4 : slide - 1)
   }

   function nextSlide(){
      setSlide(slide === 4 ? 1 : slide + 1)
   }


   return (
      <section id="slider">

         <div id="conteiner-slides" style={{
            width: `${slides.length* 100}%`,
            transform: `translateX( -${(slide - 1) * (100/slides.length)}%)`
         }}>

            {
               slides.map((slide) => (
                  <div key={slide.key} className="slide">
                     <div id="overlay"></div>
                     <div className="conteudo-slide">
                        <h2 className="titulo-slide">
                           {slide.titulo}
                        </h2>
                        <p className="paragrafo-slide">
                           {slide.conteudo}
                        </p>
                     </div>
                  </div>
               ))
            }
         </div>


         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="white"
            id="previous"
            onClick={previousSlide}>
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M15.75 19.5 8.25 12l7.5-7.5"
            />
         </svg>

         <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="white"
            id="next"
            onClick={nextSlide}>
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="m9.25 4.5 7.5 7.5-7.5 7.5"
            />
         </svg>

         <div id="conteiner-indicador-slide">
            <div className={`dot ${slide === 1 ? "dot-ativa" :null}`} onClick={()=>{setSlide(1)}}></div>
            <div className={`dot ${slide === 2 ? "dot-ativa" :null}`} onClick={()=>{setSlide(2)}}></div>
            <div className={`dot ${slide === 3 ? "dot-ativa" :null}`} onClick={()=>{setSlide(3)}}></div>
            <div className={`dot ${slide === 4 ? "dot-ativa" :null}`} onClick={()=>{setSlide(4)}}></div>
         </div>
      </section>
   );
};

export default SliderHome;
