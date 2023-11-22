import Parts from "./parts";
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item) => {
        return (
          <div key={item.id}>
            {<Parts part={item.name} exercises={item.exercises} />}
          </div>
        );
      })}
    </div>
  );
};

export default Content;
