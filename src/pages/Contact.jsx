import React, { useState } from "react";

function Contact() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e) {
    e.preventDefault();
    if (username === "") {
      alert("username is empty");
      return;
    }
    if (password === "") {
      alert("password is empty");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      setLoading(false);
      alert("logged in successfully");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={submit} className="form-container">
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => {
            setUsername(e.target.value); //controlled form handling
          }}
          value={username}
          type="text"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
        />
        <input disabled={loading} type="submit" /> {loading && "loading....."}
      </form>
    </div>
  );
}

export default Contact;