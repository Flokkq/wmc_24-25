import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from "./components/studentCard.tsx";
import { ITask } from "./models/ITask.ts";
import Task from "./components/task.tsx";

function App() {
    const [count, setCount] = useState(0);
    const tasksList: ITask[] = [{
        id: 1,
        title: "hello"
    },
    {
        id: 2,
        title: "djkalsfj"
    },
    {
        id: 3,
        title: "hello"
    },
    {
        id: 4,
        title: "hello"
    },
    {
        id: 5,
        title: "hello"
    },
    {
        id: 6,
        title: "hello"
    },
    ]

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => {
                return res.json();
            }).then((json) => {
                console.log(json);
                setTasks(JSON.parse(json));
            });

    }, [])

    const [tasks, setTasks] = useState(tasksList);

    function onRemoveReminder(id: number) {
        let filterTasks: ITask[] = [];
        setTasks(tasks.filter(item =>
            item.id != id))
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <StudentCard
                type="vite"
                info={`availability of native ES modules in the browser,
             vite serves source code over native ESM, 
             vite leverages HTTP headers to speed up full page reloads`}
            />

            <div>Tasks
                <Task tasks={tasks} onRemoveReminder={onRemoveReminder}></Task>
            </div>
        </>
    )
}

export default App
