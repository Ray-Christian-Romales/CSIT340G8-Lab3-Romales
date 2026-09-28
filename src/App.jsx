const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} ({props.exercises1} units)
      </p>
      <p>
        {props.part2} ({props.exercises2} units)
      </p>
      <p>
        {props.part3} ({props.exercises3} units)
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      <strong>Total units: {props.total}</strong>
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
  const part1 = "CSIT221 - Information Management 2";
  const exercises1 = 3;
  const part2 = "CSIT321 - Applications Development and Emerging Technologies";
  const exercises2 = 3;
  const part3 = "IT365 - Data Analytics 1";
  const exercises3 = 3;

  const studentName = "Ray Christian C. Romales";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
