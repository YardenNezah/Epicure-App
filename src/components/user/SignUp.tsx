import { Fragment, useEffect, useState } from "react";
import Input from "../layout/form/Input";
import "./User.scss";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SubmitButton from "../layout/button/SubmitButton";
import axios from "axios";
const SignUp = () => {
  const [usernameInputs, setUsernameInputs] = useState();
  const [firstnameInputs, setFirstnameInputs] = useState();
  const [lastnameInputs, setLastnameInputs] = useState();
  const [passwordInputs, setPasswordInputs] = useState();

  const [feedback, setFeedback] = useState("");

  const handleChangeUsername = (e: any) => {
    setUsernameInputs(e.target.value);
  };
  const handleChangeFirstname = (e: any) => {
    setFirstnameInputs(e.target.value);
  };
  const handleChangeLastname = (e: any) => {
    setLastnameInputs(e.target.value);
  };
  const handleChangePassword = (e: any) => {
    setPasswordInputs(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/auth/signup", {
        username: usernameInputs,
        password: passwordInputs,
        firstName: firstnameInputs,
        lastName: lastnameInputs,
      });
      console.log(result);
      if (result.data.token) localStorage.setItem("token", result.data.token);
      setFeedback("Signed up successfuly");
    } catch (err: any) {
      setFeedback(err.response.data || "Network error. try again");
    }
  };

  const isLoggedIn = async () => {
    const token: any = localStorage.getItem("token");
    try {
      const result = await axios.get("http://localhost:8080/auth", {
        headers: {
          "auth-token": token,
        },
      });
    } catch (err) {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) isLoggedIn();
  }, []);

  return (
    <Fragment>
      <Header />
      <form>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p>
        <Input
          content={"First Name "}
          placeholder={"Please Enter Your First Name"}
          type={"text"}
          onChange={(e: any) => handleChangeFirstname(e)}
          value={firstnameInputs}
          minLength={2}
          maxLength={10}
        ></Input>
        <Input
          content={"Last Name "}
          placeholder={"Please Enter Your Last Name"}
          type={"text"}
          onChange={(e: any) => handleChangeLastname(e)}
          value={lastnameInputs}
          minLength={2}
          maxLength={10}
        ></Input>
        <Input
          content={"Username "}
          placeholder={"Please Enter Your Username"}
          type={"text"}
          onChange={(e: any) => handleChangeUsername(e)}
          value={usernameInputs}
          minLength={2}
          maxLength={15}
        ></Input>
        <Input
          content={"Password "}
          placeholder={"Please Enter Your Password"}
          type={"password"}
          onChange={(e: any) => handleChangePassword(e)}
          value={passwordInputs}
          minLength={6}
          maxLength={10}
        ></Input>
        <SubmitButton onClick={(e: any) => handleSubmit(e)} />
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
        <b>{feedback}</b>
      </form>
      <Footer />
    </Fragment>
  );
};

export default SignUp;
