// HtmlTable.tsx
import React from "react";
import { useHtmlTableStyles } from "./Table.styles";
import Cell from "./Cell";
import { useLanguage } from "../global/Language";

interface HtmlTableProps {
  rowCount: number;
  colCount: number;
  cellData: any;
  handleClick: (row: number, column: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const HtmlTable: React.FC<HtmlTableProps> = ({
  rowCount,
  colCount,
  cellData,
  handleClick,
  selectedColor,
  setSelectedColor,
}) => {
  const { texts, theme } = useLanguage();
  const { classes } = useHtmlTableStyles();

  const getColumnLetters = () => {
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
