import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/customButton";
import Todo from "./components/Todo";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Java Script 공부하기",
      body: "혼공스 chapter7",
      isDone: true,
    },
    {
      id: 2,
      title: "운동하기",
      body: "9시부터 10시까지 빡시게 운동",
      isDone: false,
    },
    {
      id: 3,
      title: "세탁기돌리기",
      body: "빨래 돌리고 널기",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  console.log(todoList);
  const addListHandler = () => {
    console.log("1234");
    const newList = {
      id: todoList.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setTodoList([...todoList, newList]);
  };
  const deleteListHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const completeListHandler = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodoList(newTodoList);
  };
  return (
    <div>
      <div className="title-style">
        My To do List <p className="react"> React </p>
      </div>
      <div className="header-style">
        제목
        <input
          className="jemok"
          value={title}
          placeholder="제목을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
          onChange={(e) => setTitle(e.target.value)}
        />
        내용
        <input
          value={body}
          placeholder="내용을 입력해주세요"
          // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
          onChange={(e) => setBody(e.target.value)}
        />
        <CustomButton color="rgb(93, 39, 0)" onClick={addListHandler}>
          추가하기
        </CustomButton>
      </div>
      <p className="jinhaeng">진행중🔨🔨🔨</p>
      <div className="app-style">
        {todoList.map((todo) => {
          if (todo.isDone === false) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodoList={setTodoList}
                addListHandler={addListHandler}
                deleteListHandler={deleteListHandler}
                completeListHandler={completeListHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <p className="wanryo">🎊 완료 🎊</p>
      <div className="app-style">
        {todoList.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodoList={setTodoList}
                deleteListHandler={deleteListHandler}
                completeListHandler={completeListHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default App;
