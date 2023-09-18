import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Accordion } from "@mui/material";
import styled, { css } from "styled-components";

const IconSharedStyles = css`
  && {
    color: "#07B0FB";
  }
`;

export const FormattedRemoveIcon = styled(RemoveIcon)`
  ${IconSharedStyles}
`;

export const FormattedAddIcon = styled(AddIcon)`
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
