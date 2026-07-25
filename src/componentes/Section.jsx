import "./Section.css";
function Section(props) {
  return (
    <section>
      {props.pets.map((pet) => (
        <div
          onClick={() => props.aoClicar(pet)}
          onContextMenu={(e) => {
            e.preventDefault();
            props.excluirpet();
            props.selecionar(pet);
          }}
          className="card"
          key={pet.id}
          style={{
            backgroundColor:
              pet.status === "Aguardando"
                ? "var(--aguardando)"
                : pet.status === "Em atendimento"
                  ? "var(--atendimento)"
                  : "var(--finalizado)",
          }}
        >
          <div
            className="img"
            style={{
              backgroundImage: pet.imagem
                ? `url(${pet.imagem})`
                : `url(/pet.jpg)`,
            }}
          ></div>
          <div className="dados">
            <p>Nome: {pet.name}</p>
            <p>Espécie: {pet.especie}</p>
            <p>Dono: {pet.dono}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Section;
