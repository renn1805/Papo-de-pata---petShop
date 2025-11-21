const SobreHome = () => {
   interface ComposicaoCards {
      tituloCard: string;
      textoCard: string;
   }

   const Cards: ComposicaoCards[] = [
      {
         tituloCard: "Adoção Responsável",
         textoCard:
            "Avaliamos cada adotante para assegurar que o pet encontrará um lar adequado às suas necessidades.",
      },
      {
         tituloCard: "Acompanhamento Completo",
         textoCard:
            "Nossa equipe está disponível para tirar dúvidas e ajudar na adaptação do seu novo amigo.",
      },
      {
         tituloCard: "Animais Saudáveis",
         textoCard:
            "Cuidamos da saúde de cada animal antes da adoção, incluindo castração quando necessário.",
      },
   ];

   return (
      <section id="sobre">
         <div id="conteiner-texto-sobre">
            <h2 id="titulo-sobre">Sobre Nossa Plataforma</h2>
            <p id="descricao-sobre">
               Somos uma plataforma dedicada a facilitar a adoção responsável de
               animais. Cada pet merece um lar cheio de amor e cuidado!
            </p>
         </div>

         <div id="conteiner-cards">
            {Cards.map((card, index) => (
               <div className="card" key={index}>
                  <h3>{card.tituloCard}</h3>
                  <p>{card.textoCard}</p>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="2.7"
                     stroke="#FF8C42">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                     />
                  </svg>
               </div>
            ))}
         </div>
      </section>
   );
};

export default SobreHome;
