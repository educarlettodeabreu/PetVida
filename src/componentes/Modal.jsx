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
          <label htmlFor="nome">nome: </label>
          <input
            type="text"
            id="nome"
            name="name"
            placeholder={pet.name}
            onChange={(e) => editar(e)}
          />
          <p>especie: {pet.especie}</p>
          <p>dono: {pet.dono}</p>
          <p>idade: {pet.idade}</p>
          <p>numero: {pet.telefone}</p>
          <p>status: {pet.status}</p>
          <p className="obs">observacoes: {pet.observacoes}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
