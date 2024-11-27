import { useState } from "react";
import "./App.css"; // Assuming you still want to use your CSS
import { LanguageProvider } from "./global/Language";
import LanguageSwitcher from "./common/LanguageSwitcher";
import Table from "./views/Table";

function App() {
    const [tableMode, setTableMode] = useState<"html" | "material">("html");

    const toggleTableMode = () => {
        setTableMode((prevMode) => (prevMode === "html" ? "material" : "html"));
    };

    return (
        <LanguageProvider>
            <header>
                <LanguageSwitcher />
            </header>

            <main>
                <div style={{ margin: "20px" }}>
                    <button onClick={toggleTableMode}>
                        {tableMode === "html"
                            ? "Switch to Material UI Table"
                            : "Switch to HTML Table"}
                    </button>
                </div>
                <Table rowCount={5} colCount={10} mode={tableMode} />
            </main>
        </LanguageProvider>
    );
}

export default App;
