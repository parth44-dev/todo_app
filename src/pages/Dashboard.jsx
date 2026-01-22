import { useState } from "react";
import { useLocation } from "react-router-dom";

const DashboardPage = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const [editIndex, setEditIndex] = useState(null);
    const [editTask,setEditTask] = useState("");

    const location = useLocation();
    const loginData = location.state;


    const handelSubmit = (event) => {
        event.preventDefault();
        if (task !== "") {
            setTasks([...tasks, task])
            console.log(tasks)
            setTask("");
        }
    }

    const handelEdit = (index) =>{
        setEditIndex(index);
        setEditTask(tasks[index])
    }

    const handelUpdate = (event) =>{
        event.preventDefault();
        const updateTasks = tasks.map((task, index) => index === editIndex ? editTask : task );
        setTasks(updateTasks);
        setEditIndex(null);
        setEditTask("");
    }
    
    const handelDelete = (index) => { 
        const NewTaskList = tasks.filter((_, i) => i !== index); 
        setTasks(NewTaskList); 
    };
    return (
        <>
        <p>Email:{loginData?.email}</p>
        <p>Password:{loginData?.password}</p>
        <div className="dash-container">
            <div className="header_div">
                <span>To-Do List</span>
            </div>
            <div className="task-form">
                {editIndex === null? (
                    <form onSubmit={handelSubmit}>
                    <label htmlFor="task-input">Enter Task</label>
                    <input type="text" name="task-input" id="task-input" value={task} onChange={(event) => setTask(event.target.value)} />
                    <button type="submit">Add</button>
                </form>
                ):(
                    <form onSubmit={handelUpdate}>
                    <label htmlFor="task-input">Enter Task</label>
                    <input type="text" name="edit-input" id="edit-input" value={editTask} onChange={(event) => setEditTask(event.target.value)} />
                    <button type="submit">Update</button>
                </form>
                )
                }
                
            </div>
            <div className="task-view">
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <div key={index} className="task-item">
                            {task}
                            <div className="task-actions">
                                <button type="button" onClick={()=> handelEdit(index)}>Edit</button> 
                                <button type="button" onClick={()=> handelDelete(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default DashboardPage;