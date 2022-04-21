import React from "react";

function TodoList({ todoList, handleDeleteTodo, handleEdit }) {
  return (
    <>
      {todoList.map(({ id, agenda }) => (
        <div className="w-full rounded-md items-center p-2 mt-3 flex justify-between shadow-sm shadow-white">
          <div className="flex justify-start items-center">
            <input type="checkbox" name="checktodo" />
            <h5 className="text-left text-lg ml-4 text-white font-semibold">
              {agenda}
            </h5>
          </div>
          <div className="flex items-center">
            <button onClick={() => handleEdit(id)} className="mr-4">
              <i className="bi bi-pencil-fill"></i>
            </button>
            <button onClick={() => handleDeleteTodo(id)}>
              <i className="bi bi-x text-2xl font-semibold"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
