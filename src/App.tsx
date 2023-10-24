import Contador from "./components/contador/Contador.tsx"
import Card from "./components/card/Card.tsx"
import Tarefa from "./components/tarefa/Tarefa.tsx"
import Home from "./pages/home/Home.tsx"


function App() {
    return (
        <>
        <Home/>
        <Card titulo={"C#"} descricao={"Melhor linguagem de programação"} />
        <Card titulo={"Hereditário"} descricao={"Filme de terror"} />
        <Contador />
        <Tarefa />
        
        </>
    )
}

export default App