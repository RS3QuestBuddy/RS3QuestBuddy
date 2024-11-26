import { Routes, Route, HashRouter, Navigate, Outlet } from "react-router-dom";
import { QuestPick } from "./../Pages/Quest Selection/QuestPicker";
import { QuestDetails } from "./../Pages/Quest Details/QuestDetails";
function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/">
            {/* Your default route */}
            <Route index element={<QuestPick />} />
          </Route>

          <Route path="/QuestDetails" element={<QuestDetails />} />
          <Route path="/*" element={<Navigate to="/" />} />
          {/* Navigate to the default route if no URL matched */}
        </Routes>
      </HashRouter>
      <Outlet />
    </>
  );
}

export default App;
