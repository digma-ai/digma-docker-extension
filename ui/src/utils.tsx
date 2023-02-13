import { INSIGHT_TYPES } from "./components/App/types";
import { CodeMarkerPinIcon } from "./components/common/icons/CodeMarkerPinIcon";
import { EndpointIcon } from "./components/common/icons/EndpointIcon";
import { ScalesIcon } from "./components/common/icons/ScalesIcon";
import { SnailIcon } from "./components/common/icons/SnailIcon";
import { SpotIcon } from "./components/common/icons/SpotIcon";

const insightInfoMap: Record<string, JSX.Element> = {
  [INSIGHT_TYPES.HotSpot]: <SpotIcon size={20} />,
  [INSIGHT_TYPES.SlowEndpoint]: <SnailIcon size={20} />,
  [INSIGHT_TYPES.SpanScaling]: <ScalesIcon size={20} />,
  [INSIGHT_TYPES.SpanScalingRootCause]: <ScalesIcon size={20} />,
};

export const getInsightIcon = (type: string): JSX.Element => {
  return insightInfoMap[type] || <></>;
};

export const getCategoryInfo = (
  categoryId: string
): { label: string; icon: any } | undefined => {
  const categoryInfoMap: Record<string, { label: string; icon: any }> = {
    endpoints: {
      label: "Endpoints",
      icon: EndpointIcon,
    },
    consumers: {
      label: "Consumers",
      icon: EndpointIcon,
    },
    databaseQueries: {
      label: "Database queries",
      icon: EndpointIcon,
    },
    codeLocations: {
      label: "Code locations",
      icon: CodeMarkerPinIcon,
    },
  };

  return categoryInfoMap[categoryId];
};
