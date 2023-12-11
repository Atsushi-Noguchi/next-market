"use client";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // レスポンスの処理を実装する
  };

  return (
    <>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <label>
          名前:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
        <label>
          メールアドレス:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <button type="submit">登録</button>
      </form>
    </>
  );
};

export default Register;
