import { useTheme } from "styled-components";
import { timeAgo } from "../../../utils/timeAgo";
import { getInsightIcon, getInsightInfo } from "../../Assets/utils";
import { OpenTelemetryLogoIcon } from "../icons/OpenTelemetryLogoIcon";
import * as s from "./styles";
import { AssetEntryProps } from "./types";

export const AssetEntry = (props: AssetEntryProps) => {
  const theme = useTheme();

  const handleLinkClick = () => {
    // TODO:
  };

  return (
    <s.Container>
      <s.Header>
        <s.OpenTelemetryIconContainer>
          <OpenTelemetryLogoIcon />
        </s.OpenTelemetryIconContainer>
        <s.Link onClick={() => handleLinkClick()} title={props.name}>
          {props.name}
        </s.Link>
        <s.InsightIconsContainer>
          {props.insights.map((insight) => (
            <s.InsightIconContainer
              key={insight.type}
              title={getInsightInfo(insight.type)?.label || insight.type}
            >
              {getInsightIcon(insight, theme, 20)}
            </s.InsightIconContainer>
          ))}
        </s.InsightIconsContainer>
      </s.Header>
      <s.StatsContainer>
        <s.Stats>
          <s.Label>Services</s.Label>
          <s.ServicesContainer>
            <s.ServiceName>{props.services[0]}</s.ServiceName>
            {props.services.length > 1 && (
              <s.ServiceCounter title={props.services.slice(1).join(", ")}>
                +{props.services.length - 1}
              </s.ServiceCounter>
            )}
          </s.ServicesContainer>
        </s.Stats>
        <s.Stats>
          <s.Label>Performance</s.Label>
          <s.ValueContainer>
            {props.performance ? props.performance.value : "N/A"}
            {props.performance && <s.Suffix>{props.performance.unit}</s.Suffix>}
          </s.ValueContainer>
        </s.Stats>
        <s.Stats>
          <s.Label>Latest</s.Label>
          <s.ValueContainer title={new Date(props.lastSeenDateTime).toString()}>
            {timeAgo(props.lastSeenDateTime)}
            <s.Suffix>ago</s.Suffix>
          </s.ValueContainer>
        </s.Stats>
      </s.StatsContainer>
    </s.Container>
  );
};
