import { PercentileKey } from "./types";

export const PERCENTILES: {
  label: string;
  percentile: number;
  key: PercentileKey;
}[] = [
  { label: "Median", percentile: 0.5, key: "p50" },
  { label: "Slowest 5%", percentile: 0.95, key: "p95" }
];
