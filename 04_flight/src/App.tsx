import AppHeader from "./common/components/app-header/AppHeader";
import { useStyles } from "./App.styles.ts";
import { Alert, Grid2, Slide, Snackbar } from "@mui/material";
import { typesMockData, flightsMockData } from "./common/mock-data";
import { useState } from "react";
import { Flight } from "./common/models/workout.model.ts";
import FlightOverview from "./views/flight-overview/FlightOverview.tsx";
import { ReactNode } from "react";
import FlightDetails from "./views/flight-details/FlightDetails.tsx";

export enum AppViews {
  FlightOverview = 1,
  FlightDetails,
}

function App() {
  const [flights, setFlights] = useState<Flight[]>(flightsMockData);
  const { classes } = useStyles();
  const [selectedView, setSelectedView] = useState(AppViews.FlightOverview);

  const [selectedFlight, setSelectedFlight] = useState<Flight | undefined>(
    undefined,
  );

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  /* lifted Funktions */
  const handleDeleteFlight = (id: number): void => {
    const updated = flights.filter((flight) => flight.id !== id);
    setFlights(updated);
  };

  const handleOpenDetails = (flight?: Flight): void => {
    if (flight != null) {
      setSelectedFlight(flight);
    }

    setSelectedView(AppViews.FlightDetails);
  };

  const handleBackToOverview = (): void => {
    setSelectedFlight(undefined);
    setSelectedView(AppViews.FlightOverview);
    setIsSnackbarOpen(true);
  };

  const handleSaveFlight = (updatedFlight: Flight): void => {
    console.log(updatedFlight);
    let updatedFlights;

    if (updatedFlight.id == null) {
      const id = Number(Math.random().toString().slice(2));
      updatedFlights = [...flights, { ...updatedFlight, id }];
    } else {
      updatedFlights = [...flights].map((flight) => {
        if (flight.id === updatedFlight.id) {
          return { ...updatedFlight };
        }
        return flight;
      });
    }

    setFlights(updatedFlights);
    handleBackToOverview();
    //setIsSnackbarOpen(true)
  };

  const renderSelectedViews = (): ReactNode => {
    switch (selectedView) {
      case AppViews.FlightOverview:
        return (
          <>
            <h1>Flights</h1>
            <FlightOverview
              flights={flights}
              onChange={(updated) => {
                setFlights(updated);
              }}
              onDeleteFlight={handleDeleteFlight}
              onOpenDetails={handleOpenDetails}
            />
          </>
        );
      case AppViews.FlightDetails:
        return (
          <>
            {" "}
            {console.log("bin in Details")}
            <FlightDetails
              flight={selectedFlight}
              genres={typesMockData}
              onSave={handleSaveFlight}
              onCancel={handleBackToOverview}
            />
          </>
        );
    }
  };

  return (
    <Grid2
      className={classes.root}
      container
      direction={"column"}
      alignItems={"center"}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isSnackbarOpen}
        autoHideDuration={3000}
        TransitionComponent={Slide}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setIsSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Flight successfully saved
        </Alert>
      </Snackbar>

      <AppHeader onclick={handleBackToOverview} />
      <div className={classes.content}>{renderSelectedViews()}</div>
    </Grid2>
  );
}

export default App;
