const Total = (props) => {
  return (
    <div>
      <p>
        <strong>
          total of{" "}
          {props.parts[0].exercises +
            props.parts[1].exercises +
            props.parts[2].exercises}{" "}
          exercises
        </strong>
      </p>
    </div>
  );
};

export default Total;
