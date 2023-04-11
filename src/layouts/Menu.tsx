import React from 'react';
import {Menu as MenuAnt, MenuProps} from 'antd';
import Logo from "../components/Logo";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const Menu = () => {
    const items: MenuProps['items'] = [
        getItem('Inicio', 'home'),
        getItem('Servicios', 'serv'),
        getItem('Contacto', 'cont'),
        getItem('Quienes somos', 'about')
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case 'home':
                console.log('home');
                break;
        }
    };

    return (
        <div className={'flex justify-between items-center'}>
            <Logo />
            <MenuAnt
                mode="horizontal"
                defaultSelectedKeys={['1']}
                className={'justify-center flex-1 mr-28'}
                onClick={onClick}
                items={items}
            />
        </div>
    );
};

export default Menu;