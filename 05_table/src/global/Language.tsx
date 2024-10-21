import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en";

interface Theme {
  colors: {
    green: string;
    red: string;
  };
}

interface LanguageContextType {
  language: Language;
  texts: (typeof texts)["de"];
  theme: Theme;
  setLanguage: (lang: Language) => void;
}

const texts = {
  de: {
    greeting: "Hallo",
    selectColor: "Wähle eine Farbe",
    green: "Grün",
    red: "Rot",
    clickCell: "Klicke auf eine Zelle",
    occupied: "ist besetzt. Wähle eine andere.",
    row: "Zeile",
    cellOccupied: "besetzt",
    cell: "Zelle",
  },
  en: {
    greeting: "Hello",
    selectColor: "Select a color",
    green: "Green",
    red: "Red",
    clickCell: "Click on a cell",
    occupied: "is occupied. Choose another.",
    row: "Row",
    cellOccupied: "occupied",
    cell: "Cell",
  },
};

const themes = {
  de: {
    colors: {
      green: "grün",
      red: "rot",
    },
  },
  en: {
    colors: {
      green: "green",
      red: "red",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("de");
  const value = {
    language,
    texts: texts[language],
    theme: themes[language],
    setLanguage,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
