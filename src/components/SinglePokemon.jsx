import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import TeamContext from "../context/TeamContext";

const SinglePokemon = ({ img, name, id }) => {
  const { user, handleAddTeam } = useContext(TeamContext);
  return (
    <Card style={{ width: "18rem", marginTop: 20 }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Button
          variant={
            user.team.some((idList) => idList === id) ? "danger" : "success"
          }
          onClick={() => handleAddTeam(id)}
          disabled={user.team.some((idList) => idList === id)}
        >
          {user.team.some((idList) => idList === id)
            ? "Already in my team"
            : "Add to my team"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SinglePokemon;
