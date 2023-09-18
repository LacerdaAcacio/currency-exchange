// import { FlexContainer } from "../../styles/styles";
// import { useExchange } from "../../hooks/useExchange";
// import { AccordionDetails, AccordionSummary } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import Cards from "../Cards";
// import { Formatter } from "../../utils/Formatter";
// import { DailyExchangeParams } from "../../types/ParamsData";
// import { DailyExchangeData } from "../../types/DailyExchangeData";
// import { useFetchExchange } from "../../hooks/useFetchExchange";
// import { LABELS } from "../../constants";
// import Loading from "../Loading";
// import { StyledAccordion } from "./styles";
// import { useEffect } from "react";

// const DailyExchange = ({ formData }: DailyExchangeParams) => {
//   const {
//     dailyExchangeExpanded,
//     getLastThirtyDays,
//     generateKey,
//     handleExpand,
//   } = useExchange();

//   const { exchangeData, exchangeLoading, hasExchangeData, dailyValues } =
//     useFetchExchange();

//   const dailyTitle = LABELS.DAILY_TITLE.toUpperCase();

//   const lastThirtyDays =
//     hasExchangeData && dailyExchangeExpanded
//       ? (getLastThirtyDays(exchangeData?.data) as DailyExchangeData[])
//       : [];

//   const compareCloseToPrevious = (data: DailyExchangeData, index: number) => {
//     const currentClose = Number(data.close);
//     const previousClose = Number(
//       lastThirtyDays[index + 1]?.close || currentClose,
//     );
//     const comparisonPercentage = Formatter.ruleOfThreePercent(
//       currentClose,
//       previousClose,
//     );

//     const result = Number(comparisonPercentage) - 100;
//     return result.toFixed(2);
//   };

//   const mapFunction = (data: DailyExchangeData, index: number) => {
//     const comparison = compareCloseToPrevious(data, index);
//     console.log(data, index, comparison);
//     return (
//       <FlexContainer key={generateKey}>
//         <Cards
//           key={generateKey}
//           dailyExchangeData={data}
//           comparison={comparison}
//         />
//       </FlexContainer>
//     );
//   };

//   useEffect(() => {
//     console.log(dailyValues);
//     console.log(lastThirtyDays);
//     console.log(exchangeData);
//   }, [dailyValues]);

//   return (
//     <>
//       {exchangeLoading ? (
//         <Loading />
//       ) : (
//         <StyledAccordion
//           aria-busy={exchangeLoading}
//           expanded={dailyExchangeExpanded}
//           // expanded={dailyExchangeExpanded && hasExchangeData}
//           onChange={() => handleExpand(formData)}
//         >
//           <AccordionSummary
//             expandIcon={dailyExchangeExpanded ? <RemoveIcon /> : <AddIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <p>{dailyTitle}</p>
//           </AccordionSummary>
//           <AccordionDetails
//             style={{
//               background: "#F4F4F4",
//               height: "250px",
//               overflowY: "auto",
//             }}
//           >
//             {// hasExchangeData &&
//             exchangeData?.data?.map(
//               (data: DailyExchangeData, index: number) => {
//                 const comparison = compareCloseToPrevious(data, index);
//                 console.log(data, index, comparison);
//                 return (
//                   <FlexContainer key={generateKey}>
//                     <Cards
//                       key={generateKey}
//                       dailyExchangeData={data}
//                       comparison={comparison}
//                     />
//                   </FlexContainer>
//                 );
//               },
//             )}
//           </AccordionDetails>
//         </StyledAccordion>
//       )}
//     </>
//   );
// };

// export default DailyExchange;

import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import { API_KEY, LABELS } from "../../constants";
import {
  DailyExchangeCard,
  ExchangeButton,
  ExchangeContainer,
  DailyExchangeDivider,
  FlexContainer,
} from "../../styles/styles";
import { useForm } from "react-hook-form";
// import { FormData } from "../../types/FormData";
import { useExchange } from "../../hooks/useExchange";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Cards from "../Cards";
import { v4 as uuidv4 } from "uuid";
import { Formatter } from "../../utils/Formatter";
import { useFetchExchange } from "../../hooks/useFetchExchange";
// import { DateTimeField } from "@mui/x-date-pickers";
// import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
// import { useQuery } from "react-query";

const DailyExchange = (formData: any) => {
  const [expanded, setExpanded] = useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { getLastThirtyDays } = useExchange();

  const { onSubmit, exchangeData, hasExchangeData } = useFetchExchange();

  const handleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      onSubmit(formData.formData, true);
    }
  };

  const lastThirtyDays =
    hasExchangeData && expanded ? getLastThirtyDays(exchangeData?.data) : [];

  // const fromToSymbol = `${dailyExchangeData?.fromSymbol}/BRL`;

  useEffect(() => {
    console.log(exchangeData);
    console.log(hasExchangeData);
    console.log(lastThirtyDays);
  }, [exchangeData]);

  useEffect(() => {
    console.log(formData.formData);
  }, [formData]);

  const compareCloseToPrevious = (data: any, index: number) => {
    // return data.map((item, index) => {
    const currentClose = Number(data.close);
    const previousClose = Number(
      lastThirtyDays[index + 1]?.close || currentClose,
    );

    // const comparison = () => {
    //   if (currentClose > previousClose) return "greater";
    //   if (currentClose < previousClose) return "lesser";
    //   return "equal";
    // };
    const comparisonPercentage = Formatter.ruleOfThreePercent(
      currentClose,
      previousClose,
    );

    const result = comparisonPercentage - 100;

    // return comparison();
    return result.toFixed(2);
    // });
  };

  const mapFunction = (data: any, index: number) => {
    const comparison = compareCloseToPrevious(data, index);
    return (
      <FlexContainer key={uuidv4()}>
        <Cards
          key={uuidv4()}
          dailyExchangeData={data}
          comparison={comparison}
        />
      </FlexContainer>
    );
  };

  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={handleExpand}
        style={{ borderBottom: "2px solid #07B0FB", width: "98%" }}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveIcon style={{ color: "#07B0FB" }} />
            ) : (
              // <IconButton>
              <AddIcon style={{ color: "#07B0FB" }} />
              // </IconButton>
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          // disabled={!hasExchangeData}
        >
          <Typography>LAST 30 DAYS</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{ background: "#F4F4F4", height: "250px", overflowY: "auto" }}
        >
          {/* <FlexContainer> */}
          {
            hasExchangeData && lastThirtyDays?.map(mapFunction)
            //   (data: any) => {
            //   return (
            //     <FlexContainer key={uuidv4()}>
            //       <Cards key={uuidv4()} dailyExchangeData={data} />
            //     </FlexContainer>
            //   );
            // })
          }
          {/* </FlexContainer> */}
        </AccordionDetails>
      </Accordion>
      {/* <DailyExchangeDivider /> */}
      {/* <ExchangeContainer>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <h2>{LABELS.CURRENT_TITLE}</h2>
            </div>
            <div>{dailyExchangeData?.lastUpdatedAt}</div> */}
      {/* <DateTimeField
          label="Basic date time field"
          value={dailyExchangeData?.lastUpdatedAt}
          disabled
        /> */}
      {/* </Grid>
          <Grid item xs={6}>
            <h1>{fromToSymbol}</h1>
          </Grid>
        </Grid> */}
      {/* <Grid item xs={12}> */}
      {/* <DailyExchangeCard>
          <h1>{formattedExchangeRate}</h1>
        </DailyExchangeCard> */}
      {/* </Grid> */}
      {/* </ExchangeContainer> */}
    </>
  );
};

export default DailyExchange;
