import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { SidebarContex } from "./context";
import Auth from "./components/pages/auth/Auth";
import Form from "./components/pages/auth/Form";
import AuthForm from "./components/pages/auth/AuthForm";
import Fullstack from "./components/pages/fullstack/Fullstack";
import Home from "./components/pages/home/Home";
import RoadMap from "./components/pages/roadmap/RoadMap";
import Study from "./components/pages/study/Study";
import Blognav from "./components/pages/blognav/Blognav";
import Sidebar_Respon from "./components/organisms/sidebar_respon/Sidebar_Respon";
import Landing from "./components/pages/landing/Landing";

function App() {
  const [sbActive, setsbActive] = useState(false);
  const [auth, setAuth] = useState(0);

  return (
    <SidebarContex.Provider value={{ sbActive, setsbActive }}>
      <div>
        <Routes>
          <Route path="/login" element={<Auth auth={0} />}>
            <Route index element={<Form auth={0}/>} />
            <Route path="loginForm" element={<AuthForm auth={0} />} />
          </Route>
          <Route path="/signup" element={<Auth auth={1} />}>
            <Route index element={<Form auth={1}/>} />
            <Route path="signupForm" element={<AuthForm auth={1} />} />
          </Route>
          <Route path="/" element={<Fullstack />}>
            <Route index element={<Home />} />
            <Route path="roadmap" element={<RoadMap />} />
            <Route path="study" element={<Study />} />
            <Route path="blogs" element={<Blognav />} />
          </Route>
          <Route path="/landing" element={<Landing />}/>
        </Routes>
        <Sidebar_Respon />
      </div>
    </SidebarContex.Provider>
  );
}

export default App;
