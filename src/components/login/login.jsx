import React from "react";
import "./login.scss";
import API from "../../api/API";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    await API.post("/users/login", user)
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        window.location.href = "/admin";
      })
      .catch((error) => {
        // console.log("error->" + error);
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        alert(message);
      });
  };
  return (
    <div class="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div class="content">
          <div class="input-field">
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" autocomplete="nope" />
          </div>
          <div class="input-field">
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" autocomplete="new-password" />
          </div>
          {/* <a href="/login" class="link">
            Forgot Your Password?
          </a> */}
        </div>
        <div class="action">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
