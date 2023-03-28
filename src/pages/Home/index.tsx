import React from 'react';
import {Card, Typography} from "antd";

const { Title } = Typography;
const Home = () => {
    return (
        <Card
            hoverable
            style={{ backgroundImage: `url('https://source.unsplash.com/random/800x400')`, backgroundSize: 'cover' }}
        >
            <Title style={{ color: 'white', textAlign: 'center' }}>Inspiring text here</Title>
        </Card>
    );
};

export default Home;