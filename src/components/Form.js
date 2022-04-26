import { useState } from 'react';

function Form () {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit (e) {
    e.preventDefault(); // evita que a página seja recarregada ao clicar no botão
    // console.log("Usuário cadastrado!");
    // console.log(name);
    console.log(`usuário ${name} cadastrado com a senha: ${password}`);
    // alert("Usuário cadastrado!");
  };

  return (
    <div>
      <h1>Meu Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome aqui"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha aqui"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form;
