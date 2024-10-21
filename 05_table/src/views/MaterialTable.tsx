// MaterialUITable.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { useLanguage } from "../global/Language";

interface MaterialUITableProps {
  rowCount: number;
  colCount: number;
  cellData: any;
  handleClick: (row: number, column: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const MaterialUITable: React.FC<MaterialUITableProps> = ({
  rowCount,
  colCount,
  cellData,
  handleClick,
  selectedColor,
  setSelectedColor,
}) => {
  const { texts, theme } = useLanguage();

  const getColumnLetters = () => {
    return Array.from({ length: colCount }, (_, i) =>
      String.fromCharCode(65 + i),
    );
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={() => setSelectedColor(theme.colors.green)}
        >
          {texts.green}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setSelectedColor(theme.colors.red)}
        >
          {texts.red}
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {getColumnLetters().map((col) => (
              <TableCell key={col}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: rowCount }, (_, rowIndex) => {
            const row = rowIndex + 1;
            return (
              <TableRow key={row}>
                <TableCell>{`${texts.row} ${row}`}</TableCell>
                {getColumnLetters().map((col) => {
                  const cellKey = `${row}-${col}`;
                  return (
                    <TableCell
                      key={cellKey}
                      onClick={() => handleClick(row, col)}
                      style={{
                        backgroundColor:
                          cellData[cellKey]?.color || "transparent",
                      }}
                    >
                      {cellData[cellKey]?.occupied ? texts.cellOccupied : ""}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default MaterialUITable;
