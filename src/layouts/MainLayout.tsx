import {Layout} from 'antd';
import Menu from "./Menu";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }: any) => {

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu />
            </Header>
            <Content style={{ marginTop: 64 }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default MainLayout;
