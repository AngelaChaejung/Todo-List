import "./App.css";
import { useState } from "react";
function Todo(props) {
  return (
    <div className="cards">
      <div>{props.list.title}</div>
    </div>
  );
}

function App() {
  let [list, setList] = useState([
    { id: 1, title: "react를 배워봅시다" },
    { id: 2, title: "시험을 봅시다" },
  ]);

  let addListHandler = () => {
    let newList = {
      id: list.length + 1,
      title: title,
    };
    setList([...list, newList]);
  };

  let [title, setTitle] = useState("");

  return (
    <>
      <div className="insertplace">
        <input
          value={title}
          placeholder="무엇을 할까요?"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addListHandler}>추가하기</button>
      </div>
      <h1 className="App">Todo List</h1>;
      <Todo />;
    </>
  );
}
export default App;
