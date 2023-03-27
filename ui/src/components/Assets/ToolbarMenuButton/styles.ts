import MuiButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const Button = styled(MuiButton)`
  display: flex;
  gap: 10px;
  padding: 10px 20px 10px 16px;
  width: 170px;
  color: ${({ theme }) =>
    theme.palette.mode === "light" ? "#677285" : "#7794ab"};
  background: ${({ theme }) =>
    theme.palette.mode === "light" ? "#fff" : "#1C262d"};
  border: 1.5px solid
    ${({ theme }) => (theme.palette.mode === "light" ? "#e1e2e6" : "#364754")};
`;

export const Label = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
`;
