import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-color: #07B0FB;
    --text-dark: #262626;
    --text-light: #3F3F3F;
    --font-family-main: Roboto, Arial, Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  h1, h2, h3, span, p {
    font-family: var(--font-family-main);
    letter-spacing: 0px;
  }

  h1 {
    width: 100%;
    font-size: 1.5rem; 
    font-weight: 700;
    text-align: center;
    color: var(--primary-color);
  }

  h2 {
    font-size: 1.125rem; 
    font-weight: 600;
    line-height: 28px;
    text-align: left;
    color: var(--text-dark);
  }

  h3 {
    color: var(--primary-color);
    font-size: 0.875rem; 
    font-weight: 600;
    line-height: 22px;
  }

  span {
    font-size: 0.6875rem;
    font-weight: 500;
    line-height: 14px;
    text-align: left;
    color: var(--text-light);
  }

  p {
    display: flex;
    align-items: center;
    font-size: 1rem; 
    font-weight: 600;
    line-height: 24px;
    color: var(--text-light);
  }
`;
