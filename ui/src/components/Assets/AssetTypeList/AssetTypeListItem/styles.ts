import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  user-select: none;
  border-radius: 4px;
`;

export const EntryCount = styled.span<{ isSelected: boolean }>`
  margin-left: auto;
  color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.text.primary
      : "#b3b3b3"};
`;
