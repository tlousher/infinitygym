import React from "react";
import {Layout} from 'antd';
import Menu from "./Menu";
import {Footer} from "antd/es/layout/layout";
import {FacebookIcon, InstagramIcon, LocationPinIcon, TikTokIcon, WhatsappIcon} from "../config/icons";

const { Header, Content } = Layout;

interface ILayout {
    children: React.ReactNode;
}

const MainLayout = ({children}: ILayout) => {

    return (
        <Layout>
            <Header className={'fixed w-full z-10'}>
                <div className="logo" />
                <Menu />
            </Header>
            <Content style={{ marginTop: 64 }}>
                {children}
            </Content>
            <div className={'w-full py-8 mt-8 bg-primary text-secondary-background flex justify-center flex-col items-center'}>
                <div className={'text-base'}>
                    Encuentranos en nuestro gimnasio
                </div>
                <div className={'text-xl'}>
                    <LocationPinIcon />
                    <a
                        className={'text-text hover:text-neutral-900 hover:underline hover:font-medium'}
                        href="https://goo.gl/maps/RFMzivJFn6uyRan19"
                        target="_blank" rel="noreferrer"
                    >
                        Cuenca - Ecuador
                    </a>
                </div>
            </div>
            <Footer className={'w-full bg-secondary-background text-background flex justify-between items-center'}>
                <div className={'text-left'}>
                    <div>
                        <a className={'mr-2'} href={'https://www.instagram.com/infinitemartialartsecuador/'} target={'_blank'} rel="noreferrer">
                            <InstagramIcon style={{fontSize: 30}} />
                        </a>
                        <a className={'mr-2'} href={'https://wa.me/message/EW6ZAJUKDO53L1'} target={'_blank'} rel="noreferrer">
                            <WhatsappIcon style={{fontSize: 30}} />
                        </a>
                        <a className={'mr-2'} href={'https://www.facebook.com/infinitemartialartsecuador'} target={'_blank'} rel="noreferrer">
                            <FacebookIcon style={{fontSize: 30}} />
                        </a>
                        <a className={'mr-2'} href={'http://www.tiktok.com/@infinitemartialartsec'} target={'_blank'} rel="noreferrer">
                            <TikTokIcon style={{fontSize: 30}} />
                        </a>
                    </div>
                    <div className={'mt-2'}>Infinite Martial Arts EC</div>
                </div>
                <div className={'text-right text-xs text-neutral-600'}>
                    Dibujos vectoriales de<br/><a href="https://www.freepik.es/vector-gratis/conjunto-emblemas-deportivos-etiquetas-insignias-logotipos_11058710.htm#query=gym&position=3&from_view=author">macrovector</a> en Freepik
                </div>
            </Footer>
        </Layout>
    );
}

export default MainLayout;
