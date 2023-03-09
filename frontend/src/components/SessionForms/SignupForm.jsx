import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SessionForm.css";
import { login, signup, clearSessionErrors } from "../../store/session";


function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [cycleLength, setCycleLength] = useState();
  const [periodLength, setPeriodLength] = useState();

  
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    let setState;

    switch (field) {
      case "email":
        setState = setEmail;
        break;
      case "username":
        setState = setUsername;
        break;
      case "password":
        setState = setPassword;
        break;
      case "password2":
        setState = setPassword2;
        break;
      case "cycleLength":
        setState = setCycleLength;
      case "bio":
        setState = setPeriodLength;


    }

    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("cycleLength", cycleLength);
    formData.append("periodLength", periodLength);
    dispatch(signup(formData));
  };

  const handleSubmitDemo = (e) => {
    e.preventDefault();
    dispatch(login({email: "demo-user@gmail.com", password: "starwars"}))
  }

  return (
    <div className="sign-up-container">
      <form className="session-form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <h1 className="form-header">Sign Up</h1>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={email}
              onChange={update("email")}
              placeholder="Email"
            />
          </label>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={username}
              onChange={update("username")}
              placeholder="Username"
            />
          </label>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={password}
              onChange={update("password")}
              placeholder="Password"
            />
          </label>
          <label className="confirm">
            <input
              type="password"
              autoComplete="off"
              value={password2}
              onChange={update("password2")}
              placeholder="Confirm Password"
            />
          </label>
          <div className="errors">
            {password !== password2 && "Confirm Password field must match"}
          </div>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={cycleLength}
              onChange={update("cycleLength")}
              placeholder="Cycle Length"
            />
          </label>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={periodLength}
              onChange={update("periodLength")}
              placeholder="Period Length"
            />
          </label>
          <div className="button-container">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
