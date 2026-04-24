import { Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Train Tracking Mobile App',
      description: 'A comprehensive mobile application supporting offline train schedules and online real-time tracking using Maps APIs. Built to deliver accurate, timely information for commuters and travelers across India.',
      tech: ['Python', 'Maps API', 'Mobile Development', 'Offline Support'],
      github: 'https://github.com/kasasai795-bot/train-tracker',
      emoji: '🚂'
    },
    {
      title: 'Sudoku Solver',
      description: 'An ML-powered application that captures Sudoku grids via camera/photo, uses machine learning for digit recognition, and automatically solves the puzzle using advanced backtracking algorithms.',
      tech: ['Python', 'Machine Learning', 'Computer Vision', 'Algorithms'],
      github: 'https://github.com/kasasai795-bot/sudoku-solver',
      emoji: '🧩'
    },
    {
      title: '3D Ball Control Game',
      description: 'A physics-based 3D game built in Unity with responsive camera tracking, obstacle navigation, and progressive level design. Features realistic physics and smooth gameplay mechanics.',
      tech: ['Unity', 'C#', 'Game Physics', '3D Design'],
      github: 'https://github.com/kasasai795-bot/3d-ball-game',
      emoji: '🎮'
    }
  ];

  return (
    <div className="container">
      <div className="projects-header">
        <h1 className="text-gradient">Featured Projects</h1>
        <p>A selection of my recent work and personal projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card glass">
            <div className="project-image">
              <span className="project-emoji">{project.emoji}</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  <Code size={16} /> View Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
