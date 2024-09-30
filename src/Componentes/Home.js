import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaRunning, FaSwimmer, FaBicycle } from "react-icons/fa";
import { useTranslation } from "react-i18next"; 
import cyclingImage from '../images/cycling.jpg'
import runningImage from '../images/runner.jpg'
import swimmingImage from '../images/login.jpg'
import userImage from '../images/user.png'
import i18n from '../i18n';

const mockUserService = () => {
  return {
    name: "Camilo Escobar",
    bestTimes: {
      running: "1:05",
      swimming: "1:05",
      cycling: "1:05",
    },
    avatar: userImage, 
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
      image: cyclingImage,
    }),
    running: Array(10).fill({
      title: "Running Session",
      description: "Recorrido alrededor de la bahía de Cartagena",
      distance: "10k",
      duration: "1:05h",
      city: cities[Math.floor(Math.random() * cities.length)],
      image: runningImage,
    }),
    swimming: Array(10).fill({
      title: "Swimming Session",
      description: "Nado en aguas abiertas en Medellín",
      distance: "5k",
      duration: "1h00m",
      city: cities[Math.floor(Math.random() * cities.length)],
      image: swimmingImage,
    }),
  };
};

const Home = () => {
  const [user, setUser] = useState({});
  const [sessions, setSessions] = useState({ cycling: [], running: [], swimming: [] });
  const { t } = useTranslation(); 

  useEffect(() => {
    const userData = mockUserService();
    const sessionData = mockSessionService();
    setUser(userData);
    setSessions(sessionData);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
          padding: "10px",
        }}
      >
        <div style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
          <h4>{session.title}</h4>
          <p>{session.description}</p>
          <p>
            <span style={{ color: "white" }}>
              {t("DistanceDuration", { distance: session.distance, duration: session.duration })}
            </span>{" "}
            {t("InCity", { city: session.city })}
          </p>
        </div>
      </div>
    </Card>
  );

  const renderSessionCards = (sessions) => {
    return (
      <>
        {sessions.map((session, idx) => (
          <Col key={idx} xs={12} md={6} className="mb-3"> {/* 2 columnas */}
            <SessionCard session={session} />
          </Col>
        ))}
      </>
    );
  };

  return (
    <Container fluid>
      {/* Botones de idioma */}
      <div className="text-left my-3">
        <Button onClick={() => changeLanguage('es')}>Español</Button>
        <Button onClick={() => changeLanguage('en')} className="ml-2">English</Button>
      </div>

      {/* Contenido principal - Cada deporte con 2 columnas y 5 filas */}
      <Row className="my-4">
        <Col>
          <h2 className="text-center">{t("Cycling")}</h2>
          <Row>
            {renderSessionCards(sessions.cycling)}
          </Row>
        </Col>
        <Col>
          <h2 className="text-center">{t("Running")}</h2>
          <Row>
            {renderSessionCards(sessions.running)}
          </Row>
        </Col>
        <Col>
          <h2 className="text-center">{t("Swimming")}</h2>
          <Row>
            {renderSessionCards(sessions.swimming)}
          </Row>
        </Col>
      </Row>

      {/* Sección del usuario */}
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
          <p>{t("BestRunningTime")}: {user.bestTimes?.running}</p>
        </Col>
        <Col md={2}>
          <FaSwimmer size={32} />
          <p>{t("BestSwimmingTime")}: {user.bestTimes?.swimming}</p>
        </Col>
        <Col md={2}>
          <FaBicycle size={32} />
          <p>{t("BestCyclingTime")}: {user.bestTimes?.cycling}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
