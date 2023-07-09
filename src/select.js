
export function Select(){
    return(
            <select className="font-mono text-white mt-[5%] ml-[45%] bg-indigo-400 h-10 w-26 rounded-md drop-shadow-lg mx-auto">
                <option value={""} className="bg-gray-200 text-gray-400">All</option>
                <option value={"Completed"} className="bg-gray-200 text-gray-400">Completed</option>
                <option value={"Incompleted"} className="bg-gray-200 text-gray-400">Incompleted</option>
            </select>
    );
}