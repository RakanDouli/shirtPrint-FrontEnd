import React, { useState, useEffect } from "react";

import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password));
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <section className="signup">
      <form>
        <h1>Become a Member</h1>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label>Email address</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div>
          <label>Password</label>
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
            Sign up
          </button>
          <p>
            Are you a member?
            <Link to="/user/login" style={{ textAlign: "center" }}>
              Log in
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default UserSignup;
