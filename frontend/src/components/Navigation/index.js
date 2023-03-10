import './navigation.css'
import {
  openSigninModal,
  openSignupModal
} from "../../store/ui";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../../store/session"
import { useHistory } from "react-router-dom"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const Navigation = () => {
    const loggedIn = useSelector(state => !!state.session.user)
    const history = useHistory();
    
    
    const dispatch = useDispatch();
    const getLinks = () => {
        if (loggedIn){
            return (
              <div className="nav-bar">
                <h1 onClick={() => history.push("/")} className="title">
                  MyMonthly
                </h1>
                <div className="button-container-nav">
                  <AccountCircleIcon sx={{ color: "#301934" }} />
                  <button onClick={() => dispatch(logout())}>Log out</button>
                </div>
              </div>
            );
        } else {
            return (
              <div className="nav-bar">
                <h1 onClick={() => history.push("/")} className="title">
                  MyMonthly
                </h1>
                <div className="button-container-nav">
                  <button onClick={() => dispatch(openSignupModal())}>
                    Sign up
                  </button>
                  <button onClick={() => dispatch(openSigninModal())}>
                    Log In
                  </button>
                </div>
              </div>
            );
        }

    }

    return <>{getLinks()}</>;
}

export default Navigation;