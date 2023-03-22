import { Theme } from "@mui/material/styles";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
