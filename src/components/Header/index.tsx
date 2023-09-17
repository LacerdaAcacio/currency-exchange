// import { Divider } from '@mui/material';
import { ReactComponent as Logo } from "../../../src/assets/images/svg/logo.svg";
import { LABELS } from "../../constants";
import { ACTION_LABS_URL } from "../../constants/routes";
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
        {/* <Logo href={ACTION_LABS_URL} style={{ margin: "20px" }} /> */}
        {/* <div href={ACTION_LABS_URL}> */}
        <FormattedLogo />
        {/* </div> */}
        <HeaderDivider />
        <h1>{mainTitleFormatted}</h1>
      </FlexContainer>
    </>
  );
};

export default Header;
