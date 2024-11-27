import React from "react";
import { CalculatorProvider } from "./common/CalculatorProvider.tsx";

import { Route, Routes } from "react-router-dom";
import CalculationOverlay from "./views/CalculationOverlay.tsx";
import HighScores from "./views/HighScores.tsx";
import Layout from "./views/Layout.tsx";

function App() {

    return (
        <CalculatorProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<CalculationOverlay />} />
                    <Route path="high-scores" element={<HighScores />} />
                </Route>
            </Routes>
        </CalculatorProvider>
    );
}

export default App;
