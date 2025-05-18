// import React from "react";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

function Dashboard() {
  return (
  <>
  <SearchBar />
  <div className="container-fluid">
    <div className="row">
      <div className="col-2"><Navbar/></div>
        <div className="col">
          <div>
              <div>Summary</div>
              <div>Calories</div>
              <div>Proteins</div>
              <div>Carbs</div>
              <div>Fats</div>
              <div>Steps</div>
              <div>Distance</div>
          </div>
        </div>
    </div>
  </div>
    </>
  );
}

export default Dashboard;
