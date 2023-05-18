import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </div>
 
  );
}

export default App;
