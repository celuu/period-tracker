import { Switch, Route, Redirect } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./components/SessionForms/LoginModal";
import SignupModal from "./components/SessionForms/SignupModal";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import { getCurrentUser } from "./store/session";
import CreatePeriodModal from "./components/CreatePeriod/CreatePeriodModal";


const App = () => {
    const [loaded, setLoaded] = useState(false);
    const currentUser = useSelector((store) => store.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCurrentUser()).then(() => setLoaded(true));
    }, [dispatch]);

  return (
    loaded && (
      <>
        <Navigation />
        <LoginModal />
        <CreatePeriodModal />
        <SignupModal />

        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </>
    )
  );
};

export default App;
