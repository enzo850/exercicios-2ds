export default function Perfil(){
    let usuario = {
    nome: "Enzo",
    idade: 16,
    profissao: "Programador"
}

return(
    <>
        <p>{usuario.nome}</p>
        <p>{usuario.idade}</p>
        <p>{usuario.profissao}</p>

      <p>
        {usuario.idade < 18 
        ?"Você é maior de idade."
        :"Você é menor de idade."
        }
    </p>
    </>
    )
}