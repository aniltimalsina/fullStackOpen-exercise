const Total = ({ parts }) => {
  return (
    <div>
      <p>
        <strong>
          total of{" "}
          {parts.reduce((currentExercise, part) => {
            return currentExercise + part.exercises;
          }, 0)}{" "}
          exercises
        </strong>
      </p>
    </div>
  );
};

export default Total;
