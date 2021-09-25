import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import { PokemonListProvider } from "./context/PokemonListContext";
import { TeamProvider } from "./context/TeamContext";
import Team from "./views/Team";

function App() {
  return (
    <TeamProvider>
      <PokemonListProvider>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/team" component={Team} exact />
          </Switch>
        </Router>
      </PokemonListProvider>
    </TeamProvider>
  );
}

export default App;
