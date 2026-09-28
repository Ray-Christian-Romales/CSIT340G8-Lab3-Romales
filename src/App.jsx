const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} ({props.part.exercises} units)
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return (
    <p>
      <strong>Total units: {total}</strong>
    </p>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p>
        {props.name} - {props.courseCode} - {props.section}
      </p>
    </footer>
  );
};

const App = () => {
  const course = "CSIT340 - Industry Elective (Frontend using ReactJS)";
  const parts = [
    {
      name: "CSIT221 - Information Management 2",
      exercises: 3,
    },
    {
      name: "CSIT321 - Applications Development and Emerging Technologies",
      exercises: 3,
    },
    {
      name: "IT365 - Data Analytics 1",
      exercises: 3,
    },
  ];

  const studentName = "Ray Christian C. Romales";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
