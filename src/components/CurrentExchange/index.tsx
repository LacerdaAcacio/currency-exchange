import Grid from "@mui/material/Grid";
import { LABELS } from "../../constants";
import { CurrentExchangeDivider } from "../../styles/styles";
import { Formatter } from "../../utils/Formatter";
import { CurrentExchangeCardsParams } from "../../types/ParamsData";
import {
  CurrentExchangeCard,
  ExchangeContainer,
  StyledNormalH3,
} from "./styles";

const CurrentExchange = ({
  currentExchangeData,
}: CurrentExchangeCardsParams) => {
  const formattedExchangeRate = Formatter.money(
    currentExchangeData?.exchangeRate,
  );

  const formattedLastUpdatedAt = Formatter.date(
    currentExchangeData?.lastUpdatedAt,
  );

  const fromToSymbol = `${currentExchangeData?.fromSymbol}/BRL`;

  return (
    <>
      <CurrentExchangeDivider />
      <ExchangeContainer>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <h2>{LABELS.CURRENT_TITLE}</h2>
            <StyledNormalH3>{formattedLastUpdatedAt}</StyledNormalH3>
          </Grid>
          <Grid item xs={5}>
            <h1>{fromToSymbol}</h1>
          </Grid>
        </Grid>
        <CurrentExchangeCard>
          <h1>{formattedExchangeRate}</h1>
        </CurrentExchangeCard>
      </ExchangeContainer>
    </>
  );
};

export default CurrentExchange;
