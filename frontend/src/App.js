import { Switch, Route, Redirect } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./components/SessionForms/LoginModal";
import SignupModal from "./components/SessionForms/SignupModal";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import { getCurrentUser } from "./store/session";


const App = () => {
  const currentUser = useSelector((store) => store.session.user);
  return (
    <>
      <Navigation />
      <LoginModal />
      <SignupModal />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
