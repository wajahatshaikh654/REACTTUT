import React from "react";
import "./App.css";
//import User from "./User";
function App() {
  // const students = ["Wajahat", "Kalyani", "Aniket", "Rajendra"];

  // students.map((item) => {
  //   console.log(item);
  // });

  const students = [
    { name: "wajahat", email: "w@gmail.com", mobile: 927272 },
    { name: "shaikh", email: "s@gmail.com", mobile: 111 },
    { name: "Kalyani", email: "K@gmail.com", mobile: 222 },
  ];

  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      {students.map((data) => 
        <h1>Name is : {data.name}, {data.email},{data.mobile}</h1>
      )}
    </div>
  );
}

export default App;
