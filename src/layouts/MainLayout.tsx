import {Layout} from 'antd';
import Menu from "./Menu";

const { Header, Content } = Layout;

interface ILayout {
    toggleTheme: () => void;
    children: React.ReactNode;
}

const MainLayout = ({toggleTheme, children}: ILayout) => {

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu toggleTheme={toggleTheme} />
            </Header>
            <Content style={{ marginTop: 64 }}>
                {children}
            </Content>
        </Layout>
    );
}

export default MainLayout;
