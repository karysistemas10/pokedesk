import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";

import { Pokemon } from "../types/types.d";
import { waitFor } from "../utils/utils";
import styles from "./pokemons.module.css";

const Pokemons = () => {
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(1000); //tiempo de espera para que aparezca el contenido
      const allPokemons = await fetchPokemons();// devolvera todos los pokemon unicos
      setPokemons(allPokemons);
      setIsLoading(false);
    };
    fetchAllPokemons();
  }, []);

  if (isLoading || pokemons === null) {
    return <LoadingScreen />;
  }

  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  }); //151 pokemones hagan match con la query LowerCase
  // estilos en la styles en nav

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          {filteredPokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
