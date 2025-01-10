import { useState } from 'react';
import './App.css';
import TodoList from "./pages/TodoList";
import { MockTodos } from "./assets/MockTodos";
import Header from "./components/Header";
import AddDialog from "./components/AddDialog";
import { ITodoElement } from "./models/ITodoElement";
import { ICategory } from "./models/ICategory";

const categories: ICategory[] = [
    { id: 1, categoryName: "Work", categoryDescription: "Work related tasks" },
    { id: 2, categoryName: "Personal", categoryDescription: "Personal tasks" },
    { id: 3, categoryName: "Shopping", categoryDescription: "Shopping list" },
];

function App() {
    const [todos, setTodos] = useState(MockTodos);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleToggleComplete = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const handleAddButtonClick = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleAddTodo = (newTodo: ITodoElement) => {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setIsDialogOpen(false);
    };

    return (
        <div>
            <Header onAddButtonClick={handleAddButtonClick} />
            <TodoList
                todos={todos}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDelete}
            />
            <AddDialog open={isDialogOpen} onClose={handleDialogClose} onAddTodo={handleAddTodo} categories={categories} />
        </div>
    );
}

export default App;