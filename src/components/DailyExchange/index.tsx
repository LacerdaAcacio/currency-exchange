import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccordionSummary } from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import { useExchange } from "../../hooks/useExchange";
import { useFetchExchange } from "../../hooks/useFetchExchange";

import { LABELS } from "../../constants";

import { DailyExchangeParams } from "../../types/ParamsData";
import { DailyExchangeData } from "../../types/DailyExchangeData";

import Cards from "../Cards";
import { FlexContainer } from "../../styles/styles";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAddIcon,
  StyledRemoveIcon,
} from "./styles";

function DailyExchange({ formData }: DailyExchangeParams) {
  const [isExpanded, setIsExpanded] = useState(false);
  useForm();
  const { filterLastThirtyDays, compareCloseToPrevious } = useExchange();
  const { onSubmit, exchangeData, hasExchangeData } = useFetchExchange();
  const dailyTitle = LABELS.DAILY_TITLE.toUpperCase();

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      onSubmit(formData, true);
    }
  };

  const lastThirtyDays =
    hasExchangeData && isExpanded
      ? filterLastThirtyDays(exchangeData?.data)
      : [];

  const renderCards = (data: DailyExchangeData, index: number) => {
    const comparison = compareCloseToPrevious(data, index, lastThirtyDays);
    return (
      <FlexContainer key={uuidv4()}>
        <Cards
          key={uuidv4()}
          dailyExchangeData={data}
          comparison={comparison}
        />
      </FlexContainer>
    );
  };

  return (
    <StyledAccordion expanded={isExpanded} onChange={handleExpand}>
      <AccordionSummary
        expandIcon={isExpanded ? <StyledRemoveIcon /> : <StyledAddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p>{dailyTitle}</p>
      </AccordionSummary>
      <StyledAccordionDetails>
        {hasExchangeData && lastThirtyDays.map(renderCards)}
      </StyledAccordionDetails>
    </StyledAccordion>
  );
}

export default DailyExchange;
