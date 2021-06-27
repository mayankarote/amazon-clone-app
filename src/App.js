import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [dispath] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>>>>", authUser);
      if (authUser) {
        // the user just logged in / the was logged in
        dispath({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispath({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
