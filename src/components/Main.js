import { connect } from "react-redux";

const Main = ({ count, incrementHandler, decrementHandler }) => {
  return (
    <main className="main">
      <p className="count__wrapper">{count}</p>
      <div className="buttons">
        <div
          className="button"
          onClick={(e) => {
            e.preventDefault();
            incrementHandler();
          }}
        >
          <span>INCREMENT</span>
        </div>
        <div
          className="button"
          onClick={(e) => {
            e.preventDefault();
            decrementHandler();
          }}
        >
          <span>DECREMENT</span>
        </div>
      </div>
    </main>
  );
};

const mapStateToPops = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementHandler: () => dispatch({ type: "INCREMENT" }),
    decrementHandler: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToPops, mapDispatchToProps)(Main);
