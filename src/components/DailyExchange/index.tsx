import { FlexContainer } from "../../styles/styles";
import { useExchange } from "../../hooks/useExchange";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Cards from "../Cards";
import { Formatter } from "../../utils/Formatter";
import { DailyExchangeParams } from "../../types/ParamsData";
import { DailyExchangeData } from "../../types/DailyExchangeData";
import { useFetchExchange } from "../../hooks/useFetchExchange";
import { LABELS } from "../../constants";
import Loading from "../Loading";
import { StyledAccordion } from "./styles";

const DailyExchange = ({ formData }: DailyExchangeParams) => {
  const {
    dailyExchangeExpanded,
    getLastThirtyDays,
    generateKey,
    handleExpand,
  } = useExchange();

  const { exchangeData, exchangeLoading, hasExchangeData } = useFetchExchange();

  const dailyTitle = LABELS.DAILY_TITLE.toUpperCase();

  const lastThirtyDays =
    hasExchangeData && dailyExchangeExpanded
      ? (getLastThirtyDays(exchangeData?.data) as DailyExchangeData[])
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
      {exchangeLoading ? (
        <Loading />
      ) : (
        <StyledAccordion
          aria-busy={exchangeLoading}
          expanded={dailyExchangeExpanded}
          // expanded={dailyExchangeExpanded && hasExchangeData}
          onChange={() => handleExpand(formData)}
        >
          <AccordionSummary
            expandIcon={dailyExchangeExpanded ? <RemoveIcon /> : <AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>{dailyTitle}</p>
          </AccordionSummary>
          <AccordionDetails
            style={{
              background: "#F4F4F4",
              height: "250px",
              overflowY: "auto",
            }}
          >
            {hasExchangeData && lastThirtyDays?.map(mapFunction)}
          </AccordionDetails>
        </StyledAccordion>
      )}
    </>
  );
};

export default DailyExchange;
