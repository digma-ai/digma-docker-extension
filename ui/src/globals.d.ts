export {};

export type Environment = "JetBrains" | "VS Code" | "Other";

export type Mode = "light" | "dark" | "dark-jetbrains";

declare global {
  interface Window {
    theme?: unknown;
    environment?: unknown;
    mainFont?: unknown;
    codeFont?: unknown;
  }
}

export interface Duration {
  value: number;
  unit: string;
  raw: number;
}
