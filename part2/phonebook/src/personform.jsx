function personForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        name: <input onChange={props.handleName} />
      </div>
      <div>
        number: <input onChange={props.handleNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default personForm;
