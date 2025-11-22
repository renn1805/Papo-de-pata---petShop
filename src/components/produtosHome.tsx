import {produtos} from "./produtos";

const ProdutosHome = () => {
   return (
      <section id="mais-vendidos" className="flex-justify-align-center">
         <h2 id="titulo-mais-vendidos">Nossos Melhores Produtos</h2>

         <div id="conteiner-cards-produto" className="flex-justify-align-center">
            {produtos.map((produto, index) => (
               <div className="card-produto" key={index}>
                  <div className="conteiner-imagem-produto">
                     <img
                        src={produto.imagemProduto}
                        alt=""
                        className="imagem-produto"
                     />
                  </div>
                  <div className="conteiner-conteudo-produto">
                     <h3 className="nome-produto">{produto.nomeProduto}</h3>
                     <p className="descricao-produto">
                        {produto.descricaoProduto}
                     </p>
                     <div className="conteiner-preco-produto flex-justify-align-center">
                        <span className="preco-desconto">
                           {produto.precoDescontoProduto}
                        </span>
                        <span className="preco-inicial">
                           {produto.PrecoInicialProduto}
                        </span>

                        <button
                           className="ver-produto flex-justify-align-center"

                           // todo: rota correta para o produto escolhido
                           onClick={() => {
                              localStorage.setItem(
                                 "produtoSelecionado",
                                 JSON.stringify(produto)
                              );
                              location.href = "/produto";
                           }}>
                           VER PRODUTO
                        </button>
                        
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <button
            id="ver-todos-produtos"
            className="flex-justify-align-center"
            onClick={() => {
               location.href = "";
            }}>
            VER TODOS PRODUTOS{" "}
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={3}
               stroke="currentColor">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
               />
            </svg>
         </button>
      </section>
   );
};

export default ProdutosHome;
