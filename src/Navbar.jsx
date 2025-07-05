import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/">Inicio </Link>
      <Link to="/projects">Proyectos </Link>
      <Link to="/resume">Currículum </Link>
    </nav>
  );
}

export default Navbar;
