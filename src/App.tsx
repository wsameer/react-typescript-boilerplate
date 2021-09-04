import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <div>
                <h1>Welcome!</h1>
                <p>Edit App.tsx to create something awesome!</p>
            </div>
        </ThemeProvider>
    );
};

export default App;
