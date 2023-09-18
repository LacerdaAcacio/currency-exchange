import { Grid } from "@mui/material";
import { DailyCard } from "./styles";
import { Formatter } from "../../utils/Formatter";
import { DailyExchangeCardsParams } from "../../types/ParamsData";
import FormattedCardContent from "./FormattedCardContent";

const Cards = ({ dailyExchangeData, comparison }: DailyExchangeCardsParams) => {
  const formattedDate = Formatter.date(dailyExchangeData?.date);

  return (
    <>
      <DailyCard>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>{formattedDate}</h3>
          </Grid>
          <Grid item xs={6}>
            <FormattedCardContent text="Open" value={dailyExchangeData?.open} />
          </Grid>
          <Grid item xs={6}>
            <FormattedCardContent text="High" value={dailyExchangeData?.high} />
          </Grid>
          <Grid item xs={6}>
            <FormattedCardContent
              text="Close"
              value={dailyExchangeData?.close}
            />
          </Grid>
          <Grid item xs={6}>
            <FormattedCardContent text="Low" value={dailyExchangeData?.low} />
          </Grid>
          <Grid item xs={12}>
            <FormattedCardContent
              text="Close Diff (%)"
              value={comparison}
              isComparison
            />
          </Grid>
        </Grid>
      </DailyCard>
    </>
  );
};

export default Cards;
