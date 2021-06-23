import React, { useState, useEffect } from "react";

import { designersignUp } from "../../store/designer/actions";
import { selectDesignerToken } from "../../store/designer/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const DesignerSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [street, setStreet] = useState("");
  const [houseNo, setHoseNo] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [land, setLand] = useState("");
  const [bankaccount, setBankaccount] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectDesignerToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/designer/homepage");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    const adress = ` ${street}, ${houseNo}, ${postCode}, ${city}, ${land}`;
    console.log(adress);
    dispatch(designersignUp(name, email, password, adress, bankaccount));
    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <section className="signup designerbg">
      <form>
        <h1>Become a Designer</h1>
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
          <label>Bank</label>
          <input
            value={bankaccount}
            onChange={(event) =>
              setBankaccount(event.target.value.toUpperCase())
            }
            type="text"
            placeholder="Fill in you Bank IBAN"
            required
          />
        </div>
        <div>
          <h2>Address:</h2>
          <label>Street address</label>
          <input
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            type="text"
            placeholder="Enter Street Name"
            required
          />
        </div>
        <div className="half">
          <div>
            <label>House No.</label>
            <input
              value={houseNo}
              onChange={(event) => setHoseNo(event.target.value)}
              type="number"
              placeholder="Enter House NO."
              required
            />
          </div>
          <div>
            <label>Post Code</label>
            <input
              value={postCode}
              onChange={(event) =>
                setPostCode(event.target.value.toUpperCase())
              }
              type="text"
              placeholder="Enter postCode"
              required
            />
          </div>
        </div>
        <div className="half">
          <div>
            <label>City</label>
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              type="text"
              placeholder="Enter City Name"
              required
            />
          </div>
          <div>
            <label>Land</label>
            <input
              value={land}
              onChange={(event) => setLand(event.target.value)}
              type="email"
              placeholder="Enter Country Name"
              required
            />
          </div>
        </div>

        <div>
          <button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </button>
          <p>
            Are you a member?
            <Link to="/designer/login" style={{ textAlign: "center" }}>
              Log in
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default DesignerSignup;
