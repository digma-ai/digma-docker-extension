import * as s from "./styles";
import { PageProps } from "./types";

export const Page = (props: PageProps) => (
  <s.Container>
    <s.Header>{props.header}</s.Header>
    <s.Divider />
    <s.MainContainer>{props.main}</s.MainContainer>
  </s.Container>
);
