import projects from '../data/projects';

function Projects() {
  return (
    <>
      <h2>Proyectos</h2>
      {projects.map(project => {
        return (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} width="300" />
            <a href={project.url}>Ver proyecto</a>
          </li>
        )
      })}
      <ul></ul>
    </>
  );
}

export default Projects;
