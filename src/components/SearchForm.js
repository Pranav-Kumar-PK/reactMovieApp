require("./SearchForm.scss");

const SearchForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitForm(
      event.target[0].value,
      event.target.elements.field.value
    );
    event.target[0].value = "";
  };
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3">
        <form onSubmit={submitHandler}>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              name="movies"
              placeholder="Search..."
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>

          <div className="filter mt-4">
            <label>
              <input
                type="radio"
                name="field"
                value="movie"
                defaultChecked
              />
              <span htmlFor="movie">Movie</span>
            </label>
            <label>
              <input type="radio" name="field" value="tv" />
              <span htmlFor="tvShow">Tv Show</span>
            </label>
            <label>
              <input type="radio" name="field" value="person" />
              <span htmlFor="actor">Person</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
