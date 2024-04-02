import { Route, Switch } from "wouter";
import { CharactersGrid, Detail, Navbar } from "./components";


const App = () => {

  return (
    <main className="w-full h-screen justify-center">

      <Navbar />
      <Switch>
        <Route path="/" component={ CharactersGrid } />
        <Route path="/detail/:id" component={ Detail } />
      </Switch>      
      
    </main>
  )
}

export default App
