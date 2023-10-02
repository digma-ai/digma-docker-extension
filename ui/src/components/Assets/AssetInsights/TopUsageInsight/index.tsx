import { usePagination } from "../../../../hooks/usePagination";
import { roundTo } from "../../../../utils/roundTo";
import { CrosshairIcon } from "../../../common/icons/CrosshairIcon";
import { ExtendedAssetEntryWithServices } from "../../types";
import { findAssetBySpanCodeObjectId } from "../../utils/findAssetBySpanCodeObjectId";
import { InsightCard } from "../InsightCard";
import { Pagination } from "../Pagination";
import { Link } from "../styles";
import { Trace } from "../types";
import * as s from "./styles";
import { TopUsageInsightProps } from "./types";

const PAGE_SIZE = 3;

export const TopUsageInsight = (props: TopUsageInsightProps) => {
  const [pageItems, page, setPage] = usePagination(
    props.insight.flows,
    PAGE_SIZE,
    props.insight.codeObjectId
  );

  const handleServiceLinkClick = (asset: ExtendedAssetEntryWithServices) => {
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
          {pageItems.map((flow, i) => {
            const firstServiceAsset = findAssetBySpanCodeObjectId(
              props.assets,
              flow.firstService.spanCodeObjectId
            );
            const firstServiceName = `${flow.firstService.service}:${flow.firstService.span}`;

            const lastServiceAsset =
              flow.lastService &&
              findAssetBySpanCodeObjectId(
                props.assets,
                flow.lastService.spanCodeObjectId
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
                      <s.Description>{flow.lastService.service}</s.Description>
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
                        id: traceId
                      })
                    }
                  >
                    Trace
                  </s.Button>
                )}
              </s.Flow>
            );
          })}
          <Pagination
            itemsCount={props.insight.flows.length}
            page={page}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        </s.FlowList>
      }
    />
  );
};
