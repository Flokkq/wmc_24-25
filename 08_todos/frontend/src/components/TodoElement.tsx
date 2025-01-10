import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { ITodoElement } from "../models/ITodoElement";
import "../styles/TodoElement.css";

interface TodoElementProps {
    todo: ITodoElement;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoElement: React.FC<TodoElementProps> = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <div className={`todo-element ${todo.isDone ? "completed" : "open"}`} style={{ borderColor: todo.importance }}>
            <input
                type="radio"
                checked={todo.isDone}
                onChange={() => onToggleComplete(todo.id)}
                className={`todo-checkbox ${todo.importance.toLowerCase()}`}
                aria-label="Mark as completed"
            />
            <div className="todo-content">
                <h3 className="todo-title">{todo.title}</h3>
                <p className="todo-description">{todo.description}</p>
            </div>
            <div className="todo-meta">
                <span className="todo-due-date">{todo.dueDate}</span>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="todo-delete-button"
                    aria-label="Delete todo"
                >
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default TodoElement;