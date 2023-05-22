import { MemoExoticComponent } from "react";
import { DefaultTheme } from "styled-components";
import { AlarmClockIcon } from "../common/icons/AlarmClockIcon";
import { BottleneckIcon } from "../common/icons/BottleneckIcon";
import { ClockWithTicksIcon } from "../common/icons/ClockWithTicksIcon";
import { CodeMarkerPinIcon } from "../common/icons/CodeMarkerPinIcon";
import { DatabaseIcon } from "../common/icons/DatabaseIcon";
import { EndpointIcon } from "../common/icons/EndpointIcon";
import { HTTPClientIcon } from "../common/icons/HTTPClientIcon";
import { MeterHighIcon } from "../common/icons/MeterHighIcon";
import { MeterLowIcon } from "../common/icons/MeterLowIcon";
import { MeterMediumIcon } from "../common/icons/MeterMediumIcon";
import { SQLDatabaseIcon } from "../common/icons/SQLDatabaseIcon";
import { ScalesIcon } from "../common/icons/ScalesIcon";
import { SineIcon } from "../common/icons/SineIcon";
import { SnailIcon } from "../common/icons/SnailIcon";
import { SpotIcon } from "../common/icons/SpotIcon";
import { UserIcon } from "../common/icons/UserIcon";
import { WarningCircleIcon } from "../common/icons/WarningCircleIcon";
import { IconProps } from "../common/icons/types";
import { InsightType } from "./types";

export const getInsightTypeInfo = (
  type: string
):
  | {
      icon: MemoExoticComponent<(props: IconProps) => JSX.Element>;
      label: string;
    }
  | undefined => {
  const insightInfoMap: Record<
    string,
    {
      icon: MemoExoticComponent<(props: IconProps) => JSX.Element>;
      label: string;
    }
  > = {
    [InsightType.Errors]: {
      icon: WarningCircleIcon,
      label: "Errors",
    },
    [InsightType.HotSpot]: {
      icon: SpotIcon,
      label: "Error Hotspot",
    },
    [InsightType.SlowEndpoint]: {
      icon: SnailIcon,
      label: "Slow Endpoint",
    },
    [InsightType.LowUsage]: {
      icon: MeterLowIcon,
      label: "Endpoint Low Traffic",
    },
    [InsightType.NormalUsage]: {
      icon: MeterMediumIcon,
      label: "Endpoint Normal Level of Traffic",
    },
    [InsightType.HighUsage]: {
      icon: MeterHighIcon,
      label: "Endpoint High Traffic",
    },
    [InsightType.SlowestSpans]: {
      icon: BottleneckIcon,
      label: "Span Bottleneck",
    },
    [InsightType.EndpointSpanNPlusOne]: {
      icon: SQLDatabaseIcon,
      label: "Suspected N-Plus-1",
    },
    [InsightType.SpanNPlusOne]: {
      icon: SQLDatabaseIcon,
      label: "Suspected N-Plus-1",
    },
    [InsightType.SpanEndpointBottleneck]: {
      icon: BottleneckIcon,
      label: "Bottleneck",
    },
    [InsightType.SpanScaling]: {
      icon: ScalesIcon,
      label: "Scaling Issue Found",
    },
    [InsightType.SpanScalingRootCause]: {
      icon: ScalesIcon,
      label: "Scaling Issue Root Cause Found",
    },
    [InsightType.SpanUsages]: {
      icon: SineIcon,
      label: "Top Usage",
    },
    [InsightType.SpanDurations]: {
      icon: AlarmClockIcon,
      label: "Duration",
    },
    [InsightType.SpanDurationBreakdown]: {
      icon: ClockWithTicksIcon,
      label: "Duration Breakdown",
    },
  };

  return insightInfoMap[type];
};

export const getInsightImportanceColor = (
  importance: number,
  theme: DefaultTheme
): string | undefined => {
  if (importance === 0) {
    return undefined;
  }
  if (importance < 3) {
    return theme.palette.mode === "light" ? "#e00036" : "#f93967";
  }
  if (importance < 5) {
    return theme.palette.mode === "light" ? "#e06c00" : "#ff810d";
  }
  if (importance < 7) {
    return theme.palette.mode === "light" ? "#e8b500" : "#ffcb14";
  }

  return theme.palette.mode === "light" ? "#1dc693" : "#67d28b";
};

export const getAssetTypeInfo = (
  assetTypeId: string
):
  | {
      label: string;
      icon?: MemoExoticComponent<(props: IconProps) => JSX.Element>;
    }
  | undefined => {
  const assetTypeInfoMap: Record<
    string,
    {
      label: string;
      icon?: MemoExoticComponent<(props: IconProps) => JSX.Element>;
    }
  > = {
    Endpoint: {
      label: "Endpoints",
      icon: EndpointIcon,
    },
    EndpointClient: {
      label: "HTTP Clients",
      icon: HTTPClientIcon,
    },
    Consumer: {
      label: "Consumers",
      icon: UserIcon,
    },
    DatabaseQueries: {
      label: "Database queries",
      icon: DatabaseIcon,
    },
    CodeLocation: {
      label: "Code locations",
      icon: CodeMarkerPinIcon,
    },
    Other: {
      label: "Other",
    },
  };

  return assetTypeInfoMap[assetTypeId];
};
