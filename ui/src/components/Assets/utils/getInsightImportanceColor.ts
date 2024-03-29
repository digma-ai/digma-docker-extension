import { DefaultTheme } from "styled-components";

export const getInsightImportanceColor = (
  importance: number,
  theme: DefaultTheme
): string | undefined => {
  if (importance === 0) {
    return undefined;
  }
  if (importance < 3) {
    return theme.palette.mode === "light" ? "#e00036" : "#f93967";
  }
  if (importance < 5) {
    return theme.palette.mode === "light" ? "#e06c00" : "#ff810d";
  }
  if (importance < 7) {
    return theme.palette.mode === "light" ? "#e8b500" : "#ffcb14";
  }

  return theme.palette.mode === "light" ? "#1dc693" : "#67d28b";
};
