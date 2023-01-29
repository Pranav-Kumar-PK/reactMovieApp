import { useState } from "react";
const axios = require("axios").default;
const SearchForm = require("./components/SearchForm").default;
const Movies = require("./components/Movies").default;
const TvShows = require("./components/TvShows").default;
const Person = require("./components/Person").default;
const Navbar = require("./components/Navbar").default;
const Error = require("./components/Error").default;

function App() {
  const [searchResult, setSearchResult] = useState({
    resultArray: [],
    genre_ids_movie: [],
    genre_ids_tv: [],
    searchField: "movie",
    searchTerm: "",
    category: "",
    error: false,
  });

  const SubmitFormHandler = async (searchTerm, field, category) => {
    let result;
    if (searchTerm) {
      result = await axios.get(
        `https://api.themoviedb.org/3/search/${field}?api_key=8d636748f84e680ee2856119069c5570&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      );
    } else if (category) {
      result = await axios.get(
        `https://api.themoviedb.org/3/${field}/${category}?api_key=8d636748f84e680ee2856119069c5570&language=en-US`
      );
    }

    const genre_ids_movie = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=8d636748f84e680ee2856119069c5570&language=en-US"
    );
    const genre_ids_Tv = await axios.get(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=8d636748f84e680ee2856119069c5570&language=en-US"
    );

    let genresMovie = {};
    for (const i of genre_ids_movie.data.genres) {
      let id = i.id;
      let g = i.name;
      genresMovie[`${id}`] = g;
    }
    let genresTv = {};
    for (const i of genre_ids_Tv.data.genres) {
      let id = i.id;
      let g = i.name;
      genresTv[`${id}`] = g;
    }
    if(!category || category==="top_rated")category="top Rated";
    setSearchResult({
      resultArray: [...result.data.results],
      genre_ids_movie: genresMovie,
      genre_ids_tv: genresTv,
      searchField: field,
      searchTerm: searchTerm,
      category: category.charAt(0).toUpperCase()+category.slice(1)+" Movies",
      error: true,
    });
  };

  console.log(searchResult.resultArray);

  return (
    <div>
      <Navbar onNavClick={SubmitFormHandler} />
      <SearchForm onSubmitForm={SubmitFormHandler} />
      {searchResult.resultArray.length === 0 && (
        <Error msg={searchResult.error} />
      )}
      {searchResult.resultArray.length > 0 && (
        <div className="container mt-5">
          {searchResult.searchField === "movie" && (
            <Movies
              key={searchResult.searchField}
              searchResults={searchResult.resultArray}
              genresMovie={searchResult.genre_ids_movie}
              searchTerm={searchResult.searchTerm || searchResult.category}
            />
          )}
          {searchResult.searchField === "tv" && (
            <TvShows
              key={searchResult.searchField}
              searchResults={searchResult.resultArray}
              genresTv={searchResult.genre_ids_tv}
              searchTerm={searchResult.searchTerm}
            />
          )}
          {searchResult.searchField === "person" && (
            <Person
              key={searchResult.searchField}
              searchResults={searchResult.resultArray}
              searchTerm={searchResult.searchTerm}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
