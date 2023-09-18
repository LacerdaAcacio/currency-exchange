import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Accordion, AccordionDetails } from "@mui/material";
import styled, { css } from "styled-components";

const IconSharedStyles = css`
  && {
    color: "#07B0FB";
  }
`;

export const StyledRemoveIcon = styled(RemoveIcon)`
  ${IconSharedStyles}
`;

export const StyledAddIcon = styled(AddIcon)`
  ${IconSharedStyles}
`;

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

export const StyledAccordionDetails = styled(AccordionDetails)`
  && {
    background-color: "#F4F4F4";
    height: 15.625rem;
    overflow-y: auto;
  }
`;
