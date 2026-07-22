import "./Excluir.css";
function Excluir({ excluirpet, cancelar, excluir }) {
  if (excluirpet === false) return null;
  return (
    <div className="espaco" onContextMenu={(e) => e.preventDefault()}>
      <div className="bloco">
        <p>vc deseja excluir este item?</p>
        <button className="btn-excluir" onClick={() => excluir()}>
          excluir
        </button>
        <button className="cancelar" onClick={() => cancelar()}>
          cancelar
        </button>
      </div>
    </div>
  );
}
export default Excluir;
