import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(persons);
    let findPerson = persons.find((person) => {
      return person.name === newName;
    });
    console.log(findPerson);
    findPerson === undefined
      ? setPersons(persons.concat({ name: newName }))
      : window.alert(`${newName} is already added to phonebook`);
    event.target.reset();
    setNewName("");
  };

  const handleName = (event) => {
    const currName = event.target.value;
    setNewName(currName);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => {
        return <div key={i}>{person.name}</div>;
      })}
    </div>
  );
};

export default App;
