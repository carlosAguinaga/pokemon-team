import React, { useContext } from 'react'
import TeamContext from '../context/TeamContext'

const Team = () => {

    const {user, handleRemoveTeam} = useContext(TeamContext)
    console.log(user, handleRemoveTeam)
    return (
        <div>
            <h1>Team</h1>
        </div>
    )
}

export default Team
