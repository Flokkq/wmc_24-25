import { ReactNode, useState } from "react";
import { Calculation } from "./model/calcuation.model.ts";
import { Highscore } from "./model/high_score.model.ts";
import { CalculatorContext } from "../global/calculator.ts";

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
    const [calculations, setCalculations] = useState<Calculation[]>([])
    const [score, setScore] = useState<number>(0)

    const [highScores, setHighScores] = useState<Highscore[]>(() => {
        const savedScores = localStorage.getItem('highScores');
        return savedScores ? JSON.parse(savedScores) : [];
    });

    const addCalculation = (calculation: Calculation) => {
        setCalculations((prev) => [...prev, calculation]);
    }

    const updateScore = (points: number) => {
        setScore((prev) => prev + points);
    };

    const saveHighScore = (name: string) => {
        const newScore: Highscore = { name, score };
        const updatedScores = [...highScores, newScore].sort((a, b) => b.score - a.score).slice(0, 5);
        setHighScores(updatedScores);

        localStorage.setItem('highScores', JSON.stringify(updatedScores));
    }

    return (
        <CalculatorContext.Provider
            value={{
                calculations,
                score,
                highScores,
                addCalculation,
                updateScore,
                saveHighScore,
            }}
        >
            {children}
        </CalculatorContext.Provider>
    );
}
