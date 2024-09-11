import { Container } from "@mui/material"
import HeaderHome from "./components/HeaderHome"

function App() {
  return (
    <div>
      <HeaderHome />
      <Container maxWidth="xl" className="h-screen">
        <h1 className="">Infos ficarão aqui</h1>
      </Container>
    </div>
  );
}

export default App;
