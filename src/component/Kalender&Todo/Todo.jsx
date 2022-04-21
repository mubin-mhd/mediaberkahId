import React, { useState } from "react";
import TodoList from "./TodoList";
import { uid } from "uid";

function Todo() {
  const [formTodo, setFormTodo] = useState({
    agenda: "",
  });

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [deleteAll, setDeleteAll] = useState(false);

  const [todoList, setTodoList] = useState([]);

  const handleChangeTodo = (e) => {
    const target = e.target.value;
    setFormTodo({
      agenda: target,
    });
  };

  const handleSubmitTodo = (e) => {
    const data = [...todoList];
    e.preventDefault();
    if (formTodo.agenda === "") {
      return false;
    }

    if (data === "") {
      setDeleteAll(false);
    }

    if (isUpdate.status) {
      data.forEach((todos) => {
        if (todos.id === isUpdate.id) {
          todos.agenda = formTodo.agenda;
        }
      });
    } else {
      data.push({ id: uid(), agenda: formTodo.agenda });
    }
    setFormTodo({
      agenda: "",
    });
    setTodoList(data);
    setDeleteAll(true);
  };

  function handleEdit(id) {
    let data = [...todoList];
    let dataFound = data.find((hasil) => hasil.id === id);
    setFormTodo({ agenda: dataFound.agenda });
    setIsUpdate({ id: id, status: true });
  }

  const handleDeleteTodo = (id) => {
    const data = [...todoList];
    const coba = data.filter((todoo) => todoo.id !== id);
    setTodoList(coba);
  };

  const handleDeleteAll = () => {
    const data = [...todoList];
    const deletedTodo = data.filter((todoo) => todoo.id !== todoo.id);
    setTodoList(deletedTodo);
  };

  return (
    <div>
      <form className="flex mb-10" onSubmit={handleSubmitTodo}>
        <input
          type="text"
          className=" block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
          name="todoName"
          placeholder="Hari ini mau ngapain?"
          onChange={handleChangeTodo}
          value={formTodo.agenda}
        />

        <button
          type="submit"
          className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xl leading-tight uppercase rounded-r-md shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          +
        </button>
      </form>
      {deleteAll ? (
        <button
          onClick={handleDeleteAll}
          className="text-white text-sm rounded-md hover:font-semibold p-1 -mt-8 text-right mx-auto bg-red-500 block"
        >
          delete all
        </button>
      ) : (
        false
      )}

      <TodoList
        todoList={todoList}
        handleDeleteTodo={handleDeleteTodo}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Todo;
