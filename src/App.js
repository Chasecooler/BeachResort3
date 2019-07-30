import React from "react";

import "./App.css";

import Home from "./pages/Home";

import Rooms from "./pages/Rooms";

import SingleRoom from "./pages/SingleRoom";

import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";



function App() {

  return (

    <>

      <Navbar />

      <Switch>

        <Route exact path="/" component={Home} />

        <Route exact path="/rooms/" component={Rooms} />

        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route component={Error} />

      </Switch>

    </>

  );

}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
