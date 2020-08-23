import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
     <div className="container">
          <Header></Header>
          <Dashboard></Dashboard>
          <Footer></Footer>
    </div>
  );
}

export default App;
