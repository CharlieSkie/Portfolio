import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
    <div className="container">
      <TopNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="layout">
        <Sidebar isOpen={sidebarOpen} />

        <main className={`content ${sidebarOpen ? "shifted" : ""}`}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
