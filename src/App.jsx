import "./App.css";
import { useState, useEffect } from "react";
import Header from "./componentes/Header.jsx";
import Section from "./componentes/Section.jsx";
import Cadastro from "./componentes/Cadastro.jsx";
import Modal from "./componentes/Modal.jsx";
import Excluir from "./componentes/Excluir.jsx";
function App() {
  const [Pets, setPets] = useState(() => {
    const petSalvos = localStorage.getItem("meus-pets");
    if (petSalvos) {
      return JSON.parse(petSalvos);
    }
    return [
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
    ];
  });
  useEffect(() => {
    localStorage.setItem("meus-pets", JSON.stringify(Pets));
  }, [Pets]);

  const aguardando = Pets.filter((pet) => pet.status === "Aguardando");
  const Atendimento = Pets.filter((pet) => pet.status === "Em atendimento");
  const Finalizado = Pets.filter((pet) => pet.status === "Finalizado");

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
  const [petClicado, setpetClicado] = useState(null);
  const expandir = (pet) => {
    setpetClicado(pet);
  };
  const fechar = () => {
    setpetClicado(null);
  };
  const [excluirpet, setexcluirpet] = useState(false);
  const abrirexcluir = () => {
    if (excluirpet === true) {
      setexcluirpet(false);
    } else if (excluirpet === false) {
      setexcluirpet(true);
    }
  };
  const [petselecionado, setpetselecionado] = useState(null);
  const selecionarPet = (pet) => {
    setpetselecionado(pet);
  };
  const excluirPet = () => {
    const arraynovo = Pets.filter((pet) => pet.id !== petselecionado.id);
    setPets(arraynovo);
    abrirexcluir();
  };

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
      <Section
        selecionar={selecionarPet}
        pets={petsfiltrados}
        aoClicar={expandir}
        excluirpet={abrirexcluir}
      />
      <Cadastro
        display={exibircadastro ? "flex" : "none"}
        voltar={voltar}
        Cadastrar={Cadastrar}
      />
      <Modal pet={petClicado} fechar={fechar} />
      <Excluir
        cancelar={abrirexcluir}
        excluir={excluirPet}
        excluirpet={excluirpet}
      />
    </div>
  );
}

export default App;
