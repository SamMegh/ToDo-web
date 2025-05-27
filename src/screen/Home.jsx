import { useState } from "react";

export function HomeScreen() {
  const [timeValue, setTimeValue] = useState("12:00");
  const [inputValue, setInputValue] = useState();
  const [listOfToDo, setListOfToDo] = useState([]);

  const handelAddTask = (e) => {
    e.preventDefault();
    const clickedButton = e.currentTarget;
    clickedButton.classList.add("scale-90");
    if (inputValue.trim() !== "") {
      listOfToDo.push(inputValue);
      console.log(inputValue);
      setInputValue("");
      console.log(listOfToDo);
    }
    setTimeout(() => {
      if (clickedButton) {
        clickedButton.classList.remove("scale-90");
      }
    }, 100);
  };


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[400px] min-w-[318px] min-h-fit max-h-[80vh] p-[15px] bg-amber-50 text-black rounded-[20px]">
        {/* todo list */}
        <div className="max-h-[60%] rounded-[10px] p-1.5 capitalize bg-[rgb(196,222,242)] overflow-scroll scrollbar-hide">
                {listOfToDo.length > 0 ? ( // <--- ADDITION: Conditionally render a message if the list is empty
            [...listOfToDo].reverse().map((todo, index) => {
              return <p key={index} className="mb-1 border-1 p-2 bg-blue-100 rounded-2xl shadow-lg">{todo}</p>; // Added margin-bottom for spacing
            })
          ) : (
            <p className="text-gray-400 text-center">No tasks yet. Add one above!</p>
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
