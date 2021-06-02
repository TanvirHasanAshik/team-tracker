import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './AllTeams.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons';
const AllTeams = (props) => {
    const {strTeam, strTeamBadge, idTeam,strSport } = props.team;
    const history = useHistory();
    const handelDetails =(id)=>{
        history.push(`/team/details/${id}`);
    }
    return (
        <div className="team-detail">
           <div className="single-team">
                <img src={strTeamBadge} alt="" />
                <h2>{strTeam}</h2>
                <p><small>Sport type: {strSport}</small></p>
                <Button onClick={()=> handelDetails(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
           </div>
        </div>
    )
};

export default AllTeams;