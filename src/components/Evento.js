function Evento() {

  function meuEvento () {
    console.log("Fui ativado!");
    alert("Fui ativado!");
  }

  return (
    <div>
      <h2>Clipe para ativar um evento</h2>
      <button type="button" onClick={meuEvento}>Ativar!</button>
    </div>
  )
}

export default Evento;
