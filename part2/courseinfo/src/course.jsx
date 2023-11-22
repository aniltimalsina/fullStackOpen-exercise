import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = ({ course }) => {
  return (
    <>
      {course.map((item, i) => {
        return (
          <div key={i}>
            <Header course={item.name} />
            <Content parts={item.parts} />
            <Total parts={item.parts} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
