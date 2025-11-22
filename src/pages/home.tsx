import HeaderHome from "../components/HeaderHome";
import Sobre from "../components/SobreHome";
import SliderHome from "../components/SliderHome";
import ProdutosHome from "../components/produtosHome";



const Home = () => {
   return (
      <div>
         <HeaderHome />
         <Sobre />
         <SliderHome />
         <ProdutosHome />
      </div>
   );
};

export default Home;
