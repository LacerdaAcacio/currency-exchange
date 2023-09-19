import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { FlexAlignedDiv, LowerHigherField, RightMarginedSpan } from "../styles";
import Formatter from "../../../utils/Formatter";
import { FormattedCardContentParams } from "../../../types/ParamsData";

function FormattedCardContent({
  text,
  value,
  isComparison = false,
}: FormattedCardContentParams) {
  const formattedValue = Formatter.money(value, 4);
  const isHigher = Boolean(Number(value) >= 0);

  return (
    <FlexAlignedDiv>
      <RightMarginedSpan>{text.toLocaleUpperCase()}:</RightMarginedSpan>
      {isComparison ? (
        <LowerHigherField isHigher={isHigher}>
          {value}% {isHigher ? <ExpandLess /> : <ExpandMore />}
        </LowerHigherField>
      ) : (
        <p>{formattedValue}</p>
      )}
    </FlexAlignedDiv>
  );
}

export default FormattedCardContent;
