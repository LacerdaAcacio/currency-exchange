import { Accordion } from "@mui/material";
import styled from "styled-components";

export const StyledAccordion = styled(Accordion)`
  && {
    border: none;
    border-bottom: 2px solid #07b0fb;
    box-shadow: none;
    background-color: transparent;
    width: 70%;
    margin-bottom: 50px;

    &::before,
    &::after {
      content: none;
    }
  }
`;
