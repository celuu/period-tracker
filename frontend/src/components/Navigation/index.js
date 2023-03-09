import './navigation.css'
import {
  openSigninModal,
  openSignupModal,
  openUserModal,
  openUploadModal,
} from "../../store/ui";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../../store/session"


const Navigation = () => {
    const loggedIn = useSelector(state => !!state.session.user)

 
    
    const dispatch = useDispatch();
    const getLinks = () => {
        if (loggedIn){
            return(
                <button onClick={() => dispatch(logout())}>Sign Out</button>
            )
        } else {
            return (
              <div className="nav-bar">
                <div className='button-container-nav'>
                  <button onClick={() => dispatch(openSignupModal())}>
                    Sign up
                  </button>
                  <button onClick={() => dispatch(openSigninModal())}>
                    Log In
                  </button>
                </div>
              </div>
            );
        // }

    }

    return <>{getLinks()}</>;
  }
}

export default Navigation;