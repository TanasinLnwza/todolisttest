import React, { useState } from "react";
import "./TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEdit,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].text = editValue;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="TodoCon">
      <h1 className="TodoText">Todo List</h1>
      <div className="Addbar" style={{ margin: 60 }}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button
          className="BTadd"
          onClick={handleAddTodo}
          style={{ marginLeft: 6 }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {editIndex === index ? (
              <input 
                type="text"
                value={editValue}
                onChange={(event) => setEditValue(event.target.value)}
              />
            ) : (
              todo.text
            )}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
            />
            {editIndex === index ? (
              <button className="BTadd" onClick={handleUpdateTodo}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            ) : (
              <button className="BTadd" onClick={() => handleEditTodo(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}
            <button className="BTadd" onClick={() => handleRemoveTodo(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
