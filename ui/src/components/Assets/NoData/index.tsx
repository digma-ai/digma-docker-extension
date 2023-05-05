import Typography from "@mui/material/Typography";
import * as s from "./styles";
import { NoDataProps } from "./types";

export const NoData = (props: NoDataProps) => (
  <s.NoDataContainer>
    <s.NoDataContent>
      {props.icon}
      <s.NoDataTextContainer>
        <Typography variant={"subtitle1"}>{props.title}</Typography>
        <s.NoDataText>{props.description}</s.NoDataText>
      </s.NoDataTextContainer>
      {props.additionalContent}
    </s.NoDataContent>
  </s.NoDataContainer>
);
