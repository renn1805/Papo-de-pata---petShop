import {produtos} from "./produtos";

const ProdutosHome = () => {
   return (
      <section id="mais-vendidos">
        <h2 id="titulo-mais-vendidos">Nossos Melhores Produtos</h2>

         <div className="conteiner-cards-produto">
             {produtos.map((produto, index) => (
                <div className="card-produto" key={index}>
                   <div className="conteiner-imagem-produto">
                      <img src={produto.imagemProduto} alt="" className="imagem-produto" />
                   </div>
                   <div className="conteiner-conteudo-produto">
                      <h3 className="nome-produto">{produto.nomeProduto}</h3>
                      <p className="descricao-produto">{produto.descricaoProduto}</p>
                      <div className="conteiner-preco-produto">
                         <span className="preco-desconto">{produto.precoDescontoProduto}</span>
                         <span className="preco-inicial">{produto.PrecoInicialProduto}</span>
                      </div>
                   </div>
                </div>
             ))}
         </div>
      </section>
   );
};

export default ProdutosHome;
