import { BrowserRouter as Router, Route, Routes } from "react-router-dom";// Importando ruras
import "./App.css";// importando el App.css
import { Items, Pokemon, Pokemons } from "./pages";

// Nuestras rutas
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/pokemons/:name" element={<Pokemon />} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
