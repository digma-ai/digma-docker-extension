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

              const traceId = flow.sampleTraceIds[0];

              return (
                <s.Flow key={i}>
                  <s.FlowData>
                    <span>
                      {roundTo(flow.percentage, 2)}%{" "}
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
                    </span>
                    <span>
                      {flow.intermediateSpan && (
                        <> -&gt; {flow.intermediateSpan}</>
                      )}
                    </span>
                    <span>
                      {flow.lastService ? (
                        lastServiceAsset ? (
                          <Link
                            onClick={() =>
                              handleServiceLinkClick(lastServiceAsset)
                            }
                          >
                            {lastServiceName}
                          </Link>
                        ) : (
                          lastServiceName
                        )
                      ) : null}
                      {flow.lastServiceSpan && (
                        <> -&gt; {flow.lastServiceSpan}</>
                      )}
                    </span>
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
