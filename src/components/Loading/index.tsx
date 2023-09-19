import { Backdrop, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default Loading;
