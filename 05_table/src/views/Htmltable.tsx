import React, { useState } from "react";
import { useLanguage } from "../global/Language";
import CellData from "../common/model/Cell.model";
import { useHtmlTableStyles } from "./HtmlTable.styles";
import Cell from "./Cell";

interface HtmlTableProps {
  rowCount: number;
  colCount: number;
}

const HtmlTable: React.FC<HtmlTableProps> = ({ rowCount, colCount }) => {
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

  const getColumnLetters = () => {
    // Generate column headers as 'A', 'B', 'C', etc.
    return Array.from({ length: colCount }, (_, i) =>
      String.fromCharCode(65 + i),
    );
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
            {getColumnLetters().map((col) => (
              <th key={col} className={classes.tableHeader}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }, (_, rowIndex) => {
            const row = rowIndex + 1;
            return (
              <tr key={row}>
                <td className={classes.tableHeader}>{`${texts.row} ${row}`}</td>
                {getColumnLetters().map((col) => {
                  const cellKey = `${row}-${col}`;
                  return (
                    <Cell
                      key={cellKey}
                      row={row}
                      column={col}
                      cellKey={cellKey}
                      cellData={cellData}
                      handleClick={handleClick}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HtmlTable;
