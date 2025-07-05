import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Inicio</Link>
      <Link to="/projects" style={{ margin: '0 10px' }}>Proyectos</Link>
      <Link to="/resume" style={{ margin: '0 10px' }}>Currículum</Link>
    </nav>
  );
}

export default Navbar;
