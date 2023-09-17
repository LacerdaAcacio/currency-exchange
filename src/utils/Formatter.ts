export const Formatter = {
  money: (value: number | string, decimals: number = 2) => {
    console.log(value);
    return `R$ ${Number(value).toFixed(decimals)}`;
  },

  date: (inputDate: string) => {
    const date = new Date(inputDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Os meses vão de 0 (janeiro) a 11 (dezembro)
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}h${minutes}`;
  },

  ruleOfThreePercent: (
    multiplying: string | number,
    divisor: string | number,
    decimals = 2,
    multiplier?: string | number,
  ) => {
    const multiplyingNumberType = Number(multiplying || 0);
    const divisorNumberType = Number(divisor || 0);
    const multiplierNumberType = Number(multiplier || 100);
    const hasAllValues = Boolean(
      multiplyingNumberType && divisorNumberType && multiplierNumberType,
    );

    const result = hasAllValues
      ? (multiplyingNumberType * multiplierNumberType) / divisorNumberType
      : 0;
    return result.toFixed(decimals);
  },
};
