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
        <form onSubmit={props.Cadastrar}>
          <input type="text" name="nome" placeholder="Nome do Pet" />
          <input type="text" name="especie" placeholder="Espécie" />
          <input type="text" name="dono" placeholder="Dono" />
          <input type="text" name="raca" placeholder="Raça" />
          <input type="text" name="idade" placeholder="Idade" />
          <input type="number" name="telefone" placeholder="telefone" />
          <input type="text" name="observacoes" placeholder="Observações" />
          <label htmlFor="imagem">imagem do pet</label>
          <input type="file" name="imagem" id="imagem" accept="image/*" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
