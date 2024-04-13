import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login(e) {
    e.preventDefault();
    const baseUrl = "http://127.0.0.1:8000/";

    const url = baseUrl + "token/";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
      });
  }
  const navigate = useNavigate();
  return (
    <div className="">
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
      <button onClick={() => navigate("/books")}>books</button>
    </div>
  );
}

export default Login;
