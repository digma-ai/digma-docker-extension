import { roundTo } from "../../../../utils/roundTo";
import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import * as s from "./styles";
import { SpanBottleneckInsightProps } from "./types";

export const SpanBottleneckInsight = (props: SpanBottleneckInsightProps) => {
  console.log("SpanBottleneckInsight");
  console.log(props.insight);

  const handleSpanLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <>
          <s.Description>
            The following spans are slowing request handling
          </s.Description>
          <s.SpanList>
            {props.insight.spans.map((span) => {
              const asset = findAssetBySpanCodeObjectId(
                props.assets,
                span.spanInfo.spanCodeObjectId,
                props.asset.serviceName
              );

              const spanName = span.spanInfo.displayName;

              return (
                <s.SpanContainer key={span.spanInfo.spanCodeObjectId}>
                  <s.Span>
                    {asset ? (
                      <Link onClick={() => handleSpanLinkClick(asset)}>
                        {spanName}
                      </Link>
                    ) : (
                      spanName
                    )}
                  </s.Span>
                  <s.Description>
                    {`Slowing ${roundTo(
                      span.probabilityOfBeingBottleneck * 100,
                      2
                    )}% of the requests (~${
                      span.avgDurationWhenBeingBottleneck.value
                    } ${span.avgDurationWhenBeingBottleneck.unit})`}
                  </s.Description>
                </s.SpanContainer>
              );
            })}
          </s.SpanList>
        </>
      }
    />
  );
};
