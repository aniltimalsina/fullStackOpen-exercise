import axios from "axios";
function Persons({ filteredPersons, persons, showAll, setPersons }) {
  const handleDelete = (name, id) => {
    const confirmation = window.confirm(`Delete ${name} ?`);
    if (confirmation) {
      axios.delete(`http://localhost:3000/persons/${id}`);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };
  return (
    <>
      {showAll
        ? persons.map((person, i) => {
            return (
              <div key={i}>
                {person.name} {person.number}{" "}
                <button
                  onClick={() => {
                    handleDelete(person.name, person.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        : filteredPersons.map((person, i) => {
            return (
              <div key={i}>
                {person.name} {person.number}{" "}
                <button
                  onClick={() => {
                    handleDelete(person.name, person.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
    </>
  );
}

export default Persons;
