// src/views/HighScores.tsx
import React, { useContext } from 'react';
import { Typography, Grid2, Paper, List, ListItem, ListItemText } from '@mui/material';
import {CalculatorContext} from "../global/calculator.ts";

const HighScores: React.FC = () => {
    const calculator = useContext(CalculatorContext)!;

    if (!calculator) {
        return <Typography>High scores are unavailable.</Typography>;
    }

    return (
        <Grid2 container direction="column" alignItems="center" spacing={2}>
            <Typography variant="h5" gutterBottom>
                High Scores
            </Typography>

            <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '400px' }}>
                <List>
                    {calculator.highScores.length === 0 ? (
                        <Typography>No high scores available</Typography>
                    ) : (
                        calculator.highScores.map((score, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={`${index + 1}. ${score.name}`} secondary={`Score: ${score.score}`} />
                            </ListItem>
                        ))
                    )}
                </List>
            </Paper>
        </Grid2>
    );
};

export default HighScores;
