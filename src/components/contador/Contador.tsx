import { useState } from 'react'

function Contador() {

    const [valor, setValor] = useState(0)

    function addMaisUm(){
    setValor(valor + 1)
    }


  return (
    <>
    <p>Clique para adicionar + 1</p>
    <button onClick={ addMaisUm }>+1</button>
    <h1>{valor}</h1>
    </>
  )
}
export default Contador