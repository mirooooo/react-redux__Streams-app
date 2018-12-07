import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Page1 = () => {
  return <div>p1</div>;
};

const Page2 = () => {
  return <div>p2</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Page1} />
          <Route path="/p" component={Page2} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
