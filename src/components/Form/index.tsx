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
import { ExchangeParams } from "../../types/ParamsData";
import { useFetchExchange } from "../../hooks/useFetchExchange";
import Loading from "../Loading";

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const { currencyCodeInputProps, generateKey } = useExchange();

  const { onSubmit, exchangeData, exchangeLoading, hasExchangeData } =
    useFetchExchange();

  const hasError = Boolean(errors.from_symbol);
  const helperText = (errors?.from_symbol?.message || "") as string;

  const formRegisterSettings = {
    ...register("from_symbol", {
      required: true,
      validate: (value) => /^[A-Z]{3}$/.test(value) || LABELS.INVALID_VALUE,
    }),
  };

  const handleExchangeButton = () =>
    handleSubmit((formData: ExchangeParams) => onSubmit(formData));

  return (
    <FlexContainer>
      <>
        <Grid item xs={12}>
          <input hidden value={API_KEY} {...register("apiKey")} />
          <FormattedTextField
            id="from_symbol"
            label={LABELS.INPUT}
            variant="filled"
            error={hasError}
            helperText={helperText}
            inputProps={currencyCodeInputProps}
            {...formRegisterSettings}
          />
          <input hidden value="BRL" {...register("to_symbol")} />
        </Grid>
        {exchangeLoading ? (
          <Loading />
        ) : (
          <Grid item xs={12}>
            <ExchangeButton
              key="exchange_button"
              id="submit"
              variant="contained"
              onClick={handleExchangeButton()}
            >
              {LABELS.BUTTON}
            </ExchangeButton>
          </Grid>
        )}
        {hasExchangeData && (
          <>
            <CurrentExchange
              key="current_exchange"
              currentExchangeData={exchangeData}
            />
            <DailyExchange key={generateKey} formData={getValues()} />
          </>
        )}
      </>
    </FlexContainer>
  );
};

export default Form;
