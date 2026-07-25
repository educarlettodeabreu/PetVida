import "./Modal.css";
function Modal({ pet, fechar, editar, salvar }) {
  if (!pet) return null;
  return (
    <div
      className="contain"
      onClick={() => {
        salvar();
        fechar();
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="imagemodal"
          style={{ backgroundImage: `url(${pet.imagem})` }}
        ></div>
        <div
          className="data"
          style={{
            backgroundColor:
              pet.status === "Aguardando"
                ? "var(--aguardando)"
                : pet.status === "Em atendimento"
                  ? "var(--atendimento)"
                  : "var(--finalizado)",
          }}
        >
          <div className="datadivs">
            <label htmlFor="nome">nome: </label>
            <input
              type="text"
              id="nome"
              name="name"
              placeholder={pet.name}
              onChange={(e) => editar(e)}
            />
          </div>
          <div className="datadivs">
            <label htmlFor="especie">especie: </label>
            <input
              type="text"
              id="especie"
              name="especie"
              placeholder={pet.especie}
              onChange={(e) => editar(e)}
            />
          </div>
          <div className="datadivs">
            <label htmlFor="dono">dono: </label>
            <input
              type="text"
              id="dono"
              name="dono"
              placeholder={pet.dono}
              onChange={(e) => editar(e)}
            />
          </div>
          <div className="datadivs">
            <label htmlFor="idade">idade: </label>
            <input
              type="text"
              id="idade"
              name="idade"
              placeholder={pet.idade}
              onChange={(e) => editar(e)}
            />
          </div>
          <div className="datadivs">
            <label htmlFor="telefone">telefone: </label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder={pet.telefone}
              onChange={(e) => editar(e)}
            />
          </div>
          <div className="datadivs">
            <label htmlFor="status">status: </label>
            <input
              type="text"
              id="status"
              name="status"
              placeholder={pet.status}
              onChange={(e) => editar(e)}
            />
          </div>
          <div className="datadivs observacoes">
            <label htmlFor="observacoes">observacoes: </label>
            <textarea
              type="text"
              id="observacoes"
              name="observacoes"
              placeholder={pet.observacoes}
              onChange={(e) => editar(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
