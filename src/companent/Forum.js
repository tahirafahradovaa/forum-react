import React, { useState } from "react";

function Forum() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  const creditentials = {
    accountName: name,
    accountEmail: email,
    accountPassword: password,
  };
  const NameHead = () => {
    if (creditentials.accountName) {
      return (
        <h1>{creditentials.accountName.toLocaleUpperCase()} is logged in</h1>
      );
    } else {
      return <h1>Enter A User</h1>;
    }
  };

  return (
    <div>
      <div>
        <forum className="inputDiv" style={{ display: hide ? "none" : "flex" }}>
          <input
            onChange={(e) => setName(e.target.value)}
            type={"text"}
            placeholder="Enter a name"
          ></input>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            placeholder="Email"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder="Password"
          ></input>
          <button
            onClick={() => {
              setHide(true);
              NameHead();
            }}
          >
            Sign In
          </button>
        </forum>
      </div>
      <div style={{ display: hide ? "block" : "none" }} className="resultDiv">
        <NameHead></NameHead>
      </div>
    </div>
  );
}

export default Forum;
