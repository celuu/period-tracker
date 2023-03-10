import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SessionForm.css";
import { login, signup, clearSessionErrors } from "../../store/session";


function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [periodLength, setPeriodLength] = useState("5");

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
        break;
      case "periodLength":
        setState = setPeriodLength;
        break;
      default:
        throw Error("Unknown field in Signup Form");
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
              type="password"
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
            Cycle Length
            <input
              type="number"
              autoFocus
              autoComplete="off"
              value={cycleLength}
              onChange={update("cycleLength")}
              placeholder="Cycle Length"
            />
          </label>

          <label>
            Period Length
            <input
              type="number"
              autoFocus
              autoComplete="off"
              value={periodLength}
              onChange={update("periodLength")}
              placeholder="Period Length"
            />
          </label>
        </div>
        <div className="signin-button-wrapper button-container">
          <button className="signup-submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
