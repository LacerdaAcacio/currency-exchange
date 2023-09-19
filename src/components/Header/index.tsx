import { LABELS } from "../../constants";
import {
  FlexContainer,
  FormattedLogo,
  HeaderDivider,
} from "../../styles/styles";

function Header() {
  const mainTitleFormatted = LABELS.MAIN_TITLE.toUpperCase();

  return (
    <FlexContainer>
      <FormattedLogo />
      <HeaderDivider />
      <h1>{mainTitleFormatted}</h1>
    </FlexContainer>
  );
}

export default Header;
