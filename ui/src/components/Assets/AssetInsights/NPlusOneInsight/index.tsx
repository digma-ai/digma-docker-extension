import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import * as s from "./styles";
import { NPlusOneInsightProps } from "./types";

export const NPlusOneInsight = (props: NPlusOneInsightProps) => {
  const handleSpanLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  const asset = props.insight.clientSpanCodeObjectId
    ? findAssetBySpanCodeObjectId(
        props.assets,
        props.insight.clientSpanCodeObjectId,
        props.asset.serviceName
      )
    : undefined;

  const spanName = props.insight.clientSpanName;

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.ContentContainer>
          <s.Description>Check the following SELECT statement:</s.Description>
          <span>
            {asset ? (
              <Link onClick={() => handleSpanLinkClick(asset)}>{spanName}</Link>
            ) : (
              spanName
            )}
          </span>
          <s.Stats>
            <s.Stat>
              <s.Description>Repeats</s.Description>
              <span>{props.insight.occurrences} (median)</span>
            </s.Stat>
            <s.Stat>
              <s.Description>Duration</s.Description>
              <span>
                {props.insight.duration.value} {props.insight.duration.unit}
              </span>
            </s.Stat>
          </s.Stats>
        </s.ContentContainer>
      }
    />
  );
};
