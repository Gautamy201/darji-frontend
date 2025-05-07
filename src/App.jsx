import React, { useState } from "react";
import Login from "./components/Login/Login";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import NewEntryPage from "./pages/NewEntryPage/NewEntryPage";
import EntryTemplate from "./components/EntryTemplate";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import ShowAllEntrysPage from "./pages/ShowAllEntrysPage/ShowAllEntrysPage";

const App = () => {
  const [islogedIn, setIsLogedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLogedIn={setIsLogedIn} />} />
        {/* protexcted routes */}
        <Route element={<ProtectedRoute islogedIn={islogedIn} />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/new-entry" element={<NewEntryPage />} />
          <Route path="/show-all-entry" element={<ShowAllEntrysPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
