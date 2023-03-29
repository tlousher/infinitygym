import React from 'react';
import {Card, Typography} from "antd";


const { Title } = Typography;
const Home = () => {
    return (
        <div>
            <Card
                className={'h-screen bg-cover bg-center'}
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/resources/images/weights.jpg)`
                }}
            >
                <Title
                    className={'flex justify-center items-center h-full'}
                    style={{color: 'white'}}
                >
                    Inspiring text here
                </Title>
            </Card>
            <Card>
                <Title>Home</Title>
            </Card>
        </div>
    );
};

export default Home;