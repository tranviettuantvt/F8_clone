import "./App.css";
import Headerr from "./components/header/Headerr";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { Col, Row } from "antd";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import RoadMap from "./pages/roadmap/RoadMap";
function App() {
  return (
    <div>
      <Headerr />
      <Row style={{marginLeft:"0.5rem"}}>
        <Col span={1}>
          <Sidebar />
        </Col>
        <Col span={23}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<RoadMap />} />
          </Routes>
        </Col>
      </Row>
      <Footer/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
