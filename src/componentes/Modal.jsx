import "./Modal.css";
function Modal({ pet, fechar }) {
  if (!pet) return null;
  return (
    <div
      className="contain"
      onClick={() => {
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
          <input type="text" id="nome" placeholder={pet.name} />
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
