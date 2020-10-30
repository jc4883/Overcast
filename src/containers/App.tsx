import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux/configureStore";

import SplashPage from "components/SplashPage";
import MainPage from "containers/MainPage";

export const store = configureStore();

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/episodes" component={MainPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
