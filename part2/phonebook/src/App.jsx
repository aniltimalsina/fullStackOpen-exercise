import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "4235352" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(persons);
    let findPerson = persons.find((person) => {
      return person.name === newName;
    });
    console.log(findPerson);
    findPerson === undefined
      ? setPersons(persons.concat({ name: newName, number: newNumber }))
      : window.alert(`${newName} is already added to phonebook`);
    event.target.reset();
    setNewName("");
  };

  const handleName = (event) => {
    const currName = event.target.value;
    setNewName(currName);
  };

  const handleNumber = (event) => {
    const currNumber = event.target.value;
    setNewNumber(currNumber);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleName} />
        </div>
        <div>
          number: <input onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => {
        return (
          <div key={i}>
            {person.name} {person.number}
          </div>
        );
      })}
    </div>
  );
};

export default App;
