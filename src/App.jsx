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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      <strong>
        Total units:{" "}
        {props.part1.exercises + props.part2.exercises + props.part3.exercises}
      </strong>
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
  const part1 = {
    name: "CSIT221 - Information Management 2",
    exercises: 3,
  };
  const part2 = {
    name: "CSIT321 - Applications Development and Emerging Technologies",
    exercises: 3,
  };
  const part3 = {
    name: "IT365 - Data Analytics 1",
    exercises: 3,
  };

  const studentName = "Ray Christian C. Romales";
  const courseCode = "CSIT340";
  const section = "G8";

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={studentName} courseCode={courseCode} section={section} />
    </div>
  );
};

export default App;
