const Movies = require("./Movies").default;
const Card = require("./Card").default;

const Person = (props) => {
  return (
    <div className="col-md-10 offset-md-1">
      <h2 style={{ color: "blanchedalmond" }} className="mb-5">
        Showing results for {props.searchTerm}...
      </h2>
      <div className="d-flex flex-wrap justify-content-around">
        {props.searchResults.map((i) => {
          if (i.profile_path)
            return (
              <Card
                key={i.id.toString()}
                title={i.name}
                image={i.profile_path}
                movies={i.known_for}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Person;
