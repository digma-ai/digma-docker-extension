import { Trace } from "../Assets/AssetInsights/types";

export interface JaegerProps {
  traces: Trace[];
  onClose: () => void;
}
