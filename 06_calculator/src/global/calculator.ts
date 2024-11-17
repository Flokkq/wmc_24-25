import {createContext} from "react";
import {Calculation} from "../common/model/calcuation.model.ts";
import {Highscore} from "../common/model/high_score.model.ts";

interface CalculatorContextType {
    calculations: Calculation[];
    score: number;
    highScores: { name: string; score: number }[];
    addCalculation: (calc: Calculation) => void;
    updateScore: (points: number) => void;
    saveHighScore: (name: string) => void;
}
export const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);