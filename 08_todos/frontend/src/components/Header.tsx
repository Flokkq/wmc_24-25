import React from "react";
import "../styles/Header.css";

interface HeaderProps {
    onAddButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddButtonClick }) => {
    return (
        <header className="header">
            <h1 className="header-title">Reminders</h1>
            <button className="header-add-button" aria-label="Add New Todo" onClick={onAddButtonClick}>
                +
            </button>
        </header>
    );
};

export default Header;