import React, { useEffect, useState } from "react";
import CesiumComponent from "./components/main/main";
import SatelliteDashboard from "./components/satelliteDashboard/satelliteDashboard";
import ResourcePanel from "./components/resource/resourceMain";
import SatelliteList from "./components/left/satelliteList/index";
import { BrowserRouter, HashRouter, Link, Route, Routes, useParams } from "react-router-dom";
import { Dashboard } from "./types/type";
import "antd/dist/antd.min.css";
import Yewutaishi from "./components/yewutaishi/yewutaishi";

function App() {
  const [dashboardInfo, setDashboardInfo] = useState<Dashboard | undefined>(
    undefined
  );

   // 测试用按钮点击事件
   const changeDashboard = (type: "satellite" | "baseStation", id: string) => {
    setDashboardInfo({ type, id });
  };

  return (
    // 定义cesium页面在高方向和宽方向的尺寸，100vh/100vw说明是占满页面
    <div style={{ height: "100vh", width: "100vw" }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<CesiumComponent />}
          ></Route>
          <Route
            path="/satelliteDashboard/:type/:id"
            element={<SatelliteDashboard />}
          ></Route>
          <Route
            path="/123"
            element={<Yewutaishi />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
