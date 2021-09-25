import React from 'react';
import Logo from './logo.svg';
import { AppLink, HeaderWrapper } from './Header.styled';

export const Header: React.FC = React.memo(() => {
    return (
        <HeaderWrapper>
            <Logo height={200} width={200} />
            <p>
                Edit <code>`src/App.tsx`</code> and save to reload.
            </p>
            <AppLink
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </AppLink>
        </HeaderWrapper>
    );
});

Header.displayName = 'Header';
