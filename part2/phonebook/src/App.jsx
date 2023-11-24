import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showAll, setShowAll] = useState(true);

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

  const handleFilter = (event) => {
    const inputValue = event.target.value;
    setFilterValue(inputValue);
    setShowAll(false);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterValue)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with <input onChange={handleFilter} />
      </p>
      <h2>add a new</h2>
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
      {showAll
        ? persons.map((person) => {
            return (
              <div key={person.id}>
                {person.name} {person.number}
              </div>
            );
          })
        : filteredPersons.map((person) => {
            return (
              <div key={person.id}>
                {person.name} {person.number}
              </div>
            );
          })}
    </div>
  );
};

export default App;
