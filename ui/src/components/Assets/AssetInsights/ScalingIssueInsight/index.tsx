import { CrosshairIcon } from "../../../common/icons/CrosshairIcon";
import { trimEndpointScheme } from "../../utils/trimEndpointScheme";
import { InsightCard } from "../InsightCard";
import { Link } from "../styles";
import { Trace } from "../types";
import * as s from "./styles";
import { ScalingIssueInsightProps } from "./types";

export const ScalingIssueInsight = (props: ScalingIssueInsightProps) => {
  const handleLinkClick = (spanCodeObjectId: string) => {
    props.onAssetSelect(spanCodeObjectId);
  };

  const handleTraceButtonClick = (trace: Trace) => {
    props.onTraceSelect(trace);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.ContentContainer>
          <s.Description>
            {props.insight.shortDisplayInfo.description}
          </s.Description>
          <s.Stats>
            <s.Stat>
              <s.Description>Tested concurrency</s.Description>
              <span>{props.insight.maxConcurrency}</span>
            </s.Stat>
            <s.Stat>
              <s.Description>Duration</s.Description>
              <span>
                {props.insight.minDuration.value}{" "}
                {props.insight.minDuration.unit} -{" "}
                {props.insight.maxDuration.value}{" "}
                {props.insight.maxDuration.unit}
              </span>
            </s.Stat>
          </s.Stats>
          {props.insight.rootCauseSpans.length > 0 && (
            <s.List>
              <s.Description>Caused by:</s.Description>
              {props.insight.rootCauseSpans.map((span) => {
                const id = span.spanCodeObjectId;
                const spanName = span.displayName;
                const traceId = span.sampleTraceId;

                return (
                  <s.RootCause key={id}>
                    <span>
                      <Link onClick={() => handleLinkClick(id)}>
                        {spanName}
                      </Link>
                    </span>
                    {traceId && (
                      <s.Button
                        icon={{ component: CrosshairIcon, size: 16 }}
                        onClick={() =>
                          handleTraceButtonClick({
                            name: spanName,
                            id: traceId
                          })
                        }
                      >
                        Trace
                      </s.Button>
                    )}
                  </s.RootCause>
                );
              })}
            </s.List>
          )}
          {props.insight.affectedEndpoints.length > 0 && (
            <s.List>
              <s.Description>Affected endpoints:</s.Description>

              {props.insight.affectedEndpoints.map((endpoint) => {
                const id = endpoint.spanCodeObjectId;
                const endpointRoute = trimEndpointScheme(endpoint.route);

                return (
                  <span key={endpoint.route}>
                    <Link onClick={() => handleLinkClick(id)}>
                      {endpointRoute}
                    </Link>
                  </span>
                );
              })}
            </s.List>
          )}
        </s.ContentContainer>
      }
    />
  );
};
