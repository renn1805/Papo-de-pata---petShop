import HeaderHome from "../components/HeaderHome";
import Sobre from "../components/SobreHome";
import RedirecionamentoHome from "../components/RedirecionamentoHome";
import SliderHome from "../components/SliderHome";

const Home = () => {
   return (
      <div>
         <HeaderHome />
         <Sobre />
         <SliderHome />
         <RedirecionamentoHome />
      </div>
   );
};

export default Home;
