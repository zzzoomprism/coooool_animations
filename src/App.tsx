import React from "react";
import { HashRouter } from "react-router-dom";
import Content from "./Content";

const App: React.FC<any> = () => {
  return (
    <div>
      <HashRouter>
        <Content />
      </HashRouter>
    </div>
  );
};

export default App;
