import React from 'react';
import {Menu as MenuAnt, MenuProps, Tooltip} from 'antd';
import Logo from "../components/Logo";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    disabled?: boolean,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        disabled,
    } as MenuItem;
}

const Menu = () => {
    const items: MenuProps['items'] = [
        getItem('Inicio', 'home'),
        getItem(<Tooltip title={'Proximamente'}>Servicios</Tooltip>, 'serv', null, undefined, undefined, true),
        getItem(<Tooltip title={'Proximamente'}>Contacto</Tooltip>, 'cont', null, undefined, undefined, true),
        getItem(<Tooltip title={'Proximamente'}>Quienes somos</Tooltip>, 'about', null, undefined, undefined, true)
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
                defaultSelectedKeys={['home']}
                className={'justify-center flex-1 mr-28'}
                onClick={onClick}
                items={items}
            />
        </div>
    );
};

export default Menu;