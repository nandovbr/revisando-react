// revisando propos com destructuring (desestruturando)
function Pessoa ({ nome, idade, profissao, foto }) {
  foto = "https://lh3.googleusercontent.com/a-/AOh14Gjf5XtrNwSlVoZxly-UcQn5b80CYIk5ILs5i6b7kQ=s288-p-rw-no"

  return (
    <div>
      <img src={foto} alt={nome} width="80" height="80" />
      <h4>Nome: {nome}</h4>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  )
}

export default Pessoa;
