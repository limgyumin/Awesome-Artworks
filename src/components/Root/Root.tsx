import React from "react";
import * as Pages from "pages";
import { Route, Switch } from "react-router-dom";
import Header from "components/common/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Pages.Artworks} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
