import React, { useEffect, useState } from "react";
import styles from "./LoginPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FAKE_USER = {
  email: "omar@gmail.com",
  password: "123456",
};

export default function LoginPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      setIsSignedIn(true);
    else setIsSignedIn(false);
  }, [email, password]);

  const handleSignIn = (e) => {
    console.log(e);
    e.preventDefault();

    setClicked(true);
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setIsSignedIn(true);
      navigate("/HomePage");
    } else setIsSignedIn(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className={styles.login}>
      <img src="img/b_logo.png" className={styles.logo} alt="bitnine-logo" />
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email"
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Your Password"
            />
            <button
              className={styles["eye-btn"]}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className={styles.icon} />
              ) : (
                <FaEye className={styles.icon} />
              )}
            </button>
          </div>
        </div>
      </form>

      <p
        className={
          clicked && !isSignedIn && email.length >= 12 && password.length >= 6
            ? styles.error
            : styles.hide
        }
      >
        Invalid username or password
      </p>

      <div>
        <Link onClick={handleSignIn} className={styles.btn}>
          Login
        </Link>
      </div>
    </main>
  );
}
