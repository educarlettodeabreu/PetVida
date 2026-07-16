import "./App.css";
import { useState } from "react";
import Header from "./componentes/Header.jsx";
import Section from "./componentes/Section.jsx";
import Cadastro from "./componentes/Cadastro.jsx";
function App() {
  const [Pets] = useState([
    {
      id: 1,
      name: "Apolo",
      especie: "Cachorro",
      dono: "Eduardo",
      status: "Aguardando",
    },
    {
      id: 2,
      name: "Luna",
      especie: "Gato",
      dono: "Maria",
      status: "Em atendimento",
    },
    {
      id: 3,
      name: "Max",
      especie: "Cachorro",
      dono: "João",
      status: "Finalizado",
    },
  ]);

  const [aguardando] = useState(
    Pets.filter((pet) => pet.status === "Aguardando"),
  );
  const [Atendimento] = useState(
    Pets.filter((pet) => pet.status === "Em atendimento"),
  );
  const [Finalizado] = useState(
    Pets.filter((pet) => pet.status === "Finalizado"),
  );
  const [exibircadastro, setexibircadastro] = useState(false);
  const abrirformulario = () => {
    setexibircadastro(true);
  };
  const voltar = () => {
    setexibircadastro(false);
  };

  return (
    <div className="App">
      <Header
        aguardando={aguardando.length}
        atendimento={Atendimento.length}
        finalizado={Finalizado.length}
        cadastrados={Pets.length}
        cadastrarPet={abrirformulario}
      />
      <Section pets={Pets} />
      <Cadastro display={exibircadastro ? "flex" : "none"} voltar={voltar} />
    </div>
  );
}

export default App;
