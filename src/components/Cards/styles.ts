import styled, { css } from "styled-components";

interface Props {
  isHigher?: boolean;
}

const flexCenterStyles = css`
  display: flex;
  align-items: center;
`;

const boxShadowStyle = css`
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const DailyCard = styled.div`
  ${boxShadowStyle}
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin: 0.5rem;
`;

export const FlexAlignedDiv = styled.div`
  ${flexCenterStyles}
`;

export const RightMarginedSpan = styled.span`
  margin-right: 0.75rem;
`;

export const LowerHigherField = styled.p<Props>`
  color: ${(props: Props) => (props.isHigher ? "#69C669" : "#E54E4E")};
`;
