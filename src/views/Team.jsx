import React, { useContext, useEffect, useState } from "react";
import PokemonListContext from "../context/PokemonListContext";
import TeamContext from "../context/TeamContext";
import SinglePokemon from "../components/SinglePokemon";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Team = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "70%",
    margin: "auto",
    marginTop: 20,
  };

  const { user } = useContext(TeamContext);
  const { list } = useContext(PokemonListContext);
  const [myTeam, setMyTeam] = useState([]);

  useEffect(() => {
    if (list && list.length > 0) {
      setMyTeam(list.filter(({ id }) => user.team.includes(id)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.team]);

  return (
    <>
      <Header />
      <div style={styles}>
        {myTeam.length > 0 &&
          myTeam.map((pokemon) => (
            <SinglePokemon
              img={pokemon.img}
              key={pokemon.id}
              name={pokemon.name}
              isOnMyTeam={pokemon.isOnMyTeam}
              id={pokemon.id}
              team={true}
            />
          ))}
      </div>
      {myTeam.length === 0 && (
        <div style={{textAlign: "center", marginTop: 20}}>
          <h2>No hay pokemones</h2>
          <Button variant="success">
            <Link to='/'>Go to Home</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default Team;
