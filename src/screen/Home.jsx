import { useState, useEffect } from "react";

export function HomeScreen() {
  const [timeValue, setTimeValue] = useState("12:00");
  const [inputValue, setInputValue] = useState();
  const todolist = JSON.parse(localStorage.getItem("todos")) || [];
  const [listOfToDo, setListOfToDo] = useState([...todolist]);
  const isDone = false;
  const handelAddTask = (e) => {
    e.preventDefault();
    const clickedButton = e.currentTarget;
    clickedButton.classList.add("scale-90");
    if (inputValue.trim() !== "") {
      const todoitem = {
        todoname: inputValue,
        todotime: timeValue,
        isDone,
      };
      listOfToDo.push(todoitem);
      localStorage.setItem("todos", JSON.stringify(listOfToDo));
      setInputValue("");
    }
    setTimeout(() => {
      if (clickedButton) {
        clickedButton.classList.remove("scale-90");
      }
    }, 100);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[400px] min-w-[318px] h-[80vh] max-h-fit p-[15px] bg-amber-50 text-black rounded-[20px]">
        {/* todo list */}
        <div className="max-h-[60%] rounded-[10px] p-1.5 capitalize overflow-scroll scrollbar-hide">
          {todolist.length > 0 ? (
            todolist.map((todo, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[rgb(196,222,242)] mb-1 p-2 rounded-lg shadow-md"
                >
                  <p className="text-gray-800 font-medium">{todo.todoname}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {todo.todotime}
                    </span>
                    <input type="checkbox" />
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center  mb-1 p-2 rounded-lg  shadow-md bg-[rgb(196,222,242)]">
              No tasks yet. Add one above!
            </p>
          )}
        </div>
        {/* input component of the todo list is here  */}
        <div className=" flex flex-col justify-center mt-[10px]">
          <div className="flex justify-evenly">
            <input
              type="text"
              placeholder="Enter Your Task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className=" focus:outline-none border-b-1 w-[60%] p-1.5 pb-0.5"
            />
            <input
              type="time"
              placeholder="HH:MM"
              value={timeValue}
              className="focus:outline-none border-b-1 w-fit text-[10px]  "
              onChange={(e) => setTimeValue(e.target.value)}
            />
          </div>
          <button
            className="shadow-lg bg-blue-300 w-[80%] m-auto mt-3 rounded-md h-[35px] ease-in-out "
            onClick={handelAddTask}
          >
            Add Task
          </button>
        </div>
        {/* input component end here  */}
      </div>
    </div>
  );
}
