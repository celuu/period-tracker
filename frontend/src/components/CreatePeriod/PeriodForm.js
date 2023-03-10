import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEvent } from "../../store/event";
import "./period.css"
import { clearSessionErrors } from "../../store/session";


function PeriodForm() {
  const [date, setDate] = useState(new Date());
  const [typeOfEvent, setTypeOfEvent] = useState("");
  const [notes, setNotes] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearSessionErrors());
    };
  }, [dispatch]);

  const update = (field) => {
    let setState;

    switch (field) {
      case "date":
        setState = setDate;
        break;
      case "typeOfEvent":
        setState = setTypeOfEvent;
        break;
      case "notes":
        setState = setNotes;
        break;
    }

    return (e) => setState(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("date", date);
    formData.append("typeOfEvent", typeOfEvent);
    formData.append("notes", notes);
    dispatch(createEvent(formData));
  };

  return (
    <div className="sign-up-container">
      <form className="session-form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <h1 className="form-header">Log an Event</h1>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={date}
              onChange={update("date")}
              placeholder="Date"
            />
          </label>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={typeOfEvent}
              onChange={update("typeOfEvent")}
              placeholder="Type"
            />
          </label>
          <label>
            <input
              type="text"
              autoFocus
              autoComplete="off"
              value={notes}
              onChange={update("notes")}
              placeholder="Notes"
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

export default PeriodForm;
