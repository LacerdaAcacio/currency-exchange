import { useState } from "react";
import { useForm } from "react-hook-form";
import { AccordionSummary } from "@mui/material";

import { useExchange } from "../../hooks/useExchange";
import { useFetchExchange } from "../../hooks/useFetchExchange";
import { LABELS } from "../../constants";
import { Formatter } from "../../utils/Formatter";

import { DailyExchangeParams } from "../../types/ParamsData";
import { DailyExchangeData } from "../../types/DailyExchangeData";

import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAddIcon,
  StyledRemoveIcon,
} from "./styles";

import Cards from "../Cards";
import { FlexContainer } from "../../styles/styles";

const DailyExchange = ({ formData }: DailyExchangeParams) => {
  const [expanded, setExpanded] = useState(false);
  useForm();
  const { getLastThirtyDays, generateKey } = useExchange();
  const { onSubmit, exchangeData, hasExchangeData } = useFetchExchange();

  const dailyTitle = LABELS.DAILY_TITLE.toUpperCase();

  const handleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      onSubmit(formData, true);
    }
  };

  const lastThirtyDays =
    hasExchangeData && expanded ? getLastThirtyDays(exchangeData?.data) : [];

  const compareCloseToPrevious = (data: DailyExchangeData, index: number) => {
    const currentClose = Number(data.close);
    const previousClose = Number(
      lastThirtyDays[index + 1]?.close || currentClose,
    );

    const comparisonPercentage = Formatter.ruleOfThreePercent(
      currentClose,
      previousClose,
    );

    const result = Number(comparisonPercentage) - 100;
    return result.toFixed(2);
  };

  const mapFunction = (data: DailyExchangeData, index: number) => {
    const comparison = compareCloseToPrevious(data, index);
    return (
      <FlexContainer key={generateKey}>
        <Cards
          key={generateKey}
          dailyExchangeData={data}
          comparison={comparison}
        />
      </FlexContainer>
    );
  };

  return (
    <>
      <StyledAccordion expanded={expanded} onChange={handleExpand}>
        <AccordionSummary
          expandIcon={expanded ? <StyledRemoveIcon /> : <StyledAddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>{dailyTitle}</p>
        </AccordionSummary>
        <StyledAccordionDetails>
          {hasExchangeData && lastThirtyDays?.map(mapFunction)}
        </StyledAccordionDetails>
      </StyledAccordion>
    </>
  );
};

export default DailyExchange;
