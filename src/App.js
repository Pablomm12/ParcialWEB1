import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import Profile from './Componentes/UsuarioDetail';
import Login from './Componentes/Login';
function App() {
  return (  
    <Router>
      <Routes>
        <Route exact path="/" element= {<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  );
};

export default App;
