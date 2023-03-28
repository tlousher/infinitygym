import React from 'react';
import {Menu as MenuAnt} from 'antd';

const Menu = () => {
    const items = [
        {
            label: 'Home',
            key: '1',
        },
        {
            label: 'About Us',
            key: '2',
        },
        {
            label: 'Services',
            key: '3',
        },
        {
            label: 'Contact',
            key: '4',
        },
    ];
    return (
        <div>
            <MenuAnt theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                {items.map((item) => (
                    <MenuAnt.Item key={item.key}>{item.label}</MenuAnt.Item>
                ))}
            </MenuAnt>
        </div>
    );
};

export default Menu;