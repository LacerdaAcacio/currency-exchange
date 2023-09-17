import { FlexContainer } from "../../styles/styles";
import { useExchange } from "../../hooks/useExchange";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Cards from "../Cards";
import { v4 as uuidv4 } from "uuid";
import { Formatter } from "../../utils/Formatter";
import { DailyExchangeParams } from "../../types/ParamsData";
import { DailyExchangeData } from "../../types/DailyExchangeData";

const DailyExchange = ({ formData }: DailyExchangeParams) => {
  // const [expanded, setExpanded] = useState(false);
  const {
    // onSubmit,
    exchangeData,
    hasExchangeData,
    getLastThirtyDays,
    exchangeLoading,
    generateKey,
    handleExpand,
    dailyExchangeExpanded,
  } = useExchange();

  const lastThirtyDays =
    hasExchangeData && dailyExchangeExpanded
      ? getLastThirtyDays(exchangeData?.data)
      : [];

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
      <Accordion
        aria-busy={exchangeLoading}
        expanded={dailyExchangeExpanded && hasExchangeData}
        onChange={() => handleExpand(formData)}
        style={{
          border: "0px",
          borderBottom: "2px solid #07B0FB",
          width: "98%",
          marginBottom: "50px",
        }}
      >
        <AccordionSummary
          expandIcon={dailyExchangeExpanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>LAST 30 DAYS</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ background: "#F4F4F4", height: "250px", overflowY: "auto" }}
        >
          {hasExchangeData && lastThirtyDays?.map(mapFunction)}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DailyExchange;
