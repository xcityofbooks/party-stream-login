import { useState } from "react";
import "../Styles-sheet/Login-Page.css";

export const LoginPage = () => {
  const allowedUsers = {
    user1: {
      username: "xcityofbooks",
      password: "esandkey",
    },
    user2: {
      username: "keystone",
      password: "suzume",
    },
  };

  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [userAllowed, SetUserAllowed] = useState(true);

  const handleUsername = (event) => {
    SetUsername(event.target.value);
  };

  const handlePassword = (event) => {
    SetPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isUserAllowed = Object.values(allowedUsers).some(
      (user) => user.username === username && user.password === password
    );

    SetUserAllowed(isUserAllowed);
  };

  return (
    <main className="section-container">
      <div className="inputs-container">
        {userAllowed ? (
          <div className="text-container">
            <h1 className="main-title">STREAM FOR FREE</h1>
            <h1>Here is where the party begins</h1>

            <form onSubmit={handleSubmit}>
              <div className="inputs">
                <div>
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsername}
                    required
                  />
                  <label htmlFor="">Username</label>
                </div>
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    required
                  />
                  <label htmlFor="">Password</label>
                </div>
              </div>
              <button className="login-btn" type="submit">
                Log in
              </button>
            </form>
          </div>
        ) : (
          <>
            <h1 className="subtitle">You're not allowed here</h1>
          </>
        )}
      </div>
    </main>
  );
};
