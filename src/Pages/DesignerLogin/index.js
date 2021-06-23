import { designerlogin } from "../../store/designer/actions";
import { selectDesignerToken } from "../../store/designer/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const DesignerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectDesignerToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/designer/homepage");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(designerlogin(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <section className="login designerbg">
      <form>
        <h1> Designer Log in</h1>
        <div>
          <label>E-mail :</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div>
          <label>Password :</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div>
          <button variant="primary" type="submit" onClick={submitForm}>
            Log in
          </button>
          <p>
            Become a member
            <Link to="/designer/signup" style={{ textAlign: "center" }}>
              sign up
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default DesignerLogin;
