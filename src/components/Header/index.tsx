import { LABELS } from "../../constants";
import {
  FlexContainer,
  FormattedLogo,
  HeaderDivider,
} from "../../styles/styles";

const Header = () => {
  const mainTitleFormatted = LABELS.MAIN_TITLE.toUpperCase();

  return (
    <>
      <FlexContainer>
        <FormattedLogo />
        <HeaderDivider />
        <h1>{mainTitleFormatted}</h1>
      </FlexContainer>
    </>
  );
};

export default Header;
