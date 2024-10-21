import { makeStyles } from "tss-react/mui";

export const useHtmlTableStyles = makeStyles()(() => ({
  tableContainer: {
    padding: "20px",
  },
  colorButtons: {
    marginBottom: "10px",
  },
  button: {
    padding: "8px 16px",
    marginRight: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  greenButton: {
    backgroundColor: "green",
    color: "white",
  },
  redButton: {
    backgroundColor: "red",
    color: "white",
  },
  styledTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    padding: "12px",
    textAlign: "center",
    border: "1px solid #ddd",
    fontWeight: "bold",
  },
  tableCell: {
    padding: "12px",
    textAlign: "center",
    border: "1px solid #ddd",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
}));

export const useLanguageSwitcherStyles = makeStyles()(() => ({
  languageSwitcher: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  switcherButton: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#f0f0f0",
  },
  activeButton: {
    backgroundColor: "#007bff",
    color: "white",
  },
  greeting: {
    margin: "0",
  },
}));
