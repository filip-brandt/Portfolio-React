import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{project.title}</h3>
      <img src={project.image} alt={project.title} className="project-card-image" />
      <p className="project-card-description">{project.description}</p>
      
      <div className="project-tags">
        {project.tags.map((tag: string, index: number) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={project.repoUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-card-link"
      >
        GitHub Repo →
      </a>
    </div>
  );
};

export default ProjectCard;