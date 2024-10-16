import AppHeader from "./common/components/app-header/AppHeader";
import { useStyles } from "./App.styles";
import { Alert, Grid as Grid2, Slide, Snackbar } from "@mui/material";
import {
  typesMockData,
  flightsMockData,
  pilotsMockData,
} from "./common/mock-data";
import { useState } from "react";
import { Flight } from "./common/models/workout.model";
import { Pilot } from "./common/models/pilot.model";
import PilotGrid from "./views/pilot-grid/PilotGrid";
import FlightOverview from "./views/flight-overview/FlightOverview";
import FlightDetails from "./views/flight-details/FlightDetails";

export enum AppViews {
  Pilots = 1,
  FlightOverview,
  FlightDetails,
}

function App() {
  const [flights, setFlights] = useState<Flight[]>(flightsMockData);
  const [pilots, setPilots] = useState<Pilot[]>(pilotsMockData); // Add pilots data
  const { classes } = useStyles();
  const [selectedView, setSelectedView] = useState(AppViews.Pilots);

  const [selectedFlight, setSelectedFlight] = useState<Flight | undefined>(
    undefined,
  );

  const [selectedPilot, setSelectedPilot] = useState<Pilot | undefined>(
    undefined,
  );

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  /* lifted Funktions */
  const handleSelectPilot = (pilot: Pilot): void => {
    setSelectedPilot(pilot);
    setFlights(pilot.workouts);
    setSelectedView(AppViews.FlightOverview);
  };

  const handleDeleteFlight = (id: string): void => {
    const updated = flights.filter((flight) => flight.flightNumber !== id);
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
    setSelectedView(AppViews.Pilots);
    setIsSnackbarOpen(true);
  };

  const handleSaveFlight = (updatedFlight: Flight): void => {
    let updatedFlights;

    if (updatedFlight.flightNumber == null) {
      const flightNumber = Number(Math.random().toString().slice(2)).toString();
      updatedFlights = [...flights, { ...updatedFlight, flightNumber }];
    } else {
      updatedFlights = [...flights].map((flight) => {
        if (flight.flightNumber === updatedFlight.flightNumber) {
          return { ...updatedFlight };
        }
        return flight;
      });
    }

    setFlights(updatedFlights);
    handleBackToOverview();
  };

  const renderSelectedViews = (): React.ReactNode => {
    switch (selectedView) {
      case AppViews.Pilots:
        return <PilotGrid pilots={pilots} onSelectPilot={handleSelectPilot} />;
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
