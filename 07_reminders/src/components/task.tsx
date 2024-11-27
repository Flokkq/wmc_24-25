import { ITask } from "../models/ITask.ts";
import { useState } from "react";


interface ReminderList {
    tasks: ITask[]
    onRemoveReminder: (id: number) => void
}


function Task(props: ReminderList) {
    const [tasks, setTasks] = useState();
    return (
        <div>
            {
                props.tasks.map(task => (
                    <div>
                        <li key={task.id}></li>
                        <button onClick={() => props.onRemoveReminder(task.id)}></button>
                    </div>
                ))
            }
        </div>
    );
}

export default Task;
