import React, { useState } from "react";
import { useLanguage } from "../global/Language";
import CellData from "../common/model/Cell.model";
import { useHtmlTableStyles } from "./HtmlTable.styles"; // Import the styles

const HtmlTable = () => {
  const { texts, theme } = useLanguage();
  const { classes } = useHtmlTableStyles();
  const [cellData, setCellData] = useState<{
    [key: string]: Omit<CellData, "text">;
  }>({});
  const [selectedColor, setSelectedColor] = useState<string>(
    theme.colors.green,
  );

  const handleClick = (row: number, column: string) => {
    const cellKey = `${row}-${column}`;
    if (cellData[cellKey]?.occupied) {
      alert(`${texts.cell} ${cellKey} ${texts.occupied}`);
      return;
    }
    setCellData((prevState) => ({
      ...prevState,
      [cellKey]: {
        row,
        column,
        color: selectedColor,
        occupied: true,
      },
    }));
  };

  const getCellText = (row: number, column: string) => {
    const cellKey = `${row}-${column}`;
    const cell = cellData[cellKey];
    if (cell && cell.occupied) {
      return `${texts.row} ${row}-${column} (${texts.cellOccupied})`;
    }
    return "";
  };

  return (
    <div className={classes.tableContainer}>
      <div className={classes.colorButtons}>
        <button
          className={`${classes.button} ${classes.greenButton}`}
          onClick={() => setSelectedColor(theme.colors.green)}
        >
          {texts.green}
        </button>
        <button
          className={`${classes.button} ${classes.redButton}`}
          onClick={() => setSelectedColor(theme.colors.red)}
        >
          {texts.red}
        </button>
      </div>
      <table className={classes.styledTable}>
        <thead>
          <tr>
            <th className={classes.tableHeader}></th>
            <th className={classes.tableHeader}>A</th>
            <th className={classes.tableHeader}>B</th>
            <th className={classes.tableHeader}>C</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((row) => (
            <tr key={row}>
              <td className={classes.tableHeader}>{`${texts.row} ${row}`}</td>
              {["A", "B", "C"].map((col) => (
                <td
                  key={`${row}-${col}`}
                  onClick={() => handleClick(row, col)}
                  className={classes.tableCell}
                  style={{
                    backgroundColor:
                      cellData[`${row}-${col}`]?.color || "transparent",
                  }}
                >
                  {getCellText(row, col)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HtmlTable;
