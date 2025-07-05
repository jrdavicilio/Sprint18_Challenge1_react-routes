import { experiences, studies } from '../data/resume';

function Resume() {
  return (
    <div>
      <h2>Experiencia Laboral</h2>
      {experiences.map(exp => (
        <div key={exp.id}>
          <h4>{exp.title}</h4>
          <p>{exp.company} - {exp.date}</p>
        </div>
      ))}

      <h2>Educación</h2>
      {studies.map(study => (
        <div key={study.id}>
          <h4>{study.title}</h4>
          <p>{study.institution} - {study.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Resume;
