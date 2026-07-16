import "./Cadastro.css";
function Cadastro(props) {
  return (
    <div
      className="conteiner"
      style={{ display: props.display }}
      onClick={props.voltar}
    >
      <div className="Cadastro" onClick={(e) => e.stopPropagation()}>
        <h2>Cadastro de Pets</h2>
        <form>
          <input type="text" placeholder="Nome do Pet" />
          <input type="text" placeholder="Espécie" />
          <input type="text" placeholder="Dono" />
          <input type="text" placeholder="Raça" />
          <input type="text" placeholder="Idade" />
          <input type="number" placeholder="telefone" />
          <input type="text" placeholder="Observações" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
