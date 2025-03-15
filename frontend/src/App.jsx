import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";
import { useState } from "react";
// import Footer from "./pages/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <div className="flex flex-col gap-[64px]">
        <main className="min-h-[78vh]">
          <Outlet context={[isOpen, setIsOpen]} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
