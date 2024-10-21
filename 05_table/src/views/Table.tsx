// Table.tsx
import React, { useState } from "react";
import CellData from "../common/model/Cell.model";
import { useLanguage } from "../global/Language";
import HtmlTable from "./Htmltable";
import MaterialUITable from "./MaterialTable";

interface TableProps {
  rowCount: number;
  colCount: number;
  mode: "html" | "material";
}

const Table: React.FC<TableProps> = ({ rowCount, colCount, mode }) => {
  const { texts, theme } = useLanguage();
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

  const tableProps = {
    rowCount,
    colCount,
    cellData,
    handleClick,
    selectedColor,
    setSelectedColor,
  };

  return mode === "html" ? (
    <HtmlTable {...tableProps} />
  ) : (
    <MaterialUITable {...tableProps} />
  );
};

export default Table;
