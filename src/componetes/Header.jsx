import "./Header.css";
function Header() {
  return (
    <header>
      <div className="aguard">
        <p>🟡 Aguardando:</p>
        <p>0</p>
      </div>
      <div className="atendimento">
        <p>🔵 Em atendimento:</p>
        <p>0</p>
      </div>
      <div className="finalizado">
        <p>🟢 Finalizado:</p>
        <p>0</p>
      </div>
      <input type="text" placeholder="Buscar pet..." />
      <div className="cadast">
        <p>🐾 Pets Cadastrados:</p>
        <p>0</p>
      </div>
      <div className="cadastrar">
        <p> 🐾 Cadastrar Pet</p>
      </div>
      <div className="atendimento">
        <p>🩺 Abrir Atendimento</p>
      </div>
    </header>
  );
}
export default Header;
