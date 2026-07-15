import "./Header.css";
function Header(props) {
  return (
    <header>
      <div className="aguard">
        <p>🟡 Aguardando:</p>
        <p>{props.aguardando}</p>
      </div>
      <div className="atendimento">
        <p>🔵 Em atendimento:</p>
        <p>{props.atendimento}</p>
      </div>
      <div className="finalizado">
        <p>🟢 Finalizado:</p>
        <p>{props.finalizado}</p>
      </div>
      <input type="text" placeholder="Buscar pet..." />
      <div className="cadast">
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
