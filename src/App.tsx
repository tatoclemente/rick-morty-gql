
import { CharactersGrid, Navbar } from "./components";


const App = () => {




  return (
    <main className="w-full h-screen justify-center">

      <Navbar />
      <h1 className="text-4xl font-semibold">Hola Rick & Morty</h1>
      
      <CharactersGrid />
      
    </main>
  )
}

export default App
