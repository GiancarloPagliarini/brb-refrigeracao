import CarouselImages from "./components/CarouselImages";
import ComoTrabalhamos from "./components/Containers/ComoTrabalhamos";
import Orcamentos from "./components/Containers/Orcamentos";
import HeaderHome from "./components/HeaderHome"

function App() {
  return (
    <div>
      <div>
        <HeaderHome />
        <CarouselImages />
      </div>
      <div>
        <ComoTrabalhamos />
        <Orcamentos />
      </div>
    </div>
  );
}

export default App;
