import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        const userData = {
            uid: authUser?.user?.multiFactor?.user?.uid,
            email: authUser?.user?.multiFactor?.user?.email,
          }
        dispatch(
          login(userData)
        );
        console.log(authUser, "User Data: ", userData);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="email" name="email" />
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          name="password"
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen_gray">New to Netflix?</span>{" "}
          <span className="signInScreen_link" onClick={register}>
            {" "}
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
