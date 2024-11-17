import React, { useContext, useState } from 'react';
import {Button, Grid2, TextField, Typography} from '@mui/material';
import { CalculatorContext } from '../global/calculator';
import {Calculation} from "../common/model/calcuation.model.ts";

interface CalculatorProps {
    rowcount: number;
    colcount: number;
}
function Calculator(props: CalculatorProps) {
    const calculator = useContext(CalculatorContext)!;
    const [inputValues, setInputValues] = useState<{ [key: string]: number | '' }>({});

    const generateKey = (row: number, col: number) => `${row}-${col}`;

    const handleInputChange = (row: number, col: number, value: string) => {
        setInputValues((prev) => ({
            ...prev,
            [generateKey(row, col)]: value === '' ? '' : Number(value),
        }));
    };

    const handleCheckResults = () => {
        Object.keys(inputValues).forEach((key) => {
            const [row, col] = key.split('-').map(Number);
            const result = (row * col) * 3;
            const isCorrect = inputValues[key] === result;
            const calc: Calculation = { row, col, result, isCorrect };

            calculator.addCalculation(calc);
            calculator.updateScore(isCorrect ? 1 : 0);
            calculator.saveHighScore("KWIEH"); // macht keinen Sinn, KohlWeg Ist Ein Hurensohn
        });
    };

    return (
        <Grid2 container direction="column" alignItems="center" spacing={props.colcount}>
            <Grid2 container spacing={2}>
                {[...Array(props.rowcount)].map((_, row) => (
                    <Grid2 container key={row} direction="row" spacing={props.rowcount}>
                        {[...Array(props.colcount)].map((_, col) => {
                            const cellKey = generateKey(row, col);

                            return (
                                <Grid2 key={cellKey}>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        value={inputValues[cellKey] || ''}
                                        onChange={(e) => handleInputChange(row, col, e.target.value)}
                                        placeholder="?"
                                    />
                                </Grid2>
                            );
                        })}
                    </Grid2>
                ))}
            </Grid2>

            <Button variant="contained" color="primary" onClick={handleCheckResults}>
                Check Results
            </Button>
        </Grid2>
    );
}

export default Calculator;
