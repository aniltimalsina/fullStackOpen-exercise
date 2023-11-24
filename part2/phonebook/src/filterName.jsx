function FilterName(props) {
  return (
    <p>
      filter shown with <input onChange={props.handleFilter} />
    </p>
  );
}

export default FilterName;
