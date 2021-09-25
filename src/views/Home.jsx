import React, { useContext } from "react";
import Header from "../components/Header";
import SinglePokemon from "../components/SinglePokemon";
import PokemonListContext from "../context/PokemonListContext";

const Home = () => {
  const { list } = useContext(PokemonListContext);

  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "70%",
    margin: "auto",
    marginTop: 20,
  };

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <div style={styles}>
        {list?.length > 0 &&
          list.map((pokemon) => (
            <SinglePokemon
              img={pokemon.img}
              key={pokemon.id}
              name={pokemon.name}
              isOnMyTeam={pokemon.isOnMyTeam}
              id={pokemon.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
