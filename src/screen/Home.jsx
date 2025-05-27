import { useState } from "react";

export function HomeScreen() {
    const [timeValue,setTimeValue]=useState("12:00");
    return (
        <div className="flex justify-center">
        <div className="max-w-[400px] min-w-[318px] h-fit max-h-[80vh] p-[15px] bg-amber-50 text-red-950 rounded-[20px]">
  <div className="max-h-[60%] rounded-[15px] bg-black overflow-scroll scrollbar-hide">
            </div>
            <form 
            className=" flex flex-col justify-center mt-[10px]"
            >
                <div className="flex justify-evenly">
            <input type="text" placeholder="Enter Your Task" className=" focus:outline-none border-b-1 w-[60%] p-1.5 pb-0.5" />
            <input type="time" 
            placeholder="HH:MM"
            value={timeValue} 
            className="focus:outline-none border-b-1 w-fit text-[10px]  " 
            onChange={(e)=>setTimeValue(e.target.value)}
            />
            </div>
            <button className="shadow-lg bg-blue-300 w-[80%] m-auto mt-3 rounded-md h-[35px] ease-in-out " 
             onClick={(e) => {
    e.currentTarget.classList.add('scale-90');
    setTimeout(() => e.currentTarget.classList.remove('scale-90'), 100);
  }}
  >Add Task</button>
            </form>
        </div>
        </div>
    );
}
