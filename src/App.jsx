import "./App.css";
import { useState } from "react";
import Header from "./componentes/Header.jsx";
import Section from "./componentes/Section.jsx";
import Cadastro from "./componentes/Cadastro.jsx";
function App() {
  const [Pets, setPets] = useState([
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
  const Cadastrar = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const dados = Object.fromEntries(formdata.entries());
    const arquivo = formdata.get("imagem");
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64img = event.target.result;

      const novoPet = {
        ...dados,
        id: Date.now(),
        status: "Aguardando",
        imagem: base64img,
      };

      setPets([...Pets, novoPet]);
      setexibircadastro(false);
    };
    if (arquivo) {
      reader.readAsDataURL(arquivo);
    }
  };
  const [textobusca, settextobusca] = useState("");
  const buscarPet = (e) => {
    settextobusca(e.target.value.toLowerCase());
  };

  const [Filtro, setFiltro] = useState("todos");
  const filtrar = (status) => {
    setFiltro(status);
  };
  const petsfiltrados = Pets.filter((pet) => {
    const atendestatus = Filtro === "todos" || pet.status === Filtro;
    const Petvalues = Object.values(pet).join(" ").toLowerCase();
    const atendebusca = Petvalues.includes(textobusca);
    return atendestatus && atendebusca;
  });
  return (
    <div className="App">
      <Header
        buscar={buscarPet}
        filtrar={filtrar}
        aguardando={aguardando.length}
        atendimento={Atendimento.length}
        finalizado={Finalizado.length}
        cadastrados={Pets.length}
        cadastrarPet={abrirformulario}
      />
      <Section pets={petsfiltrados} />
      <Cadastro
        display={exibircadastro ? "flex" : "none"}
        voltar={voltar}
        Cadastrar={Cadastrar}
      />
    </div>
  );
}

export default App;
