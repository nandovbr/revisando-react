function Form () {

  function handleSubmit (e) {
    e.preventDefault(); // evita que a página seja recarregada
    console.log("Usuário cadastrado!");
    alert("Usuário cadastrado!");
  };

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Digite seu nome aqui" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form;
