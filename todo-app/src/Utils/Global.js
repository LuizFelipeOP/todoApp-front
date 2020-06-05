import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .toggleThemeButton {
    background: ${({ theme }) => theme.ButtonSvgHeaderColor};
  }
  .toggleThemeButton > svg {
    color: ${({ theme }) => theme.svgColor};
  }
  .list{
    background: ${({ theme }) => theme.listColor};
  }
  .header-wrapper{
    background: ${({ theme }) => theme.headerColor};
  }
  `