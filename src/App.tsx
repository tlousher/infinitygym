import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import {ConfigProvider, theme} from "antd";

const App = () => {
    const [currentTheme, setCurrentTheme] = React.useState('light');
    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    }
    const darkTheme = {
        token: {
            algorithm: theme.darkAlgorithm,
            colorPrimary: '#231f20',
        }
    }
    const lightTheme = {
        token: {
            algorithm: theme.defaultAlgorithm,
            colorPrimary: '#ffdd00',
        }
    }
    return (
        <ConfigProvider
            theme={currentTheme === 'light' ? lightTheme : darkTheme}
        >
            <MainLayout toggleTheme={toggleTheme}>
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