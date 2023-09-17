import { Divider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled, { css } from "styled-components";
import { ReactComponent as Logo } from "../../src/assets/images/svg/logo.svg";

const backgroundBlueSharedStyles = css`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  background: #07b0fb;
`;

const MarginSharedStyles = css`
  && {
    width: 330px;
    margin: 25px 0px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ExchangeContainer = styled.div`
  width: 330px;
`;

export const CurrentExchangeCard = styled.div`
  display: flex;
  align-items: center;
  background: #e6f7ff;
  height: 72px;
  top: 430px;
  left: 15px;
  opacity: 0.1px;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
`;

export const FormattedLogo = styled(Logo)`
  ${MarginSharedStyles}
`;

export const FormattedTextField = styled(TextField)`
  ${MarginSharedStyles}
`;

export const HeaderDivider = styled(Divider)`
  && {
    width: 98%;
    margin-bottom: 30px;
    height: 2px;
    background: #d9d9d9;
  }
`;

export const CurrentExchangeDivider = styled(Divider)`
  && {
    margin: 40px;
    width: 98%;
  }
`;

export const DailyExchangeDivider = styled(Divider)`
  && {
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
    width: 330px;
    height: 48px;
    border-radius: 100px;
  }
`;
