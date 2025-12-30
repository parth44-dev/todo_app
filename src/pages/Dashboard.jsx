import { useState } from "react";

const DashboardPage = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handelSubmit = (event) => {
        event.preventDefault();
        if (task !== "") {
            setTasks([...tasks, task])
            console.log(tasks)
            setTask("");
        }
    }
    const handelDelete = (index) => { 
        const NewTaskList = tasks.filter((_, i) => i !== index); 
        setTasks(NewTaskList); 
    };
    return (
        <div className="dash-container">
            <div className="header_div">
                <span>To-Do List</span>
            </div>
            <div className="task-form">
                <form onSubmit={handelSubmit}>
                    <label htmlFor="task-input">Enter Task</label>
                    <input type="text" name="task-input" id="task-input" value={task} onChange={(event) => setTask(event.target.value)} />
                    <button type="submit">Add</button>
                </form>
            </div>
            <div className="task-view">
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <div key={index} className="task-item">
                            {task}
                            <div className="task-actions">
                                <button type="button">Edit</button> 
                                <button type="button" onClick={()=> handelDelete(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default DashboardPage;