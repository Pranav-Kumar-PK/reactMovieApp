require("./Error.css");

const Error = (props) => {
  return (
    <div>
      {props.msg === true ? (
        <h4>Opps! Nothing found!</h4>
      ) : (
        <h4>Search for a Movie, Tv Show or Person...</h4>
      )}
    </div>
  );
};

export default Error;
