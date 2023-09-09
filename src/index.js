import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./bootstrap.css";
import "./assets/css/fontawesome.min.css";
import './index.css';

import App from './App';
import MathCategory from './Routes/MathCategory';

import reportWebVitals from './reportWebVitals';
import Layout from "./Layout/Layout";
import MathGrades from "./Routes/MathGrades";
import UpToHundred from "./Routes/UpToHundred";
import Membership from "./Routes/Membership";
import LoginPage from "./Routes/LoginPage";
import UpToThree from "./Routes/UpToThree";
import UserAnalyze from "./Routes/UserAnalyze";
import UserHistory from "./Routes/UserHistory";

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Layout>
                <Routes>

                    <Route path="/" element={<App />} />
                    <Route path="/math-category" element={<MathCategory />} />
                    <Route path="/math-grades/:id" element={<MathGrades />} />
                    <Route path="/membership/" element={<Membership />} />
                    <Route path="/up-to-100" element={<UpToHundred />} />
                    <Route path="/up-to-three" element={<UpToThree />} />
                    <Route path="/analyze" element={<UserAnalyze />} />
                    <Route path="/history" element={<UserHistory />} />
                    <Route path="/Login" element={<LoginPage />} />

                </Routes>
            </Layout>
        </Router>
    </React.StrictMode>,
    root
);

reportWebVitals();
