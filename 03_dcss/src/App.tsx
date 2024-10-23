import React, {useEffect, useState} from 'react';
import AppHeader from "./common/components/app-header/AppHeader";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import MovieOverview from "./views/movie-overview/MovieOverview";
import NewMovieWrapper from "./views/movie-details/routing-wrapper/NewMovieWrapper";
import EditMovieWrapper from "./views/movie-details/routing-wrapper/EditMovieWrapper";
import Home from "./views/home/Home";
import Axios from "axios"
import {Backdrop, CircularProgress, Grid2} from "@mui/material";
import ListValuesContextProvider from "./common/contexts/list-values-context/ListValuesContextProvider";
import {useStyles} from "./App.styles.ts";

function App() {
  const {classes} = useStyles()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    Axios.interceptors.response.use((config) => {
      setLoading(false)
      return config
    }, () => setLoading(false))

    Axios.interceptors.request.use((config) => {
      setLoading(true)
      return config
    }, () => setLoading(false))
  }, [])

  return (
    <Grid2 className={classes.root} container direction={"column"} alignItems={"center"}>
      {<Backdrop sx={{zIndex: 999}} open={loading}><CircularProgress/></Backdrop>}
      <BrowserRouter>
        <ListValuesContextProvider>
          <AppHeader/>

          <div className={classes.content}>
            <Routes>
              <Route path={"/movies/:id"} element={<EditMovieWrapper/>}/>
              <Route path={"/movies/new"} element={<NewMovieWrapper/>}/>
              <Route path={"/movies"} element={<MovieOverview/>}/>
              <Route path={"/"} element={<Home/>}/>
            </Routes>
          </div>
        </ListValuesContextProvider>
      </BrowserRouter>
    </Grid2>
  );
}

export default App;
