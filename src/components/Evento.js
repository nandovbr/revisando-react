import Button from './evento/Button'; // passando evento via propos

function Evento() {

  function meuEvento () {
    console.log("Fui ativado!");
    alert("Fui ativado!");
  }

  return (
    <div>
      <h2>Clipe para ativar um evento</h2>
      <Button event={meuEvento} text="Primeiro evento" />
      {/* <button type="button" onClick={meuEvento}>Ativar!</button> */}
    </div>
  )
}

export default Evento;
