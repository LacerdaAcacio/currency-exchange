import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import { API_KEY, LABELS } from "../../constants";
import {
  ExchangeButton,
  FlexContainer,
  FormattedTextField,
} from "../../styles/styles";
import { useForm } from "react-hook-form";
// import { FormData } from "../../types/FormData";
import { useExchange } from "../../hooks/useExchange";
import { useEffect } from "react";
import CurrentExchange from "../CurrentExchange";
import DailyExchange from "../DailyExchange";
// import { useQuery } from "react-query";

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { onSubmit, exchangeData, hasExchangeData } = useExchange();

  // const hasExchangeData = Boolean(exchangeData?.exchangeRate);
  console.log(exchangeData);

  // const submit = document.querySelector("submit");

  // useEffect(() => {
  //   console.log(errors.from_symbol?.message);
  // }, [errors]);

  // useEffect(() => {
  //   console.log(getValues());
  // }, [getValues]);

  return (
    <FlexContainer>
      <Grid item xs={12}>
        <input hidden value={API_KEY} {...register("apiKey")} />
        <FormattedTextField
          // id="filled-basic"
          id="from_symbol"
          label={LABELS.INPUT}
          variant="filled"
          error={!!errors.from_symbol}
          // helperText={errors?.from_symbol?.message || ""}
          helperText={(errors?.from_symbol?.message || "") as string}
          // maxLength={3}
          // pattern="[A-Z]{3}"
          // required
          // {...register("from_symbol", { required: true })}
          // {...register("from_symbol", {
          //   required: true,
          //   pattern: {
          //     value: /^[A-Z]{3}$/, // Isso garante que sejam apenas 3 letras maiúsculas
          //     message:
          //       "Insira um código de moeda válido como BRL, USD, EUR, etc.", // Mensagem de erro personalizada
          //   },
          // })}
          inputProps={{
            maxLength: 3,
            pattern: "^[A-Z]{3}$",
          }}
          {...register("from_symbol", {
            required: true,
            validate: (value) =>
              /^[A-Z]{3}$/.test(value) ||
              "Insira um código de moeda válido como JPY, USD, EUR, etc.",
          })}
        />
        <input hidden value="BRL" {...register("to_symbol")} />
      </Grid>
      <Grid item xs={12}>
        <ExchangeButton
          id="submit"
          variant="contained"
          onClick={() => handleSubmit(onSubmit)()}
        >
          {LABELS.BUTTON}
        </ExchangeButton>
      </Grid>
      {hasExchangeData && (
        <>
          <CurrentExchange
            currentExchangeData={exchangeData}
            formData={getValues()}
          />
          <DailyExchange formData={getValues()} />
        </>
      )}
      {/* <CurrentExchange
        currentExchangeData={exchangeData}
        formData={getValues()}
      /> */}
    </FlexContainer>
  );
};

export default Form;
