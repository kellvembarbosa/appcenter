import { useEffect, useState } from 'react'


export default function Login () {

    const [nome, setNome] = useState({
        nome: "kellvem",
        idade: 26,
        caracteristicas : { }
    })

    useEffect(() => {
            async () => {
                console.warn("callApi()")
            }
        },[]
    )

    useEffect(
        () => console.log("nomeMudou()"),[nome.nome]
    )


    function handlerClickNameFunction(novoNome){
        if(novoNome.length > 10 )
            setNome({...nome, nome: novoNome })
        else 
            return; //setNome({...nome, nome: 'CPF inválido' })
    }

  return (
    <div style={{ flex: 1, padding: 16, background:"#d5aaff", textAlign: "center"}}>
        
        <div style={{textAlign: ""}}>
            <p>Meliante: { nome.nome }</p>
            <p>Idade: {nome.idade}</p>
        </div>

        <div style={{textAlign: "center", margin: 16}}>
            <input name="nome" onChange={(value) => handlerClickNameFunction(value.target.value)} />
        </div>

        <div>
            <input value="Mudar Idade" onClick={() => handlerClickNameFunction("Kellvem Alves")} type="button" style={ { padding: 16, borderRadius: 16, background : "#fff"}} />
        </div>
    </div>
  )
}
