import CarouselImages from "./components/CarouselImages";
import ComoTrabalhamos from "./components/Containers/ComoTrabalhamos";
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
      </div>
    </div>
  );
}

export default App;
