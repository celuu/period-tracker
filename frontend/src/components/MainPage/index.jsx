
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/session";
import "./MainPage.css";
import { openPeriodModal } from "../../store/ui";


const MainPage = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => !!state.session.user);
  const currentUser = useSelector((store) => store.session.user)
  let month = new Date().getMonth();
  let weekday = new Date().getDay();
  let day = new Date().getUTCDate();
  let year = new Date().getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])


  const getLinks = () => {
      if(loggedIn){
        return (
          <div className="main-info">

              <h1 className="username-main">{`hi ${currentUser.username}`}</h1>
            <h1>{`Today is ${weekdays[weekday]}, ${months[month]} ${day}, ${year} `}</h1>
            <div className="button-container log-period-container">
              <button
                onClick={() => dispatch(openPeriodModal())}
                className="log-period"
              >
                Log a Period
              </button>
            </div>
          </div>
        );
      } else {
        return(
          <>
          <h1>MyMonthly is an application that helps users know how to work with their body </h1>
          </>
        )
      }

  }
  
  
  return (
    <>
    {getLinks()}
      
    </>
  );
  

};

export default MainPage;
