import { connect } from "react-redux";
import { incrementHandler, decrementHandler } from "../redux/actions/actions";

const Main = ({ count, onIncrementHandler, onDecrementHandler }) => {
  return (
    <main className="main">
      <p className="count__wrapper">{count}</p>
      <div className="buttons">
        <div
          className="button"
          onClick={(e) => {
            e.preventDefault();
            onIncrementHandler();
          }}
        >
          <span>INCREMENT</span>
        </div>
        <div
          className="button"
          onClick={(e) => {
            e.preventDefault();
            onDecrementHandler();
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
    onIncrementHandler: () => dispatch(incrementHandler()),
    onDecrementHandler: () => dispatch(decrementHandler()),
  };
};

export default connect(mapStateToPops, mapDispatchToProps)(Main);
