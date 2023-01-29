require("./Card.scss");

const Card = (props) => {
  const imageSource = `https://image.tmdb.org/t/p/w500${props.image}`;
  return (
    <div className="card mb-5">
      <img className="card-img-top" src={imageSource} />
      <div className="info">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {props.movies ? (
              <p className="font-weight-bold text-center">
                <b>Known For: </b>
              </p>
            ) : (
              <span>
                <b>Date: </b>
              </span>
            )}
            {props.movies
              ? props.movies.map((m) => (
                  <p className="text-center">
                    {m.title}
                    <hr />
                  </p>
                ))
              : props.date}
          </li>
          {!props.movies && (
            <div>
              <li className="list-group-item ">
                <b>Rating:</b> {props.rating}/10
              </li>
              {props.genres.map((g) => (
                <p className="text-center">
                  {g}
                  
                </p>
              ))}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
