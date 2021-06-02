import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faCheckCircle, faFlag, faFutbol, faMarsStroke, faRunning } from '@fortawesome/free-solid-svg-icons';
import maleTeam from '../../image/Photo/male.png';
import femaleTeam from '../../image/Photo/female.png';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    const {id} = useParams();
    const [team, setTeam] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]));
    }, [id]);
    console.log(team);
    const{strTeam, strLeague, strTeamBadge, strGender, strCountry, strDescriptionFR, strDescriptionEN,intFormedYear,strSport} = team;
    return (
        <div className='team-detail-container'>
            <div className="header-container">
                <img src={strTeamBadge} alt="" /> 
                <h1>{strTeam}</h1>                   
            </div>
            <Link to='/home' className="back-home"><FontAwesomeIcon icon={faArrowLeft} /> Back</Link>
            <Container>
                <Row className="team-title">
                    <Col md={7}>
                        <h2>{strTeam}</h2> 
                        <p><FontAwesomeIcon icon={faCheckCircle} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faRunning} /> League: {strLeague}</p>
                        <p><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>

                    </Col>
                    <Col md={5} className='team-img'>
                        {
                            strGender === 'Male' ? <img src={maleTeam} alt="" />
                            : <img src={femaleTeam} alt="" />
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="description">
                        <p>{strDescriptionEN}</p>
                        <p>{strDescriptionFR}</p>
                    </Col>
                </Row>
                <Row className='social-icon'>
                    <Col md={12}>
                        <a href=""><FontAwesomeIcon icon={faTwitterSquare} /></a>
                        <a href=""><FontAwesomeIcon icon={faFacebookSquare} /></a>
                        <a href=""><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamDetails;