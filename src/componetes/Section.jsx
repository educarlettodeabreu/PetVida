import "./Section.css";
function Section() {
  return (
    <section>
      <div className="exemplo-card">
        <div className="img">imagem</div>
        <div className="dados">
          <p>Nome: </p>
          <p>dono:</p>
          <p>servico: </p>
          <p>observacao: </p>
        </div>
      </div>
    </section>
  );
}
export default Section;
