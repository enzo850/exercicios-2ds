export default function Perfil(){
    const usuario = {
    nome: "Enzo",
    idade: 16,
    profissao: "Dev"
  }

  return(
    <div>
      <h1>nome {usuario.nome}</h1>
      <p>{usuario.idade}</p>
      {usuario.idade >= 18 ? <p>Você é maior de idade</p> : <p>Você é menor de idade</p>}
      <p>profissão {usuario.profissao}</p>
    </div>
  )
}