import React from "react";
import {Layout} from 'antd';
import Menu from "./Menu";

const { Header, Content } = Layout;

interface ILayout {
    children: React.ReactNode;
}

const MainLayout = ({children}: ILayout) => {

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu />
            </Header>
            <Content style={{ marginTop: 64 }}>
                {children}
            </Content>
        </Layout>
    );
}

export default MainLayout;
