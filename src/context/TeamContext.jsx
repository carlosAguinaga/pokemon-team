import React, { createContext, useState } from "react";

const TeamContext = createContext();

const trainer = {
  name: "Daniel",
  team: [],
};

const TeamProvider = ({ children }) => {
  const [user, setUser] = useState(trainer);

  const handleAddTeam = (id) => {
      if(user.team.length === 3){
          alert('Tu equipo esta lleno');
      }else{
          setUser({ ...user, team: [...user.team, id] });
      }
  };
  const handleRemoveTeam = (id) => {
    setUser({ ...user, team: [...user.team, id] });
  };

  const userData = { user, handleAddTeam, handleRemoveTeam };

  return (
    <TeamContext.Provider value={userData}>{children}</TeamContext.Provider>
  );
};
export { TeamProvider };
export default TeamContext;
