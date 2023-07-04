import { roundTo } from "../../../../utils/roundTo";
import { CrosshairIcon } from "../../../common/icons/CrosshairIcon";
import { ExtendedAssetEntry } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { InsightCard } from "../InsightCard";
import { Pagination } from "../Pagination";
import { Link } from "../styles";
import { Trace } from "../types";
import * as s from "./styles";
import { TopUsageInsightProps } from "./types";

export const TopUsageInsight = (props: TopUsageInsightProps) => {
  const handleServiceLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  const handleTraceButtonClick = (trace: Trace) => {
    props.onTraceSelect(trace);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.FlowList>
          <Pagination assetId={props.asset.id}>
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

              const traceId = flow.sampleTraceIds[0];

              return (
                <s.Flow key={i}>
                  <s.FlowData>
                    <span>{roundTo(flow.percentage, 2)}% </span>
                    <s.FullSpanName>
                      <s.Description>{flow.firstService.service}</s.Description>
                      {firstServiceAsset ? (
                        <Link
                          onClick={() =>
                            handleServiceLinkClick(firstServiceAsset)
                          }
                        >
                          {firstServiceName}
                        </Link>
                      ) : (
                        firstServiceName
                      )}
                    </s.FullSpanName>
                    <span>
                      {flow.intermediateSpan && (
                        <> -&gt; {flow.intermediateSpan}</>
                      )}
                    </span>
                    {flow.lastService ? (
                      <s.FullSpanName>
                        <s.Description>
                          {flow.lastService.service}
                        </s.Description>
                        {lastServiceAsset ? (
                          <Link
                            onClick={() =>
                              handleServiceLinkClick(lastServiceAsset)
                            }
                          >
                            {flow.lastService.span}
                          </Link>
                        ) : (
                          flow.lastService.span
                        )}
                      </s.FullSpanName>
                    ) : null}

                    {flow.lastServiceSpan && <> -&gt; {flow.lastServiceSpan}</>}
                  </s.FlowData>
                  {traceId && (
                    <s.Button
                      icon={{ component: CrosshairIcon, size: 16 }}
                      onClick={() =>
                        handleTraceButtonClick({
                          name: firstServiceName,
                          id: traceId,
                        })
                      }
                    >
                      Trace
                    </s.Button>
                  )}
                </s.Flow>
              );
            })}
          </Pagination>
        </s.FlowList>
      }
    />
  );
};
