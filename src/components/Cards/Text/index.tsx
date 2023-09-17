import { LowerHigherField } from "../styles";
import { Formatter } from "../../../utils/Formatter";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const FormattedInfo: React.FC<{
  text: string;
  value: string | number;
  isComparison?: boolean;
}> = ({ text, value, isComparison = false }) => {
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
