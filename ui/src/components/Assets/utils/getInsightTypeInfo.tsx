import { MemoExoticComponent } from "react";
import { AlarmClockIcon } from "../../common/icons/AlarmClockIcon";
import { BottleneckIcon } from "../../common/icons/BottleneckIcon";
import { ClockWithTicksIcon } from "../../common/icons/ClockWithTicksIcon";
import { MeterHighIcon } from "../../common/icons/MeterHighIcon";
import { MeterLowIcon } from "../../common/icons/MeterLowIcon";
import { MeterMediumIcon } from "../../common/icons/MeterMediumIcon";
import { PieChartIcon } from "../../common/icons/PieChartIcon";
import { SQLDatabaseIcon } from "../../common/icons/SQLDatabaseIcon";
import { ScalesIcon } from "../../common/icons/ScalesIcon";
import { SineIcon } from "../../common/icons/SineIcon";
import { SnailIcon } from "../../common/icons/SnailIcon";
import { SpotIcon } from "../../common/icons/SpotIcon";
import { WarningCircleIcon } from "../../common/icons/WarningCircleIcon";
import { IconProps } from "../../common/icons/types";
import { InsightType } from "../types";

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
    [InsightType.EndpointDurationSlowdown]: {
      icon: SnailIcon,
      label: "Duration Slowdown Source Detected",
    },
    [InsightType.EndpointBreakdown]: {
      icon: PieChartIcon,
      label: "Request Breakdown",
    },
  };

  return insightInfoMap[type];
};
