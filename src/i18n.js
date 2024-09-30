import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definir las traducciones
const resources = {
  en: {
    translation: {
      "Cycling": "Cycling",
      "Running": "Running",
      "Swimming": "Swimming",
      "SessionDescription": "Session around the bay of Cartagena",
      "DistanceDuration": "{{distance}} - {{duration}}",
      "InCity": "in {{city}}",
      "Name": "Camilo Escobar",
      "BestRunningTime": "Best Running Time",
      "BestSwimmingTime": "Best Swimming Time",
      "BestCyclingTime": "Best Cycling Time",
      "Log in": "Log in",
      "Email": "Email",
      "Password": "Password",
      "Enter email": "Enter email",
      "Please enter a valid email": "Please enter a valid email",
      "The password must be at least 8 characters": "The password must be at least 8 characters",
      "Invalid email and password": "Invalid email and password",     
    },
  },
  es: {
    translation: {
      "Cycling": "Ciclismo",
      "Running": "Correr",
      "Swimming": "Natación",
      "SessionDescription": "Recorrido alrededor de la bahía de Cartagena",
      "DistanceDuration": "{{distance}} - {{duration}}",
      "InCity": "en {{city}}",
      "Name": "Camilo Escobar",
      "BestRunningTime": "Mejor tiempo corriendo",
      "BestSwimmingTime": "Mejor tiempo nadando",
      "BestCyclingTime": "Mejor tiempo en ciclismo",
      "Log in": "Iniciar sesión",
      "Email": "Correo electrónico",
      "Password": "Contraseña",
      "Enter email": "Introduce tu correo electrónico",
      "Please enter a valid email": "Por favor ingresa un correo válido",
      "The password must be at least 8 characters": "La contraseña debe tener al menos 8 caracteres",
      "Invalid email and password": "Correo electrónico o contraseña inválidos",
    },
  },
};


i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'es', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
