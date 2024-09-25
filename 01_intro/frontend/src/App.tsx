import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./view/NotFound";
import WorkoutDashboard from "./view/dashboard/WorkoutDashboard";
import Layout from "./view/Layout";
import Home from "./view/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="workout" element={<WorkoutDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
