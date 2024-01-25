import { createGlobalStyle } from "styled-components";
import { MainContainer } from "./containers/main";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { createStore } from "redux";
import dashboard from "./redux/reducer/dashboard-reducer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const initialState = {
  dashboard: {
    users: [],
  },
};

function App() {
  const store = createStore(
    combineReducers({
      dashboard,
    }),
    initialState,
    applyMiddleware(thunk, logger)
  );

  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <MainContainer />
      </Provider>
    </div>
  );
}

export default App;
