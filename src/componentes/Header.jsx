import "./Header.css";
function Header(props) {
  return (
    <header>
      <div className="aguard" onClick={() => props.filtrar("Aguardando")}>
        <p>🟡 Aguardando:</p>
        <p>{props.aguardando}</p>
      </div>
      <div
        className="atendimento"
        onClick={() => props.filtrar("Em atendimento")}
      >
        <p>🔵 Em atendimento:</p>
        <p>{props.atendimento}</p>
      </div>
      <div className="finalizado" onClick={() => props.filtrar("Finalizado")}>
        <p>🟢 Finalizado:</p>
        <p>{props.finalizado}</p>
      </div>
      <input type="text" placeholder="Buscar pet..." onChange={props.buscar} />
      <div className="cadast" onClick={() => props.filtrar("todos")}>
        <p>🐾 Pets Cadastrados:</p>
        <p>{props.cadastrados}</p>
      </div>
      <div className="cadastrar">
        <p onClick={props.cadastrarPet}> 🐾 Cadastrar Pet</p>
      </div>
      <div className="atendimento">
        <p>🩺 Abrir Atendimento</p>
      </div>
    </header>
  );
}
export default Header;
