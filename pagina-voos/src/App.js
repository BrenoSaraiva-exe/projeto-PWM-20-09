import './App.css';
import NavBar from "./Components/NavBar";
import Cadastrar from "./Paginas/Cadastro";
import Deletar from "./Paginas/Delete";

function App() {
  return (
    <div>
      <NavBar />
      <Cadastrar />
      <Deletar/>
    </div>
  );
}

export default App;
