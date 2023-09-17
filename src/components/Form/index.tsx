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
import { v4 as uuidv4 } from "uuid";
import { ExchangeParams } from "../../types/ParamsData";
import { Backdrop, CircularProgress } from "@mui/material";

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const {
    onSubmit,
    exchangeData,
    hasExchangeData,
    inputProps,
    exchangeLoading,
  } = useExchange();

  const hasError = Boolean(errors.from_symbol);
  const helperText = (errors?.from_symbol?.message || "") as string;
  const generateKey = uuidv4();

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
      {exchangeLoading ? (
        <Backdrop open={true}>
          <CircularProgress color="primary" />
        </Backdrop>
      ) : (
        <>
          <Grid item xs={12}>
            <input hidden value={API_KEY} {...register("apiKey")} />
            <FormattedTextField
              id="from_symbol"
              label={LABELS.INPUT}
              variant="filled"
              error={hasError}
              helperText={helperText}
              inputProps={inputProps}
              {...formRegisterSettings}
            />
            <input hidden value="BRL" {...register("to_symbol")} />
          </Grid>
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
          {/* {hasExchangeData && ( */}
          <>
            <CurrentExchange
              key="current_exchange"
              currentExchangeData={exchangeData}
            />
            <DailyExchange key={generateKey} formData={getValues()} />
          </>
          {/* )} */}
        </>
      )}
    </FlexContainer>
  );
};

export default Form;
