import { usePagination } from "../../../../hooks/usePagination";
import { roundTo } from "../../../../utils/roundTo";
import { CrosshairIcon } from "../../../common/icons/CrosshairIcon";
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

  const handleServiceLinkClick = (spanCodeObjectId: string) => {
    props.onAssetSelect(spanCodeObjectId);
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
            const firstService = flow.firstService;
            const firstServiceName = `${flow.firstService.service}:${flow.firstService.span}`;

            const lastService = flow.lastService;
            const traceId = flow.sampleTraceIds[0];

            return (
              <s.Flow key={i}>
                <s.FlowData>
                  <span>{roundTo(flow.percentage, 2)}% </span>
                  <s.FullSpanName>
                    <s.Description>{firstService.service}</s.Description>
                    {firstService ? (
                      <Link
                        onClick={() =>
                          handleServiceLinkClick(firstService.spanCodeObjectId)
                        }
                      >
                        {firstServiceName}
                      </Link>
                    ) : (
                      firstServiceName
                    )}
                  </s.FullSpanName>
                  {flow.intermediateSpan && (
                    <span> -&gt; {flow.intermediateSpan}</span>
                  )}
                  {lastService && (
                    <s.FullSpanName>
                      <s.Description>
                        {" "}
                        -&gt; {lastService.service}
                      </s.Description>
                      <Link
                        onClick={() =>
                          handleServiceLinkClick(lastService.spanCodeObjectId)
                        }
                      >
                        {lastService.span}
                      </Link>
                    </s.FullSpanName>
                  )}
                  {flow.lastServiceSpan && (
                    <span> -&gt; {flow.lastServiceSpan}</span>
                  )}
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
