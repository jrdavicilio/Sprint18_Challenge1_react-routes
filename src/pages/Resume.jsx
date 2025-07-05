import { experiences, studies } from '../data/resume';

function Resume() {
  return (
    <>
      <h2>Experiencia Laboral</h2>
      <ul>
      {experiences.map(exp => {
        <li key={exp.id}>
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
          <p>{exp.date}</p>
        </li>
      })}
      </ul>

      <h2>Educación</h2>
      <ul>
      {studies.map(studie => {
        <li key={studie.id}>
          <h3>{studie.title}</h3>
          <p>{studie.institution}</p>
          <p>{studie.date}</p>
        </li>
      })}
      </ul>
    </>
  );
}

export default Resume;
