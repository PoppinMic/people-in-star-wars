import { createGlobalStyle } from 'styled-components';
import { BP_TABLET_VERTICAL, GUTTER } from './constants';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Roboto', source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .App{
    max-width: ${BP_TABLET_VERTICAL - 2 * GUTTER}px;
    margin: 0 auto;
  }

`;
