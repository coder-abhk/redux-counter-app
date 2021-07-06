import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
