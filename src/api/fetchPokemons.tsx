// https://unpkg.com/pokemons@1.1.0/pokemons.json

import { Pokemon } from "../types/types.d";
import { formatName } from "../utils/utils";

// se exporta por que la usaremos afuera
export async function fetchPokemons(): Promise<Pokemon[]> {
  //esperando una respuesta de la API
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );
  // si la respuesta no es OK mandame un error
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  // Respuesta transformada en JSON
  const results = await response.json();
  //mapeamos solo usara el nombre del pokemon a mostrar
  const pokemons = results.results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );
  return uniquePokemons;
}
