import "./App.css"; // Assuming you still want to use your CSS
import { LanguageProvider } from "./global/Language";
import LanguageSwitcher from "./common/LanguageSwitcher";
import HtmlTable from "./views/Htmltable";

function App() {
  return (
    <LanguageProvider>
      <header>
        <LanguageSwitcher />
      </header>

      <main>
        <HtmlTable />
      </main>
    </LanguageProvider>
  );
}

export default App;
