import { AssetsData, ExtendedAssetEntry } from "../../types";
import { EndpointSlowestSpansInsight } from "../types";

export interface SpanBottleneckInsightProps {
  insight: EndpointSlowestSpansInsight;
  asset: ExtendedAssetEntry;
  assets: AssetsData;
  onAssetSelect: (asset: ExtendedAssetEntry) => void;
}
