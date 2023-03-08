import './navigation.css'
import {
  openSigninModal,
  openSignupModal,
  openUserModal,
  openUploadModal,
} from "../../store/ui";
import { useDispatch, useSelector } from 'react-redux';


const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user)
 
    
    const dispatch = useDispatch();
    const getLinks = () => {
        // if (loggedIn){
        //     return(
        //         <h1>Sign Out</h1>
        //     )
        // } else {
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

export default Navigation;