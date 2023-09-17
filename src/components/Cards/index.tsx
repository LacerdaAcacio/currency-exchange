import { Grid } from "@mui/material";
import { DailyCard, LowerHigherField } from "./styles";
import { Formatter } from "../../utils/Formatter";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { DailyExchangeCardsParams } from "../../types/ParamsData";

const Cards = ({ dailyExchangeData, comparison }: DailyExchangeCardsParams) => {
  const formattedInfo = (
    text: string,
    value: string | number,
    isComparison?: boolean,
  ) => {
    const formattedValue = Formatter.money(value, 4);
    const isHigher = Boolean(Number(value) >= 0);
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "12px" }}>{text.toLocaleUpperCase()}:</span>
        {isComparison ? (
          <LowerHigherField isHigher={isHigher}>
            {value}% {isHigher ? <ExpandLess /> : <ExpandMore />}
          </LowerHigherField>
        ) : (
          <p>{formattedValue}</p>
        )}
      </div>
    );
  };

  return (
    <>
      <DailyCard>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>{Formatter.date(dailyExchangeData?.date)}</h3>
          </Grid>
          <Grid item xs={6}>
            <h2>
              {/* {formattedInfo(
                "Open",
                dailyExchangeData?.dailyExchangeData?.open,
              )} */}
              {formattedInfo("Open", dailyExchangeData?.open)}
            </h2>
          </Grid>
          <Grid item xs={6}>
            <h2>
              {/* {formattedInfo(
                "High",
                dailyExchangeData?.dailyExchangeData?.high,
              )} */}
              {formattedInfo("High", dailyExchangeData?.high)}
            </h2>
          </Grid>
          <Grid item xs={6}>
            <h2>
              {/* {formattedInfo(
                "Close",
                dailyExchangeData?.dailyExchangeData?.close,
              )} */}
              {formattedInfo("Close", dailyExchangeData?.close)}
            </h2>
          </Grid>
          <Grid item xs={6}>
            <h2>
              {/* {formattedInfo("Low", dailyExchangeData?.dailyExchangeData?.low)} */}
              {formattedInfo("Low", dailyExchangeData?.low)}
            </h2>
          </Grid>
          <Grid item xs={12}>
            <h2>
              {formattedInfo(
                "Close Diff (%)",
                // dailyExchangeData?.comparison,
                comparison,
                true,
              )}
            </h2>
          </Grid>
        </Grid>
      </DailyCard>
    </>
  );
};

export default Cards;
