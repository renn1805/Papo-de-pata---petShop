import logoHeader from "../../public/logo-header.png";

const HeaderHome = () => {
   return (
      <header>
         <img id="logo-header" src={logoHeader} alt="logotipo" />

         <div className="conteiner-botoes-header">
            <button className="botao-conhecer-mais" onClick={()=> {window.location.href = '#sobre'}}>
               Conheça mais sobre nós!
            </button>
            <button className="botao-fale-conosco">Fale conosco</button>
         </div>
      </header>
   );
};

export default HeaderHome;
