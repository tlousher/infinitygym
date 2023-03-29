import React from 'react';

const Logo = ({height = 50}: { height?: number | undefined }) => {
    return (
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo de Infinite" style={{ height: height }} />
    );
};

export default Logo;