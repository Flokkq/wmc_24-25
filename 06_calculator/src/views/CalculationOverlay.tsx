import React, {useState} from 'react';
import {Alert, Grid2, Slide, Snackbar, Typography} from "@mui/material";
import Calculator from "./Calculator.tsx";

function CalculationOverlay() {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    return (
        <><Grid2 container direction="column" alignItems="center" spacing={3}>
            <Grid2>
                <Typography variant="h5" gutterBottom>
                    Rechentrainer
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Gleichung: (row * col) * 3
                </Typography>
            </Grid2>

            {/* Calculation Input */}
            <Grid2>
                <Calculator rowcount={3} colcount={3}/>
            </Grid2>
        </Grid2><Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            open={isSnackbarOpen}
            autoHideDuration={3000}
            TransitionComponent={Slide}
            onClose={() => setIsSnackbarOpen(false)}
        >
            <Alert onClose={() => setIsSnackbarOpen(false)} severity="success" variant="filled">
                Score saved!
            </Alert>
        </Snackbar></>
    );
}

export default CalculationOverlay;