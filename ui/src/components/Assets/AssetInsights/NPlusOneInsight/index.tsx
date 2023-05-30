import { ExtendedAssetEntry } from "../../types";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import * as s from "./styles";
import { NPlusOneInsightProps } from "./types";

export const NPlusOneInsight = (props: NPlusOneInsightProps) => {
  console.log("NPlusOneInsight");
  console.log(props.insight);

  const handleSpanLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  // TODO: look up for the asset by spanCodeObjectId
  const asset = undefined;

  console.log(asset);

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
