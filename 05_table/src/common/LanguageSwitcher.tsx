import { useLanguage } from "../global/Language";

const LanguageSwitcher = () => {
  const { language, setLanguage, texts } = useLanguage();

  return (
    <div className="language-switcher">
      <p>{texts.greeting}</p>
      <button
        onClick={() => setLanguage("de")}
        className={language === "de" ? "active" : ""}
      >
        DE
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={language === "en" ? "active" : ""}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
