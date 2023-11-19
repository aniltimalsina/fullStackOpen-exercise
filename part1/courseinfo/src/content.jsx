import Parts from "./parts";
const Content = (props) => {
  return (
    <div>
      <Parts part1={props.part1} exercise1={props.exercise1} />
      <Parts part2={props.part2} exercise2={props.exercise2} />
      <Parts part3={props.part3} exercise3={props.exercise3} />
    </div>
  );
};

export default Content;
