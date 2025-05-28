import { useState } from "react";
import { CircleX, CircleCheckBig } from "lucide-react";

export function HomeScreen() {
  const [timeValue, setTimeValue] = useState("12:00");
  const [inputValue, setInputValue] = useState();
  const todolist = JSON.parse(localStorage.getItem("todos")) || [];
  const [listOfToDo, setListOfToDo] = useState([...todolist]);
  const isDone = false;
  const isdeleted = false;
  const updateLocal = () => {
    localStorage.setItem("todos", JSON.stringify(listOfToDo));
  };
  const handelAddTask = (e) => {
    e.preventDefault();
    const clickedButton = e.currentTarget;
    clickedButton.classList.add("scale-90");
    if (inputValue.trim() !== "") {
      const todoitem = {
        id: crypto.randomUUID(),
        todoname: inputValue,
        todotime: timeValue,
        isDone,
        isdeleted,
      };
      listOfToDo.push(todoitem);
      updateLocal();
      setInputValue("");
      setTimeValue("12:00");
    }
    setTimeout(() => {
      if (clickedButton) {
        clickedButton.classList.remove("scale-90");
      }
    }, 100);
  };

  const handleDoneFuction = (todoId) => {
    console.log("done");
    const newList = listOfToDo.map((todo) =>
      todo.id == todoId ? { ...todo, isDone: true } : todo
    );
    setListOfToDo(newList);
    updateLocal();
  };
  const handelDeleteFuntion = (todoId) => {
    console.log("deleted");
    const newList = listOfToDo.map((todo) =>
      todo.id == todoId ? { ...todo, isdeleted: true } : todo
    );
    setListOfToDo(newList);
    updateLocal();
  };
  const keypress = (e) => {
    if (e.key === "Enter") {
      handelAddTask(e);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen select-none">
      <div className="max-w-[400px] min-w-[318px] h-[80vh] max-h-fit p-[15px] bg-amber-50 text-black rounded-[20px]">
        {/* todo list */}
        <div className="max-h-[60%] rounded-[10px] p-1.5 capitalize overflow-scroll scrollbar-hide select-text ">
          {listOfToDo.length > 0 ? (
            listOfToDo.reverse().map((todo, index) => {
              return !todo.isDone && !todo.isdeleted ? (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[rgb(196,222,242)] tileHover mb-1 p-2 rounded-lg shadow-md"
                >
                  <p className="text-gray-800 font-medium w-[70%] wrap-break-word">
                    {todo.todoname}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {todo.todotime}
                    </span>

                    <CircleCheckBig
                      size={18}
                      color="green"
                      onClick={() => handleDoneFuction(todo.id)}
                    />
                    <CircleX
                      size={18}
                      color="red"
                      onClick={() => handelDeleteFuntion(todo.id)}
                    />
                  </div>
                </div>
              ) : null;
            })
          ) : (
            <p className="text-center mb-1 p-2 rounded-lg shadow-md bg-[rgb(196,222,242)]">
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
              onKeyPress={ keypress}
              className=" focus:outline-none border-b-1 w-[60%] p-1.5 pb-0.5"
            />
            <input
              type="time"
              placeholder="HH:MM"
              value={timeValue}
              onKeyPress={keypress}
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
