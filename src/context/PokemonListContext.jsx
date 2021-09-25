import React, { createContext, useState } from "react";
import { pokemonList } from "../helpers/pokemonList";

const PokemonListContext = createContext();

const PokemonListProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [list, setList] = useState(pokemonList);

  const data = { list };

  return (
    <PokemonListContext.Provider value={data}>
      {children}
    </PokemonListContext.Provider>
  );
};

export { PokemonListProvider };
export default PokemonListContext;
