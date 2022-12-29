import React from "react";
import "./App.css"; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import { useState } from "react";

function User(props) {
  return (
    <div className="user-card">
      <div>{props.user.name}</div>
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([{ id: 1, name: "react공부하기" }]);
  const [name, setName] = useState("");
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      name: name,
    };
    setUsers([...users, newUser]);
  };
  return (
    <>
      <div>
        <div className="app-container">
          <input
            placeholder="무엇을 추가할까요?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={addUserHandler}>추가하기</button>
        </div>
        <h1 className="title">Todo List</h1>
        <div className="cards">
          {users.map((user) => {
            return <User user={user} key={user.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
