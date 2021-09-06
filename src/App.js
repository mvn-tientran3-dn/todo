import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import HeaderComponent from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import './App.scss';
import Index from "./pages";

function App() {
  return (
    <Router>
        <div className="container">
            <HeaderComponent/>
            <main>
                <Index/>
            </main>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
