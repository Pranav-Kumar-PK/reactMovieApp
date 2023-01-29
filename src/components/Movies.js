const Card = require("./Card").default;

const Movies = (props) => {
  return (
    <div className="col-md-10 offset-md-1 ">
      <h2 style={{color: "blanchedalmond"}} className="mb-5">Showing results for {props.searchTerm}...</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {props.searchResults.map((i) => {
          if (i.poster_path)
            return (
              <Card
                key={i.id.toString()}
                title={i.title}
                image={i.poster_path}
                date={i.release_date}
                rating={i.vote_average}
                genres={i.genre_ids.map((g) => props.genresMovie[`${g}`])}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Movies;
