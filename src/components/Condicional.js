import { useState } from 'react';

function Condicional() {
  const [email, setEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');

  function enviarEmail(e) {
    e.preventDefault();
    // alert(`${email} - enviado com sucesso`);
    // console.log(email);
    setUserEmail(email);
  };

  function limparEmail() {
    setUserEmail('');
    // alert('email limpo');
    console.log("email limpo");
  };

  return (
    <div>
      <h2>Cadastre seu email:</h2>
      <form>
        <label htmlFor='email'>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='digite seu email aqui'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type='submit' onClick={enviarEmail}>Enviar email</button>
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional;
