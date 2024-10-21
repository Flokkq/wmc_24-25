import React from "react";
import { useLanguage } from "../global/Language";
import { useHtmlTableStyles } from "./Table.styles";

interface CellProps {
  row: number;
  column: string;
  cellKey: string;
  cellData: { [key: string]: { color: string; occupied: boolean } };
  handleClick: (row: number, column: string) => void;
}

const Cell: React.FC<CellProps> = ({
  row,
  column,
  cellKey,
  cellData,
  handleClick,
}) => {
  const { texts } = useLanguage();
  const { classes } = useHtmlTableStyles();

  const getCellText = () => {
    const cell = cellData[cellKey];
    if (cell && cell.occupied) {
      return `${texts.row} ${row}-${column} (${texts.cellOccupied})`;
    }
    return "";
  };

  return (
    <td
      onClick={() => handleClick(row, column)}
      className={classes.tableCell}
      style={{
        backgroundColor: cellData[cellKey]?.color || "transparent",
        width: "150px",
      }}
    >
      {getCellText()}
    </td>
  );
};

export default Cell;
