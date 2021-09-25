import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme/theme';
import { GlobalStyles } from '@theme';
import Header from '@components/Header';
import PageLayout from '@components/layout/PageLayout';

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <PageLayout>
                <Header />
            </PageLayout>
        </ThemeProvider>
    );
};

export default App;
