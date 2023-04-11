import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import {ConfigProvider, theme} from "antd";

const App = () => {
    const [currentTheme] = React.useState('dark');
    const darkTheme = {
        token: {
            algorithm: theme.darkAlgorithm,
            colorPrimary: '#ffdd00',
        }
    }
    const lightTheme = {
        token: {
            algorithm: theme.defaultAlgorithm,
            colorPrimary: '#231f20',
        }
    }
    return (
        <ConfigProvider
            theme={currentTheme === 'light' ? lightTheme : darkTheme}
        >
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/about" element={<AboutContent />} />*/}
                    {/*<Route path="/services" element={<ServicesContent />} />*/}
                    {/*<Route path="/contact" element={<ContactContent />} />*/}
                </Routes>
            </MainLayout>
        </ConfigProvider>
    );
};

export default App;