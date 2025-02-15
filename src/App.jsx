const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} { props.exercise}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1.part} exercise = { props.part1.exercise} />
      <Part part = {props.part2.part} exercise = { props.part2.exercise} />
      <Part part = {props.part3.part} exercise = { props.part3.exercise} />
    </div>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  );
};
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {{part: part1, exercise: exercises1}} part2 = {{part: part2, exercise: exercises2}} part3 = {{part: part3, exercise: exercises3}} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  );
};

export default App;