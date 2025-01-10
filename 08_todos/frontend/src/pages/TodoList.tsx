import React, { useState } from "react";
import { ITodoElement } from "../models/ITodoElement";
import "../styles/TodoList.css";
import TodoElement from "../components/TodoElement";

interface TodoListProps {
    todos: ITodoElement[];
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("name");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedTodos = filteredTodos.sort((a, b) => {
        if (sortOption === "name") {
            return a.title.localeCompare(b.title);
        } else if (sortOption === "date") {
            return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
        return 0;
    });

    const openTodos = sortedTodos.filter((todo) => !todo.isDone);
    const completedTodos = sortedTodos.filter((todo) => todo.isDone);

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="importance-header">
                <span className="importance irrelevant">Irrelevant</span>
                <span className="importance unimportant">Unimportant</span>
                <span className="importance important">Important</span>
                <span className="importance urgent">Urgent</span>
                <span className="importance critical">Critical</span>
            </div>
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select className="sort-select" value={sortOption} onChange={handleSortChange}>
                    <option value="name">Sort by: Name</option>
                    <option value="date">Sort by: Date</option>
                </select>
            </div>

            <div className="todo-columns">
                <div className="todo-column">
                    <h2>Open</h2>
                    {openTodos.map((todo) => (
                        <TodoElement
                            key={todo.id}
                            todo={todo}
                            onToggleComplete={onToggleComplete}
                            onDelete={onDelete}
                        />
                    ))}
                </div>

                <div className="todo-column">
                    <h2>Completed</h2>
                    {completedTodos.map((todo) => (
                        <TodoElement
                            key={todo.id}
                            todo={todo}
                            onToggleComplete={onToggleComplete}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;