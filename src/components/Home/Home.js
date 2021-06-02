import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllTeams from '../AllTeams/AllTeams';

import './Home.css';
const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    return (
        <div className="home-container">
            <div className="header-container">
                <h2>Sports Tracker</h2>
                <div className="sports-detail">
                    <p>Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators</p>
                </div>
            </div>
            <div className="team-container">
                <div className="team-card">
                    <Container>
                        <Row>
                            {
                                teams.map(team => <Col md={4}>
                                  <AllTeams team={team}></AllTeams>
                                </Col>)
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Home;