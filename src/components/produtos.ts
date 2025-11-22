import imagemEscova from "../../public/produtos/imagem-escova.jpg"
import imagemColeira from "../../public/produtos/imagem-coleira.jpg"
import imagemPoteRacao from "../../public/produtos/imagem-pode-racao.jpg"



export interface Produtos {
    imagemProduto: string,
    nomeProduto: string,
    descricaoProduto: string,
    PrecoInicialProduto: string,
    precoDescontoProduto: string
}

export const produtos: Produtos[] = [
    {
        imagemProduto: imagemEscova,
        nomeProduto: "Escova Para Pets",
        descricaoProduto: "Uma escova pratica para tirar pelos do seu pet.",
        PrecoInicialProduto: "R$ 15,99",
        precoDescontoProduto: "R$ 12,99"
    },
    {
        imagemProduto: imagemColeira,
        nomeProduto: "Coleira Persolnalizavel Para Cachorros ou Gatos",
        descricaoProduto: "Compre uma coleira que valorize seu pet, deixe ele mais seguro e estiloso",
        PrecoInicialProduto: "R$ 29,99",
        precoDescontoProduto: "R$ 25,99"
    },
    {
        imagemProduto: imagemPoteRacao,
        nomeProduto: "Pode te ração",
        descricaoProduto: "Compre um pote de ração que combine com sua casa, minimalista e bonito.",
        PrecoInicialProduto: "R$ 33,90",
        precoDescontoProduto: "R$ 30,90"
    }
]