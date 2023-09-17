import Grid from "@mui/material/Grid";
import { API_KEY, LABELS } from "../../constants";
import {
  ExchangeButton,
  FlexContainer,
  FormattedTextField,
} from "../../styles/styles";
import { useForm } from "react-hook-form";
import { useExchange } from "../../hooks/useExchange";
import CurrentExchange from "../CurrentExchange";
import DailyExchange from "../DailyExchange";

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { onSubmit, exchangeData, hasExchangeData } = useExchange();

  return (
    <FlexContainer>
      <Grid item xs={12}>
        <input hidden value={API_KEY} {...register("apiKey")} />
        <FormattedTextField
          id="from_symbol"
          label={LABELS.INPUT}
          variant="filled"
          error={!!errors.from_symbol}
          helperText={(errors?.from_symbol?.message || "") as string}
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
    </FlexContainer>
  );
};

export default Form;
