import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div>
      <div>Page 1 </div>
      <Link to="/pagetwo">Navigate to Page Two</Link>;
    </div>
  );
};

const Page2 = () => {
  return (
    <div>
      <Link to="/"> Navigate to Page One </Link>
      <div>Page 2</div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Page1} />
          <Route path="/pagetwo" component={Page2} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
