import React from 'react';
import {Menu as MenuAnt, MenuProps, Switch} from 'antd';
import Logo from "../components/Logo";
import {SettingOutlined} from '@ant-design/icons';
import {DarkIcon, LightIcon} from "../config/icons";

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

const Menu = ({toggleTheme}: {toggleTheme: () => void }) => {
    const items: MenuProps['items'] = [
        getItem('Inicio', 'home'),
        getItem('Servicios', 'serv'),
        getItem('Contacto', 'cont'),
        getItem('Quienes somos', 'about'),
        getItem(<SettingOutlined/>,
            'sett',
            null,
            [
                getItem(
                    <Switch
                        checkedChildren={<LightIcon style={{fontSize: 14}} />}
                        unCheckedChildren={<DarkIcon style={{fontSize: 14}} />}
                        defaultChecked
                    />,
                    'theme',
                    <span className={'mr-4'}>Tema</span>
                )]),
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case 'theme':
                toggleTheme();
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