// import { Divider } from '@mui/material';
import { Grid } from "@mui/material";
import { ReactComponent as Logo } from "../../../src/assets/images/svg/logo.svg";
import { LABELS } from "../../constants";
import { ACTION_LABS_URL } from "../../constants/routes";
import {
  FlexContainer,
  FormattedLogo,
  CardsDivider,
} from "../../styles/styles";
import { DailyCard, LowerHigherField } from "./styles";
import { Formatter } from "../../utils/Formatter";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Cards = (dailyExchangeData: any, comparison: string) => {
  //   const mainTitleFormatted = LABELS.MAIN_TITLE.toUpperCase();

  // const formattedCashInfo = (text: string, value: string) => {
  //   const formattedValue = Formatter.money(value, 4);
  //   return `${text.toLocaleUpperCase()}: ${formattedValue}`;
  // };

  const formattedCashInfo = (
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
          // <FlexContainer>
          <LowerHigherField isHigher={isHigher}>
            {value}% {isHigher ? <ExpandLess /> : <ExpandMore />}
          </LowerHigherField>
        ) : (
          // </FlexContainer>
          <p>{formattedValue}</p>
        )}
      </div>
    );
  };

  console.log(dailyExchangeData);
  // console.log(comparison);

  return (
    <>
      <DailyCard>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h3>
              {Formatter.date(dailyExchangeData?.dailyExchangeData?.date)}
            </h3>
            {/* <h3>teste</h3> */}
          </Grid>
          <Grid item xs={6}>
            {/* <div> */}
            <h2>
              {formattedCashInfo(
                "Open",
                dailyExchangeData?.dailyExchangeData?.open,
              )}
            </h2>
            {/* </div> */}
            {/* <div>{currentExchangeData?.lastUpdatedAt}</div> */}
          </Grid>
          <Grid item xs={6}>
            {/* <div> */}
            <h2>
              {formattedCashInfo(
                "High",
                dailyExchangeData?.dailyExchangeData?.high,
              )}
            </h2>
            {/* </div> */}
            {/* <div>{currentExchangeData?.lastUpdatedAt}</div> */}
          </Grid>
          <Grid item xs={6}>
            {/* <div> */}
            <h2>
              {formattedCashInfo(
                "Close",
                dailyExchangeData?.dailyExchangeData?.close,
              )}
            </h2>
            {/* </div> */}
            {/* <div>{currentExchangeData?.lastUpdatedAt}</div> */}
          </Grid>
          <Grid item xs={6}>
            {/* <div> */}
            <h2>
              {formattedCashInfo(
                "Low",
                dailyExchangeData?.dailyExchangeData?.low,
              )}
            </h2>
            {/* </div> */}
            {/* <div>{currentExchangeData?.lastUpdatedAt}</div> */}
          </Grid>
          <Grid item xs={12}>
            {/* <div> */}
            <h2>
              {formattedCashInfo(
                "Close Diff (%)",
                dailyExchangeData?.comparison,
                true,
              )}
            </h2>
            {/* </div> */}
            {/* <div>{currentExchangeData?.lastUpdatedAt}</div> */}
          </Grid>
          {/* <Grid item xs={6}>
            <h1>{fromToSymbol}</h1>
          </Grid> */}
        </Grid>
      </DailyCard>
    </>
  );
};

export default Cards;
