import React from "react";
import * as Pages from "pages";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Pages.Artworks} />
      </Switch>
    </div>
  );
}

export default App;
