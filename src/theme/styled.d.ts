import {} from 'styled-components/macro';
import { ThemeType } from './types';
declare module 'styled-components/macro' {
    /* eslint-disable */
    export interface DefaultTheme extends ThemeType {}
}
/* eslint-enable */
