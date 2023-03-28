import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/about" element={<AboutContent />} />*/}
                {/*<Route path="/services" element={<ServicesContent />} />*/}
                {/*<Route path="/contact" element={<ContactContent />} />*/}
            </Routes>
        </MainLayout>
    );
};

export default App;