import { useState } from "react";
require("./Navbar.css");

const Navbar = (props) => {
  const [category, setCategory] = useState("");
  const clickHandlerPopular = () => {
    props.onNavClick("", "movie", "popular");
    setCategory("Popular");
  };
  const clickHandlerTopRated = () => {
    props.onNavClick("", "movie", "top_rated");
    setCategory("TopRated");
  };
  const clickHandlerUpcoming = () => {
    props.onNavClick("", "movie", "upcoming");
    setCategory("Upcoming");
  };

  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            MovieStore
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  type="button"
                  className={
                    category === "Popular"
                      ? "btn btn-link active"
                      : "btn btn-link"
                  }
                  aria-current="page"
                  href="#"
                  onClick={clickHandlerPopular}
                >
                  Popular
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={
                    category === "TopRated"
                      ? "btn btn-link active"
                      : "btn btn-link"
                  }
                  href="#"
                  onClick={clickHandlerTopRated}
                >
                  Top Rated
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={
                    category === "Upcoming"
                      ? "btn btn-link active"
                      : "btn btn-link"
                  }
                  href="#"
                  onClick={clickHandlerUpcoming}
                >
                  Upcoming
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
