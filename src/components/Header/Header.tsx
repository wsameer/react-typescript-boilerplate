import React from 'react';
import { HeaderWrapper } from './Header.styled';

export const Header: React.FC = React.memo(() => {
    return (
        <HeaderWrapper>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </HeaderWrapper>
    );
});

Header.displayName = "Header";