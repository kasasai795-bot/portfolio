import { NavLink } from 'react-router-dom';
import { Briefcase, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <div className="nav-logo text-gradient">Sai Portfolio</div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Home size={18} />
              Home
            </span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={18} />
              Projects
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
