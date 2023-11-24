import { useEffect, useState } from "react";
import FilterName from "./filterName";
import PersonForm from "./personform";
import Persons from "./persons";
import pService from "./services/perservice";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    pService.getAll().then((response) => setPersons(response.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let findPerson = persons.find((person) => {
      return person.name === newName;
    });
    findPerson === undefined
      ? pService
          .create({
            name: newName,
            number: newNumber,
          })
          .then((res) => {
            setPersons(persons.concat(res.data));
          })
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
      <FilterName handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        handleName={handleName}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons
        filteredPersons={filteredPersons}
        persons={persons}
        showAll={showAll}
      />
    </div>
  );
};

export default App;
