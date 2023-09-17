import { styled } from "styled-components";

interface Props {
  isHigher?: boolean;
}

export const DailyCard = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 8px 0px #0000001a;
  padding: 16px;
  margin: 8px;
`;

export const LowerHigherField = styled.p<Props>`
  color: ${(props: any) => (props.isHigher ? "#69C669" : "#E54E4E")};
  /* color: #69C669  #E54E4E */
`;
