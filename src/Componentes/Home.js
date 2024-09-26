import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRunning, FaSwimmer, FaBicycle } from "react-icons/fa";


const mockUserService = () => {
  return {
    name: "Camilo Escobar",
    bestTimes: {
      running: "1:05",
      swimming: "1:05",
      cycling: "1:05",
    },
    avatar: "https://cdn.discordapp.com/attachments/938625558382784532/1288883124813693089/user.png?ex=66f6cd73&is=66f57bf3&hm=5d18dbd84d6596d8562bed23b5cb0941e6a5e9eed1356c2e286883c25aa95ca1&", 
  };
};

const mockSessionService = () => {
  const cities = ["Cartagena", "Bogotá", "Medellín"];
  return {
    cycling: Array(10).fill({
      title: "Cycling Session",
      description: "Recorrido alrededor de la bahía de Cartagena",
      distance: "40k",
      duration: "2h10m",
      city: cities[Math.floor(Math.random() * cities.length)],
      image: " https://cdn.discordapp.com/attachments/938625558382784532/1288881484777652224/cycling.jpg?ex=66f6cbec&is=66f57a6c&hm=14e4e5b38623056ecbd41cca2d8ae7295b8c662a2812c988662c7d8c11afbbb3&",
    }),
    running: Array(10).fill({
      title: "Running Session",
      description: "Recorrido por los parques de Bogotá",
      distance: "5k",
      duration: "1h00m",
      city: cities[Math.floor(Math.random() * cities.length)],
      image: "https://cdn.discordapp.com/attachments/938625558382784532/1288881459611828235/runner.jpg?ex=66f6cbe6&is=66f57a66&hm=909539dd8ca0d4aba98de48aa44fbdf68e2bb1e2b3628c1064dca54319a49a4a&", 
    }),
    swimming: Array(10).fill({
      title: "Swimming Session",
      description: "Nado en aguas abiertas en Medellín",
      distance: "5k",
      duration: "1h00m",
      city: cities[Math.floor(Math.random() * cities.length)],
      image: "https://cdn.discordapp.com/attachments/938625558382784532/1288872065721700433/tom-dils-2lDtnHgiQzc-unsplash.jpg?ex=66f6c326&is=66f571a6&hm=89429a40b3d7c61ad7091fff8f498337a90ed8a3bc76737fd32a47437204d90e&", 
    }),
  };
};

const Home = () => {
  const [user, setUser] = useState({});
  const [sessions, setSessions] = useState({ cycling: [], running: [], swimming: [] });

  useEffect(() => {

    const userData = mockUserService();
    const sessionData = mockSessionService();
    setUser(userData);
    setSessions(sessionData);
  }, []);


  const SessionCard = ({ session }) => (
    <Card className="mb-3 session-card">
      <div
        style={{
          backgroundImage: `url(${session.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Card.Body className="text-white bg-dark bg-opacity-50">
          <Card.Title className="text-truncate">{session.title}</Card.Title>
          <Card.Text className="text-truncate">{session.description}</Card.Text>
          <Card.Text className="text-truncate">
            {session.distance} - {session.duration} en {session.city}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );

  return (
    <Container fluid>
      {/* contenido principal */}
      <Row className="my-4">
        <Col>
          <h2 className="text-center">Cycling</h2>
          <Row>
            {sessions.cycling.map((session, idx) => (
              <Col key={idx} sm={12} md={6} lg={4}>
                <SessionCard session={session} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <h2 className="text-center">Running</h2>
          <Row>
            {sessions.running.map((session, idx) => (
              <Col key={idx} sm={12} md={6} lg={4}>
                <SessionCard session={session} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <h2 className="text-center">Swimming</h2>
          <Row>
            {sessions.swimming.map((session, idx) => (
              <Col key={idx} sm={12} md={6} lg={4}>
                <SessionCard session={session} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/*usuario */}
      <Row style={{ backgroundColor: 'blue', color: 'white' }} className="p-4 text-white text-center">
        <Col md={2}>
          <img
            src={user.avatar}
            alt="User Avatar"
            className="rounded-circle"
            width="100"
          />
        </Col>
        <Col md={4}>
          <h4>{user.name}</h4>
        </Col>
        <Col md={2}>
          <FaRunning size={32} />
          <p>{user.bestTimes?.running}</p>
        </Col>
        <Col md={2}>
          <FaSwimmer size={32} />
          <p>{user.bestTimes?.swimming}</p>
        </Col>
        <Col md={2}>
          <FaBicycle size={32} />
          <p>{user.bestTimes?.cycling}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
