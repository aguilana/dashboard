import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./signup.css";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)

  const { signup, currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
        setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className="dashboard__signup-container section__padding">
      <div className="dashboard__signup-card">
        <h2> Sign Up</h2>
        {error && alert(error)}
        <form className="dashboard__signup-card-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email"> Email </label>
            <input type="text" ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password"> Password </label>
            <input type="password" ref={passwordRef} />
          </div>
          <div>
            <label htmlFor="password-confirm"> Password Confirmation: </label>
            <input type="password" ref={passwordConfirmRef} />
          </div>
          <button disabled={loading} type="submit"> Sign Up </button>
        </form>
        <div>
          <p>Already have an account? Log In</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
