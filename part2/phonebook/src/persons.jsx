function Persons({ filteredPersons, persons, showAll }) {
  return (
    <>
      {showAll
        ? persons.map((person, i) => {
            return (
              <div key={i}>
                {person.name} {person.number}
              </div>
            );
          })
        : filteredPersons.map((person, i) => {
            return (
              <div key={i}>
                {person.name} {person.number}
              </div>
            );
          })}
    </>
  );
}

export default Persons;
