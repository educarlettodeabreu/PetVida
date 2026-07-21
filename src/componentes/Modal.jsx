import "./Modal.css";
function Modal({ pet }) {
  if (!pet) return null;
  return (
    <div className="contain">
      <div className="modal">
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
          <p>nome: {pet.name}</p>
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
