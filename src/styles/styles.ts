import { Divider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../../src/assets/images/svg/logo.svg";

const backgroundBlueSharedStyles = css`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  background: #07b0fb;
`;

const MarginSharedStyles = css`
  && {
    width: 20.625rem;
    margin: 1.5625rem 0;
  }
`;

const DividerSharedStyles = css`
  && {
    width: 98%;
    height: 2px;
    background: #d9d9d9;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormattedLogo = styled(Logo)`
  ${MarginSharedStyles}
`;

export const FormattedTextField = styled(TextField)`
  ${MarginSharedStyles}

  && label.Mui-focused {
    color: #07b0fb;
  }

  && .MuiFilledInput-underline:after {
    border-bottom: 2px solid #07b0fb;
  }
`;

export const HeaderDivider = styled(Divider)`
  && {
    ${DividerSharedStyles}
    margin-bottom: 1.875rem;
  }
`;

export const CurrentExchangeDivider = styled(Divider)`
  && {
    ${DividerSharedStyles}
    margin: 2.5rem 0;
  }
`;

export const DailyExchangeDivider = styled(Divider)`
  && {
    ${DividerSharedStyles}
    width: 70%;
  }
`;

export const FooterContainer = styled.div`
  ${backgroundBlueSharedStyles}
  width: 100%;
  height: 30px;
  color: #ffffff;
  position: fixed;
  bottom: 0;
`;

export const ExchangeButton = styled(Button)`
  && {
    ${backgroundBlueSharedStyles}
    width: 20.625rem;
    height: 3rem;
    border-radius: 100px;
  }
`;
