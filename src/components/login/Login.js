import React, { useRef, useState } from "react";
import "./login.css";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Card } from "react-bootstrap";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { login, currentUser } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      console.log("error message: ", err);
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="dashboard__signup-container section__padding">
      <div className="dashboard__signup-card">
        {currentUser && JSON.stringify(currentUser.email)}
        <Card>
          <Card.Body>
            <h2> Log In </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form
              className="dashboard__signup-card-form "
              onSubmit={handleSubmit}
            >
              <div className="dashboard__signup-card__input">
                <input
                  type="text"
                  ref={emailRef}
                  placeholder="your email address"
                />
              </div>
              <div className="dashboard__signup-card__input">
                <input
                  type="password"
                  ref={passwordRef}
                  placeholder="password"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="dashboard__signup-card__input-button"
              >
                Log In
              </button>
            </form>
            <div>
              <p>
                Need an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
