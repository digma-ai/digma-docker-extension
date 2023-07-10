import { Trace } from "../Assets/AssetInsights/types";

export interface JaegerProps {
  traces: Trace[];
  environment: string;
  onClose: () => void;
  onSpanSelect: (span: SpanData) => void;
}

export interface JaegerMessageData {
  action: string;
  payload: unknown;
}

export interface SpanData {
  id: string;
  name: string;
  instrumentationLibrary: string;
  serviceName: string;
  function?: string;
  namespace?: string;
  spanCodeObjectId?: string;
  methodCodeObjectId?: string;
  environment?: string;
}

export interface GetSpansData {
  spans: SpanData[];
}

export interface SpanInsight {
  type: string;
  importance: number;
}
