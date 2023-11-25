import { useEffect, useState } from "react";
import FilterName from "./filterName";
import PersonForm from "./personform";
import Persons from "./persons";
import pService from "./services/perservice";
import axios from "axios";
import Notification from "./notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    pService.getAll().then((response) => setPersons(response.data));
  }, []);

  const handleSubmit = (event) => {
    const handleEditNumber = () => {
      const confirmation = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirmation) {
        axios
          .put(`http://localhost:3000/persons/${findPerson.id}`, {
            name: newName,
            number: newNumber,
          })
          .then((response) => {
            //update the state
            setPersons(
              persons.map((person) =>
                person.id !== findPerson.id ? person : response.data
              )
            );
            setNotification(`${newName}'s number has been changed `);
          });
      }
    };
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
            setNotification(`${newName} has been added`); //notification alert
          })
      : handleEditNumber(); //Only if the entered name is matching with already exist name

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
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
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
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
