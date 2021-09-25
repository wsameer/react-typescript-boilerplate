import React, { HTMLProps } from 'react';
import { PageLayoutWrapper } from './PageLayout.styled';

export const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(
    ({ children }) => {
        return <PageLayoutWrapper>{children}</PageLayoutWrapper>;
    },
);

PageLayout.displayName = 'PageLayout';
