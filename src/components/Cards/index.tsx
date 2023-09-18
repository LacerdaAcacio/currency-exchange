import { Grid } from "@mui/material";
import {
  DailyCard,
  FlexAlignedDiv,
  LowerHigherField,
  RightMarginedSpan,
} from "./styles";
import { Formatter } from "../../utils/Formatter";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { DailyExchangeCardsParams } from "../../types/ParamsData";
import FormattedCardContent from "./FormattedCardContent";

const Cards = ({ dailyExchangeData, comparison }: DailyExchangeCardsParams) => {
  // const formattedInfo = (
  //   text: string,
  //   value: string | number,
  //   isComparison?: boolean,
  // ) => {
  //   const formattedValue = Formatter.money(value, 4);
  //   const isHigher = Boolean(Number(value) >= 0);
  //   return (
  //     <FlexAlignedDiv>
  //       <RightMarginedSpan>{text.toLocaleUpperCase()}:</RightMarginedSpan>
  //       {isComparison ? (
  //         <LowerHigherField isHigher={isHigher}>
  //           {value}% {isHigher ? <ExpandLess /> : <ExpandMore />}
  //         </LowerHigherField>
  //       ) : (
  //         <p>{formattedValue}</p>
  //       )}
  //     </FlexAlignedDiv>
  //   );
  // };

  return (
    <>
      <DailyCard>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>{Formatter.date(dailyExchangeData?.date)}</h3>
          </Grid>
          <Grid item xs={6}>
            {/* <h2>{formattedInfo("Open", dailyExchangeData?.open)}</h2> */}
            <h2>
              <FormattedCardContent
                text="Open"
                value={dailyExchangeData?.open}
              />
            </h2>
          </Grid>
          <Grid item xs={6}>
            {/* <h2>{formattedInfo("High", dailyExchangeData?.high)}</h2> */}
            <h2>
              <FormattedCardContent
                text="High"
                value={dailyExchangeData?.high}
              />
            </h2>
          </Grid>
          <Grid item xs={6}>
            {/* <h2>{formattedInfo("Close", dailyExchangeData?.close)}</h2> */}
            <h2>
              <FormattedCardContent
                text="Close"
                value={dailyExchangeData?.close}
              />
            </h2>
          </Grid>
          <Grid item xs={6}>
            {/* <h2>{formattedInfo("Low", dailyExchangeData?.low)}</h2> */}
            <h2>
              <FormattedCardContent text="Low" value={dailyExchangeData?.low} />
            </h2>
          </Grid>
          <Grid item xs={12}>
            {/* <h2>{formattedInfo("Close Diff (%)", comparison, true)}</h2> */}
            <h2>
              <FormattedCardContent
                text="Close Diff (%)"
                value={comparison}
                isComparison
              />
            </h2>
          </Grid>
        </Grid>
      </DailyCard>
    </>
  );
};

export default Cards;
