import styled from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.span<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  user-select: none;
  border-radius: 4px;

  ${({ isSelected, hasEntries }) =>
    !isSelected && !hasEntries ? "color: #b3b3b3;" : ""}
`;

export const EntryCount = styled.span<ContainerProps>`
  margin-left: auto;
  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.text.primary
      : "#b3b3b3"};
`;
