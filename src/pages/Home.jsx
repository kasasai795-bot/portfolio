import { Link } from 'react-router-dom';
import { ChevronRight, Code } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const skills = ['C', 'Python', 'Java', 'JavaScript', 'HTML/CSS', 'SQL', 'GitHub', 'MongoDB', 'VS Code'];

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="profile-wrapper">
          <img src={profileImg} alt="Kasa Sai" className="profile-img" />
        </div>
        <div className="hero-content">
          <p className="hero-greeting">Welcome to my universe</p>
          <h1>
            Hi, I'm <span className="text-gradient">Kasa Sai</span>
          </h1>
          <p className="hero-subtitle">Software Developer & Machine Learning Enthusiast</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Work <ChevronRight size={20} />
            </Link>
            <a href="https://github.com/kasasai795-bot" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Code size={20} /> GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="info-grid">
        {/* About Me */}
        <div className="info-card glass">
          <div className="card-header">
            <span className="card-icon">👤</span>
            <h2>About Me</h2>
          </div>
          <p className="card-text">
            I am a B.S. Computer Science student at Mahindra University, Hyderabad with a strong passion for 
            Software Development and Machine Learning. I enjoy building real-world applications 
            that solve meaningful problems, from mobile apps to AI-powered tools.
          </p>
        </div>

        {/* Research Interests */}
        <div className="info-card glass">
          <div className="card-header">
            <span className="card-icon">🔬</span>
            <h2>Research Interests</h2>
          </div>
          <ul className="interest-list">
            <li>Machine Learning & Neural Networks</li>
            <li>Artificial Intelligence</li>
            <li>Software Engineering & Architecture</li>
            <li>Data Structures & Algorithms</li>
            <li>Emerging Technologies & IoT</li>
          </ul>
        </div>

        {/* Personal Details */}
        <div className="info-card glass">
          <div className="card-header">
            <span className="card-icon">📞</span>
            <h2>Personal Details</h2>
          </div>
          <div className="details-list">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <span className="detail-value">Kasa Sai</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone</span>
              <span className="detail-value">+91-9030866408</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Personal Email</span>
              <span className="detail-value email-link">kasasai795@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">College Email</span>
              <span className="detail-value email-link">se23ucse229@mahindrauniversity.edu.in</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Skills - Full Width */}
        <div className="info-card glass full-width">
          <div className="card-header">
            <span className="card-icon">⚡</span>
            <h2>Technical Skills</h2>
          </div>
          <div className="skills-tags">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
