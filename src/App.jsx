import React from "react";
import Header from "./ui-components/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-gray-50 text-xl ">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
