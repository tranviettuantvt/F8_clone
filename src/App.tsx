import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { useState } from "react";
import Login from "./pages/login/Login";
import RoadMap from "./pages/roadmap/RoadMap";
import Blognav from "./pages/blognav/Blognav";
import Study from "./pages/study/Study";
import Fullstack from "./pages/fullstack/Fullstack";
import Sidebar_Respon from "./components/sidebar_respon/Sidebar_Respon";
import { SidebarContex } from "./context";
function App() {
  const [sbActive, setsbActive] = useState(false);

  return (
    <SidebarContex.Provider value={{sbActive, setsbActive}}>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Fullstack />}>
            <Route index element={<Home />} />
            <Route path="roadmap" element={<RoadMap />} />
            <Route path="study" element={<Study />} />
            <Route path="blogs" element={<Blognav />} />
          </Route>
        </Routes>
        <Sidebar_Respon />
      </div>
    </SidebarContex.Provider>
  );
}

export default App;
