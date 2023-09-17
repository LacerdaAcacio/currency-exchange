import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import { API_KEY, LABELS } from "../../constants";
import {
  CurrentExchangeCard,
  ExchangeButton,
  ExchangeContainer,
  CurrentExchangeDivider,
} from "../../styles/styles";
import { useForm } from "react-hook-form";
// import { FormData } from "../../types/FormData";
import { useExchange } from "../../hooks/useExchange";
import { useEffect } from "react";
import { Divider } from "@mui/material";
import DailyExchange from "../DailyExchange";
import { Formatter } from "../../utils/Formatter";
// import { DateTimeField } from "@mui/x-date-pickers";
// import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
// import { useQuery } from "react-query";

const CurrentExchange = (currentExchangeData: any, formData: FormData) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { onSubmit, exchangeData } = useExchange();

  // const submit = document.querySelector("submit");
  const formattedExchangeRate = Formatter.money(
    currentExchangeData?.currentExchangeData?.exchangeRate,
  );

  const formattedLastUpdatedAt = Formatter.date(
    currentExchangeData?.currentExchangeData?.lastUpdatedAt,
  );

  const fromToSymbol = `${currentExchangeData?.currentExchangeData?.fromSymbol}/BRL`;

  useEffect(() => {
    console.log(currentExchangeData);
  }, [currentExchangeData]);

  return (
    <>
      <CurrentExchangeDivider />
      <ExchangeContainer>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <div>
              <h2>{LABELS.CURRENT_TITLE}</h2>
            </div>
            <div>{formattedLastUpdatedAt}</div>
            {/* <DateTimeField
          label="Basic date time field"
          value={currentExchangeData?.lastUpdatedAt}
          disabled
        /> */}
          </Grid>
          <Grid item xs={5}>
            <h1>{fromToSymbol}</h1>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}> */}
        <CurrentExchangeCard>
          <h1>{formattedExchangeRate}</h1>
        </CurrentExchangeCard>
        {/* </Grid> */}
      </ExchangeContainer>
      {/* <DailyExchange /> */}
    </>
  );
};

export default CurrentExchange;
