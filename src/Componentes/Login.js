import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import swimmingImage from '../images/login.jpg'
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';  // Asegúrate de que esté importado




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);
  const { t } = useTranslation(); // Usar el hook de traducción

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) && password.length >= 8) {
      setShowError(false);
      setValidated(true);
      console.log("Form is valid");
    } else {
      setShowError(true);
      setValidated(false);
    }
  };

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${swimmingImage})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container style={{ maxWidth: "400px", backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
        <div className="text-center mb-3">
          <Button variant="outline-secondary" onClick={() => changeLanguage('es')}>
            Español
          </Button>
          <Button variant="outline-secondary" onClick={() => changeLanguage('en')} className="ml-2">
            English
          </Button>
        </div>
        <h2 className="text-center">{t("Log in")}</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>{t("Email")}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t("Enter email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              isInvalid={!validated && showError}
            />
            <Form.Control.Feedback type="invalid">
              {t("Please enter a valid email")}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>{t("Password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder={t("Password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              isInvalid={!validated && showError && password.length < 8}
            />
            <Form.Control.Feedback type="invalid">
              {t("The password must be at least 8 characters")}
            </Form.Control.Feedback>
          </Form.Group>

          {showError && (
            <Alert variant="danger" className="mt-3">
              {t("Invalid email and password")}
            </Alert>
          )}

          <Button variant="primary" type="submit" className="w-100 mt-3">
            {t("Log in")}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;