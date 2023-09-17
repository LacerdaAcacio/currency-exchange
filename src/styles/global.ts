import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  h1 {
    width: 100%;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
    color: #07B0FB;
  }

  h2 {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    color: #262626;
    width: 100%px;
    top: 370px;
    left: 15px;
  }

  h3 {
    color: #07B0FB;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0px;
    width: 100%;
    height: 22px;
  }

  span {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: left;
    color: #3F3F3F;
  }

  p {
    display: flex;
    align-items: center;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    color: #3F3F3F;
  }
`;
