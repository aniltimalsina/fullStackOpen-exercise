import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = (props) => {
  return (
    <>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};

export default Course;
