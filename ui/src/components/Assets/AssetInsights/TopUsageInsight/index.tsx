import { roundTo } from "../../../../utils/roundTo";
import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { InsightCard } from "../InsightCard";
import { Pagination } from "../Pagination";
import { Link } from "../styles";
import * as s from "./styles";
import { TopUsageInsightProps } from "./types";

export const TopUsageInsight = (props: TopUsageInsightProps) => {
  console.log("TopUsageInsight");
  console.log(props.insight);

  const handleServiceLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.FlowList>
          <Pagination>
            {props.insight.flows.map((flow, i) => {
              const firstServiceAsset = findAssetBySpanCodeObjectId(
                props.assets,
                flow.firstService.spanCodeObjectId,
                props.asset.serviceName
              );
              const firstServiceName = `${flow.firstService.service}:${flow.firstService.span}`;

              const lastServiceAsset =
                flow.lastService &&
                findAssetBySpanCodeObjectId(
                  props.assets,
                  flow.lastService.spanCodeObjectId,
                  flow.lastService.service
                );
              const lastServiceName = `${flow.lastService?.service}:${flow.lastService?.span}`;

              return (
                <s.Flow key={i}>
                  {roundTo(flow.percentage, 2)}%{" "}
                  {firstServiceAsset ? (
                    <Link
                      onClick={() => handleServiceLinkClick(firstServiceAsset)}
                    >
                      {firstServiceName}
                    </Link>
                  ) : (
                    firstServiceName
                  )}
                  {flow.intermediateSpan && <> -&gt; {flow.intermediateSpan}</>}
                  {flow.lastService ? (
                    lastServiceAsset ? (
                      <Link
                        onClick={() => handleServiceLinkClick(lastServiceAsset)}
                      >
                        {lastServiceName}
                      </Link>
                    ) : (
                      lastServiceName
                    )
                  ) : null}
                  {flow.lastServiceSpan && <> -&gt; {flow.lastServiceSpan}</>}
                </s.Flow>
              );
            })}
          </Pagination>
        </s.FlowList>
      }
    />
  );
};
