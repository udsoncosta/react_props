import Contador from "./components/contador/Contador.tsx"
import Card from "./components/card/Card.tsx"
import Tarefa from "./components/tarefa/Tarefa.tsx"


function App() {
    return (
        <>
        <Card titulo={"C#"} descricao={"Melhor linguagem de programação"} />
        <Card titulo={"Hereditário"} descricao={"Filme de terror"} />
        <Contador />
        <Tarefa />
        </>
    )
}

export default App