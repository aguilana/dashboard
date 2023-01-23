import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <div className="dashboard__signup-container section__padding">
      <div className="dashboard__signup-card">
        {currentUser && JSON.stringify(currentUser.email)}
        <h2> Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <form className="dashboard__signup-card-form " onSubmit={handleSubmit}>
          <div className="dashboard__signup-card__input">
            <input
              type="text"
              ref={emailRef}
              placeholder="your email address"
            />
          </div>
          <div className="dashboard__signup-card__input">
            <input type="password" ref={passwordRef} placeholder="password" />
          </div>
          <div className="dashboard__signup-card__input">
            <input
              type="password"
              ref={passwordConfirmRef}
              placeholder=" re-type password"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="dashboard__signup-card__input-button"
          >
            {" "}
            Sign Up{" "}
          </button>
        </form>
        <div>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
