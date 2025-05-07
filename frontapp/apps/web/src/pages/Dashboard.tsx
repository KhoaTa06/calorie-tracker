// import React from "react";
import Navbar from "../components/Navbar";
import { AuthorizeNavItems } from "../components/Constant";

function Dashboard() {
  return (
  <>
  <Navbar items={AuthorizeNavItems}/>
    <div>
        <div>Summary</div>
        <div>Calories</div>
        <div>Proteins</div>
        <div>Carbs</div>
        <div>Fats</div>
        <div>Steps</div>
        <div>Distance</div>
    </div>
  </>
  );
}

export default Dashboard;
