import { AssetsData } from "./types";

export const data: AssetsData = {
  serviceAssetsEntries: [
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateScore",
            displayName: "UpdateScore",
            instrumentationLibrary: "CodeObjectsRepository",
            spanCodeObjectId: "span:CodeObjectsRepository$_$UpdateScore",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.7, unit: "ms", raw: 5695200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.43, unit: "ms", raw: 10430600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.446881Z",
          p50: { value: 5.7, unit: "ms", raw: 5695200 },
          p95: { value: 10.43, unit: "ms", raw: 10430600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessEndpointsByAccount",
            displayName: "ProcessEndpointsByAccount",
            instrumentationLibrary: "ContinuousEndpointUsageJob",
            spanCodeObjectId:
              "span:ContinuousEndpointUsageJob$_$ProcessEndpointsByAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 136.26, unit: "sec", raw: 136261514800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 174.89, unit: "sec", raw: 174887624600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.532611Z",
          p50: { value: 136.26, unit: "sec", raw: 136261514800 },
          p95: { value: 174.89, unit: "sec", raw: 174887624600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Collecting span samples",
            displayName: "Collecting span samples",
            instrumentationLibrary: "ContinuousSpanUsageJob",
            spanCodeObjectId:
              "span:ContinuousSpanUsageJob$_$Collecting span samples",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.361413Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessSpanFlows",
            displayName: "ProcessSpanFlows",
            instrumentationLibrary: "ContinuousSpanUsageJob",
            spanCodeObjectId: "span:ContinuousSpanUsageJob$_$ProcessSpanFlows",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:02.28068Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessSpansByAccount",
            displayName: "ProcessSpansByAccount",
            instrumentationLibrary: "ContinuousSpanUsageJob",
            spanCodeObjectId:
              "span:ContinuousSpanUsageJob$_$ProcessSpansByAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.178098Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessSpansSamplesByAccount",
            displayName: "ProcessSpansSamplesByAccount",
            instrumentationLibrary: "ContinuousSpanUsageJob",
            spanCodeObjectId:
              "span:ContinuousSpanUsageJob$_$ProcessSpansSamplesByAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.161491Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "EndpointRelativeDurationAnalyzer",
            spanCodeObjectId: "span:EndpointRelativeDurationAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.58, unit: "ms", raw: 16583800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.58, unit: "ms", raw: 16583800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.154717Z",
          p50: { value: 16.58, unit: "ms", raw: 16583800 },
          p95: { value: 16.58, unit: "ms", raw: 16583800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetAllEndpoints",
            displayName: "GetAllEndpoints",
            instrumentationLibrary: "EndpointsRepository",
            spanCodeObjectId: "span:EndpointsRepository$_$GetAllEndpoints",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.05, unit: "ms", raw: 2048700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.05, unit: "ms", raw: 2048700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:02.258748Z",
          p50: { value: 2.05, unit: "ms", raw: 2048700 },
          p95: { value: 2.05, unit: "ms", raw: 2048700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointUsageInEnvironments",
            displayName: "GetEndpointUsageInEnvironments",
            instrumentationLibrary: "EndpointsRepository",
            spanCodeObjectId:
              "span:EndpointsRepository$_$GetEndpointUsageInEnvironments",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.2, unit: "ms", raw: 1199900 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 3.42,
                unit: "ms",
                raw: 3415344.999999999
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "D3ECC6A63E0C3E95",
            startTime: "2023-03-06T09:10:49.372561Z",
            duration: { value: 1.2, unit: "ms", raw: 1199300 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.95927Z",
          p50: { value: 1.2, unit: "ms", raw: 1199900 },
          p95: { value: 3.42, unit: "ms", raw: 3415344.999999999 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertUsage",
            displayName: "UpsertUsage",
            instrumentationLibrary: "EndpointsRepository",
            spanCodeObjectId: "span:EndpointsRepository$_$UpsertUsage",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.01, unit: "sec", raw: 2013789300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.01, unit: "sec", raw: 2013789300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.455456Z",
          p50: { value: 2.01, unit: "sec", raw: 2013789300 },
          p95: { value: 2.01, unit: "sec", raw: 2013789300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "EndpointUsageAnalyzer",
            spanCodeObjectId: "span:EndpointUsageAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 243.22, unit: "ms", raw: 243219800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 243.22, unit: "ms", raw: 243219800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.885366Z",
          p50: { value: 243.22, unit: "ms", raw: 243219800 },
          p95: { value: 243.22, unit: "ms", raw: 243219800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ApplyLogScaling",
            displayName: "ApplyLogScaling",
            instrumentationLibrary: "EndpointUsageAnalyzer",
            spanCodeObjectId: "span:EndpointUsageAnalyzer$_$ApplyLogScaling",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.7, unit: "μs", raw: 5700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 5.7, unit: "μs", raw: 5700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.134749Z",
          p50: { value: 5.7, unit: "μs", raw: 5700 },
          p95: { value: 5.7, unit: "μs", raw: 5700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointMeasurements",
            displayName: "GetEndpointMeasurements",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetEndpointMeasurements",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 62.25, unit: "ms", raw: 62248200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 62.25, unit: "ms", raw: 62248200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.19512Z",
          p50: { value: 62.25, unit: "ms", raw: 62248200 },
          p95: { value: 62.25, unit: "ms", raw: 62248200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointSlowSpans",
            displayName: "GetEndpointSlowSpans",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetEndpointSlowSpans",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.07, unit: "ms", raw: 10070100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.07, unit: "ms", raw: 10070100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.855499Z",
          p50: { value: 10.07, unit: "ms", raw: 10070100 },
          p95: { value: 10.07, unit: "ms", raw: 10070100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointsResponseTimeInfo",
            displayName: "GetEndpointsResponseTimeInfo",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetEndpointsResponseTimeInfo",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.51, unit: "ms", raw: 16505400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.51, unit: "ms", raw: 16505400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.495333Z",
          p50: { value: 16.51, unit: "ms", raw: 16505400 },
          p95: { value: 16.51, unit: "ms", raw: 16505400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointsUsage",
            displayName: "GetEndpointsUsage",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetEndpointsUsage",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 102.91, unit: "ms", raw: 102909000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 102.91, unit: "ms", raw: 102909000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.425079Z",
          p50: { value: 102.91, unit: "ms", raw: 102909000 },
          p95: { value: 102.91, unit: "ms", raw: 102909000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetHighlyOccuringDbSpans",
            displayName: "GetHighlyOccuringDbSpans",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetHighlyOccuringDbSpans",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 744.73, unit: "ms", raw: 744727300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 744.73, unit: "ms", raw: 744727300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.40417Z",
          p50: { value: 744.73, unit: "ms", raw: 744727300 },
          p95: { value: 744.73, unit: "ms", raw: 744727300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetMissingDailyUsagesDates",
            displayName: "GetMissingDailyUsagesDates",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetMissingDailyUsagesDates",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.93, unit: "ms", raw: 16932200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.93, unit: "ms", raw: 16932200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.175021Z",
          p50: { value: 16.93, unit: "ms", raw: 16932200 },
          p95: { value: 16.93, unit: "ms", raw: 16932200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanFlowSamples",
            displayName: "GetSpanFlowSamples",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanFlowSamples",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 18.91, unit: "ms", raw: 18914300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 91.81, unit: "ms", raw: 91809700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.650532Z",
          p50: { value: 18.91, unit: "ms", raw: 18914300 },
          p95: { value: 91.81, unit: "ms", raw: 91809700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanFlowStats",
            displayName: "GetSpanFlowStats",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanFlowStats",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.76, unit: "ms", raw: 10757450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.78, unit: "ms", raw: 14780600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.717674Z",
          p50: { value: 10.76, unit: "ms", raw: 10757450 },
          p95: { value: 14.78, unit: "ms", raw: 14780600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanMetadata",
            displayName: "GetSpanMetadata",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanMetadata",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.35, unit: "ms", raw: 52348900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 52.35, unit: "ms", raw: 52348900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.339281Z",
          p50: { value: 52.35, unit: "ms", raw: 52348900 },
          p95: { value: 52.35, unit: "ms", raw: 52348900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanUniqueList",
            displayName: "GetSpanUniqueList",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanUniqueList",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 817.32, unit: "ms", raw: 817315900 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 2.82,
                unit: "sec",
                raw: 2822586169.9999905
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.245504Z",
          p50: { value: 817.32, unit: "ms", raw: 817315900 },
          p95: { value: 2.82, unit: "sec", raw: 2822586169.9999905 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateHighlyOccuringSpansStats",
            displayName: "UpdateHighlyOccuringSpansStats",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$UpdateHighlyOccuringSpansStats",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 120, unit: "ms", raw: 119998500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 120, unit: "ms", raw: 119998500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.382456Z",
          p50: { value: 120, unit: "ms", raw: 119998500 },
          p95: { value: 120, unit: "ms", raw: 119998500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "QueryAsync",
            displayName: "QueryAsync",
            instrumentationLibrary: "InfluxClient",
            spanCodeObjectId: "span:InfluxClient$_$QueryAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.25, unit: "ms", raw: 52246000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.08, unit: "sec", raw: 1083772625 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.181122Z",
          p50: { value: 52.25, unit: "ms", raw: 52246000 },
          p95: { value: 1.08, unit: "sec", raw: 1083772625 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "WriteAsync",
            displayName: "WriteAsync",
            instrumentationLibrary: "InfluxClient",
            spanCodeObjectId: "span:InfluxClient$_$WriteAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 38.32, unit: "ms", raw: 38324600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 287.23, unit: "ms", raw: 287228600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.57558Z",
          p50: { value: 38.32, unit: "ms", raw: 38324600 },
          p95: { value: 287.23, unit: "ms", raw: 287228600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetCodeObjectInsights",
            displayName: "GetCodeObjectInsights",
            instrumentationLibrary: "InsightsService",
            spanCodeObjectId: "span:InsightsService$_$GetCodeObjectInsights",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.22, unit: "ms", raw: 6216100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.95, unit: "ms", raw: 16954325 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CBEFF4E88D153015730AB7B76C1E5EA2",
            spanId: "3603A74FA5B67D32",
            startTime: "2023-03-06T09:10:49.327343Z",
            duration: { value: 5.91, unit: "ms", raw: 5907900 }
          },
          firstDataSeenTime: "2023-03-06T09:06:01.842848Z",
          p50: { value: 6.22, unit: "ms", raw: 6216100 },
          p95: { value: 16.95, unit: "ms", raw: 16954325 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Producer",
            displayName: "Producer",
            instrumentationLibrary: "MessageDispatcher",
            spanCodeObjectId: "span:MessageDispatcher$_$Producer",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.832376Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "PublishSpanMessages",
            displayName: "PublishSpanMessages",
            instrumentationLibrary: "MessageDispatcher",
            spanCodeObjectId: "span:MessageDispatcher$_$PublishSpanMessages",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.545387Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "018A6932414D07F485FA9D35D6B807",
            displayName:
              "\r\n            INSERT INTO spans(account_id, environment, instrumentation_library, span, slow_endpoints, high_trace_occurences, span_role, kind, original_name, span_code_object_id, display_name)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @InstrumentationLibrary, \r\n                   @Span,\r\n                   CAST(@SlowEndPointsJson AS JSON),\r\n                   CAST(@HightTraceOccurrencesJson AS JSON),\r\n                   @SpanRole,\r\n                   @Kind,\r\n                   @SpanOriginalName,\r\n                   @SpanCodeObjectId,\r\n                   @DisplayName)\r\n            ON CONFLICT (account_id, environment, instrumentation_library, span) \r\n            DO UPDATE SET\r\n                slow_endpoints=CAST(@SlowEndPointsJson AS JSON),\r\n                high_trace_occurences=CAST(@HightTraceOccurrencesJson AS JSON)",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$018A6932414D07F485FA9D35D6B807",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.142298Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "17CB10B849F1DA5F460C67A1B01434",
            displayName: "update spans set slow_endpoints=NULL",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$17CB10B849F1DA5F460C67A1B01434",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.352484Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "1A6645CBE4D55F5CA7B90FDAE2BB1B",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                route AS Route,\r\n                span AS Span,\r\n                service AS Service,\r\n                root_location AS RootLocation,\r\n                span_code_object_id AS SpanCodeObjectId,\r\n                code_object_id AS CodeObjectId,\r\n                usage_score AS UsageScore,\r\n                max_calls_1m AS MaxCallsIn1Min,\r\n                slow_spans AS SlowSpansJson,\r\n                highly_occuring_spans AS HighlyOccuringJson,\r\n                endpoints_median AS EndpointsMedian,\r\n                endpoints_median_of_medians AS EndpointsMedianOfMedians,\r\n                endpoints_median_of_p75 AS EndpointsMedianOfP75,\r\n                endpoints_p75 AS EndpointsP75,\r\n                min AS Min,\r\n                max AS Max,\r\n                mean AS Mean,\r\n                median AS Median,\r\n                p75 AS P75,\r\n                p95 AS P95,\r\n                p99 AS P99,\r\n                zscore as ZScore\r\n            FROM endpoints \r\n            WHERE account_id = @accountId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$1A6645CBE4D55F5CA7B90FDAE2BB1B",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.303987Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "8732D29743657C372B5F5EDC6F7757",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                code_object_id AS CodeObjectId,\r\n                instrumentation_library AS InstrumentationLibrary,\r\n                span AS Span,\r\n                duration_percentiles AS DurationPercentilesJson,\r\n                slow_endpoints AS SlowEndpointsJson,\r\n                high_trace_occurences AS HighTraceOccurencesJson,\r\n                periodic_percentiles AS PeriodicPercentilesJson,\r\n                span_role AS SpanRole,\r\n                kind AS Kind,\r\n                original_name AS SpanOriginalName,\r\n                span_code_object_id AS SpanCodeObjectId,\r\n                display_name AS DisplayName\r\n            FROM spans \r\n            WHERE account_id = @accountId \r\n             \r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$8732D29743657C372B5F5EDC6F7757",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.505818Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "C06B625F5551ED564D0C0E31610060",
            displayName:
              "\r\n            SELECT account_id  AS AccountId,\r\n                   environment AS Environment,\r\n                   flow_hash   AS FlowHash, \r\n                   json_data   AS JsonData\r\n            FROM   span_flows_meta\r\n            WHERE  account_id = @accountId\r\n              \r\n              AND  flow_hash = ANY(@flowHashes)\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C06B625F5551ED564D0C0E31610060",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.299838Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "D057A79FEB98EE5B9494FFE35107D9",
            displayName:
              "\r\n            UPDATE span_flows\r\n            SET count_by_flow = 0,\r\n                count_by_span = 0\r\n            WHERE account_id = @accountId AND \r\n                  updated_at IS NOT NULL AND\r\n                  updated_at < @idleDate",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$D057A79FEB98EE5B9494FFE35107D9",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.151713Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "E1ADA88472A51B56B3E5CEF9C9D3F2",
            displayName:
              "\r\n            SELECT environment AS Environment,\r\n                   span AS Name,\r\n                   display_name AS DisplayName,\r\n                   original_name AS OriginalName,\r\n                   instrumentation_library AS InstrumentationLibrary,\r\n                   span_code_object_id AS SpanCodeObjectId,\r\n                   code_object_id AS CodeObjectId,\r\n                   span_role AS Role,\r\n                   kind AS Kind\r\n            FROM spans\r\n            WHERE account_id = @accountId AND environment = ANY (@environments) AND span_code_object_id = @spanCodeObjectId\r\n            LIMIT 1\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$E1ADA88472A51B56B3E5CEF9C9D3F2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.877004Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute continuous_endpoints_usage",
            displayName: "execute continuous_endpoints_usage",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute continuous_endpoints_usage",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.145494Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute continuous_error_flows_scoring",
            displayName: "execute continuous_error_flows_scoring",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute continuous_error_flows_scoring",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.483481Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute continuous_span_duration_breakdown",
            displayName: "execute continuous_span_duration_breakdown",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute continuous_span_duration_breakdown",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.311281Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute continuous_spans_sample_collection",
            displayName: "execute continuous_spans_sample_collection",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute continuous_spans_sample_collection",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.167683Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute continuous_spans_usage",
            displayName: "execute continuous_spans_usage",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute continuous_spans_usage",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:02.103851Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute span_duration_insight",
            displayName: "execute span_duration_insight",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute span_duration_insight",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.772595Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute span_measurements_job",
            displayName: "execute span_measurements_job",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute span_measurements_job",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:02.285614Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute span_scaling_insight",
            displayName: "execute span_scaling_insight",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute span_scaling_insight",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:02.107548Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "execute span_scaling_root_cause_insight",
            displayName: "execute span_scaling_root_cause_insight",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute span_scaling_root_cause_insight",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.220759Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "SpanBottleneckAnalyzer",
            spanCodeObjectId: "span:SpanBottleneckAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.8, unit: "sec", raw: 2804703000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.8, unit: "sec", raw: 2804703000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.758271Z",
          p50: { value: 2.8, unit: "sec", raw: 2804703000 },
          p95: { value: 2.8, unit: "sec", raw: 2804703000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "AnalyzeEndpoint",
            displayName: "AnalyzeEndpoint",
            instrumentationLibrary: "SpanBottleneckAnalyzer",
            spanCodeObjectId: "span:SpanBottleneckAnalyzer$_$AnalyzeEndpoint",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.08, unit: "ms", raw: 10078900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.08, unit: "ms", raw: 10078900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.316063Z",
          p50: { value: 10.08, unit: "ms", raw: 10078900 },
          p95: { value: 10.08, unit: "ms", raw: 10078900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanBreakdownInsightJob",
            spanCodeObjectId: "span:SpanBreakdownInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.7, unit: "sec", raw: 2700869100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.74, unit: "sec", raw: 14735791200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.450936Z",
          p50: { value: 2.7, unit: "sec", raw: 2700869100 },
          p95: { value: 14.74, unit: "sec", raw: 14735791200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Producer",
            displayName: "Producer",
            instrumentationLibrary: "SpanBreakdownInsightJob",
            spanCodeObjectId: "span:SpanBreakdownInsightJob$_$Producer",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.7, unit: "sec", raw: 2700764800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.74, unit: "sec", raw: 14735719300 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.638564Z",
          p50: { value: 2.7, unit: "sec", raw: 2700764800 },
          p95: { value: 14.74, unit: "sec", raw: 14735719300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanDurationInsightJob",
            spanCodeObjectId: "span:SpanDurationInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3, unit: "sec", raw: 2998180500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.6, unit: "sec", raw: 11601203800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.198301Z",
          p50: { value: 3, unit: "sec", raw: 2998180500 },
          p95: { value: 11.6, unit: "sec", raw: 11601203800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanMeasurementsJob",
            spanCodeObjectId: "span:SpanMeasurementsJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.463446Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Producer",
            displayName: "Producer",
            instrumentationLibrary: "SpanMeasurementsJob",
            spanCodeObjectId: "span:SpanMeasurementsJob$_$Producer",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.344708Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "SpanRepititionAnalyzer",
            spanCodeObjectId: "span:SpanRepititionAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 893.25, unit: "ms", raw: 893248900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 893.25, unit: "ms", raw: 893248900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.459976Z",
          p50: { value: 893.25, unit: "ms", raw: 893248900 },
          p95: { value: 893.25, unit: "ms", raw: 893248900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanScalingInsightJob",
            spanCodeObjectId: "span:SpanScalingInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.03, unit: "sec", raw: 3027915600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.73, unit: "sec", raw: 11731125600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.433507Z",
          p50: { value: 3.03, unit: "sec", raw: 3027915600 },
          p95: { value: 11.73, unit: "sec", raw: 11731125600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanScalingRootCauseInsightJob",
            spanCodeObjectId: "span:SpanScalingRootCauseInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.09, unit: "sec", raw: 3086242800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.18, unit: "sec", raw: 11175018800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:02.270523Z",
          p50: { value: 3.09, unit: "sec", raw: 3086242800 },
          p95: { value: 11.18, unit: "sec", raw: 11175018800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ResetSpanFlowsIfIdle",
            displayName: "ResetSpanFlowsIfIdle",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$ResetSpanFlowsIfIdle",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.731699Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateScore",
            displayName: "UpdateScore",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpdateScore",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 13.9, unit: "ms", raw: 13898450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 23.06, unit: "ms", raw: 23062200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.549717Z",
          p50: { value: 13.9, unit: "ms", raw: 13898450 },
          p95: { value: 23.06, unit: "ms", raw: 23062200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertEndpointRelatedStats",
            displayName: "UpsertEndpointRelatedStats",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId:
              "span:SpansRepository$_$UpsertEndpointRelatedStats",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.479577Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertInsights",
            displayName: "UpsertInsights",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertInsights",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 8.81, unit: "ms", raw: 8813700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 43.5, unit: "sec", raw: 43504674300 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.408406Z",
          p50: { value: 8.81, unit: "ms", raw: 8813700 },
          p95: { value: 43.5, unit: "sec", raw: 43504674300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertSpanFlows",
            displayName: "UpsertSpanFlows",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertSpanFlows",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.77, unit: "ms", raw: 6771150 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 8.1, unit: "ms", raw: 8096100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.767111Z",
          p50: { value: 6.77, unit: "ms", raw: 6771150 },
          p95: { value: 8.1, unit: "ms", raw: 8096100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertSpanFlowSamples",
            displayName: "UpsertSpanFlowSamples",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertSpanFlowSamples",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 726.43, unit: "ms", raw: 726432200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.08, unit: "sec", raw: 1081184600 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:02.238404Z",
          p50: { value: 726.43, unit: "ms", raw: 726432200 },
          p95: { value: 1.08, unit: "sec", raw: 1081184600 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanBreakdownInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanBreakdownInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanBreakdownInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanBreakdownInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanBreakdownInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 84.96, unit: "ms", raw: 84964650 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 98.97, unit: "ms", raw: 98974100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:52:02.150535Z",
          p50: { value: 84.96, unit: "ms", raw: 84964650 },
          p95: { value: 98.97, unit: "ms", raw: 98974100 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencyHistogramMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencyHistogramMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencyHistogramMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencyHistogramMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencyHistogramMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 73.24, unit: "ms", raw: 73242300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 95.05, unit: "ms", raw: 95049000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:02.993911Z",
          p50: { value: 73.24, unit: "ms", raw: 73242300 },
          p95: { value: 95.05, unit: "ms", raw: 95049000 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencySummaryMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencySummaryMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencySummaryMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencySummaryMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencySummaryMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 58.12, unit: "ms", raw: 58119450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 71.4, unit: "ms", raw: 71395300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:03.003766Z",
          p50: { value: 58.12, unit: "ms", raw: 58119450 },
          p95: { value: 71.4, unit: "ms", raw: 71395300 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanDurationChangeMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanDurationChangeMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanDurationChangeMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationChangeMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationChangeMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 61.73, unit: "ms", raw: 61733400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 117.99, unit: "ms", raw: 117993400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:03.008784Z",
          p50: { value: 61.73, unit: "ms", raw: 61733400 },
          p95: { value: 117.99, unit: "ms", raw: 117993400 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanDurationInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanDurationInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanDurationInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 72.95, unit: "ms", raw: 72952000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 90.41, unit: "ms", raw: 90407200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:03.012056Z",
          p50: { value: 72.95, unit: "ms", raw: 72952000 },
          p95: { value: 90.41, unit: "ms", raw: 90407200 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanDurationSummaryMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanDurationSummaryMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanDurationSummaryMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationSummaryMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationSummaryMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 71.73, unit: "ms", raw: 71727700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 124.29, unit: "ms", raw: 124291400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:03.017148Z",
          p50: { value: 71.73, unit: "ms", raw: 71727700 },
          p95: { value: 124.29, unit: "ms", raw: 124291400 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanScalingInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanScalingInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanScalingInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 72.11, unit: "ms", raw: 72113200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 75.9, unit: "ms", raw: 75898700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:03.02562Z",
          p50: { value: 72.11, unit: "ms", raw: 72113200 },
          p95: { value: 75.9, unit: "ms", raw: 75898700 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanScalingRootCauseInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanScalingRootCauseInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanScalingRootCauseInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingRootCauseInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingRootCauseInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 79.25, unit: "ms", raw: 79245400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 86, unit: "ms", raw: 86002500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:03.028933Z",
          p50: { value: 79.25, unit: "ms", raw: 79245400 },
          p95: { value: 86, unit: "ms", raw: 86002500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "3324EEA23FE931291FBF29B5640FA3",
            displayName:
              "\r\n            SELECT instrumentation_library, span, environment\r\n            FROM spans \r\n            WHERE account_id = @accountId AND \r\n              environment = @environment AND\r\n              code_object_id = ANY(@methodCodeObjectIds)",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$3324EEA23FE931291FBF29B5640FA3",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.18, unit: "ms", raw: 1179000 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 3.15,
                unit: "ms",
                raw: 3149295.0000000014
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "671C7A9A1B58846F35CB5612C8ABBA7C",
            spanId: "E872A99367ECFC5F",
            startTime: "2023-03-06T09:10:49.356601Z",
            duration: { value: 955.8, unit: "μs", raw: 955800 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.392566Z",
          p50: { value: 1.18, unit: "ms", raw: 1179000 },
          p95: { value: 3.15, unit: "ms", raw: 3149295.0000000014 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "3C8781EFEE9577A2AB10FAFFC8EFA6",
            displayName:
              "\r\n            SELECT\r\n                'Span' AS Type,\r\n                environment AS Environment,\r\n                instrumentation_library AS InstrumentationLibrary,\r\n                created_at AS FirstRecordedTime,\r\n                updated_at AS LastRecordedTime,\r\n                span AS Name,\r\n                span AS GroupName,\r\n\r\n                CASE\r\n                    WHEN code_object_id is not null\r\n                    THEN CONCAT('method:',code_object_id)\r\n                    ELSE span_code_object_id\r\n                END AS CodeObjectId\r\n            FROM spans\r\n            WHERE account_id = @accountId\r\n            AND  (code_object_id = ANY (@methodCodeObjectIds)) ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$3C8781EFEE9577A2AB10FAFFC8EFA6",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.6, unit: "ms", raw: 1595600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.57, unit: "ms", raw: 3574500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "3781F15165EB4E32",
            startTime: "2023-03-06T09:10:49.372763Z",
            duration: { value: 1.41, unit: "ms", raw: 1405800 }
          },
          firstDataSeenTime: "2023-03-06T09:06:03.068848Z",
          p50: { value: 1.6, unit: "ms", raw: 1595600 },
          p95: { value: 3.57, unit: "ms", raw: 3574500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "4B9D7825EA480AA372670981725B03",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                code_object_id AS CodeObjectId,\r\n                insight_type AS InsightType,\r\n                first_detected AS FirstDetected,\r\n                insight_data AS InsightData,\r\n                is_active AS IsActive,\r\n                last_detected AS LastDetected,\r\n                last_deactivated AS LastDeactivated,\r\n                custom_start_time AS CustomStartTime,\r\n                actual_start_time AS ActualStartTime\r\n            \r\n            FROM code_object_insights \r\n            WHERE account_id = @accountId AND\r\n                  is_active = true",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$4B9D7825EA480AA372670981725B03",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 180.47, unit: "ms", raw: 180473800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 207.37, unit: "ms", raw: 207369100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.412539Z",
          p50: { value: 180.47, unit: "ms", raw: 180473800 },
          p95: { value: 207.37, unit: "ms", raw: 207369100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "557FB5997D46DEDBD1054A7AB66434",
            displayName:
              "\r\n            INSERT INTO code_object_insights(account_id, environment, code_object_id, insight_type, insight_data, is_active, first_detected, last_detected, last_deactivated, actual_start_time)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @CodeObjectId, \r\n                   @InsightType,\r\n                   CAST(@InsightData AS JSON),\r\n                   @IsActive,\r\n                   @FirstDetected,\r\n                   @LastDetected,\r\n                   @LastDeactivated,\r\n                   @ActualStartTime)\r\n            ON CONFLICT (account_id,environment, code_object_id, insight_type) \r\n            DO UPDATE SET \r\n                insight_data = CAST(@InsightData AS JSON),\r\n                is_active = @IsActive, \r\n                last_detected = @LastDetected,  \r\n                actual_start_time = @ActualStartTime",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$557FB5997D46DEDBD1054A7AB66434",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.28, unit: "ms", raw: 6278500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 69.03, unit: "ms", raw: 69030800 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.236238Z",
          p50: { value: 6.28, unit: "ms", raw: 6278500 },
          p95: { value: 69.03, unit: "ms", raw: 69030800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "56A58B8C70EAA20E2EA303C461292E",
            displayName:
              "\r\n            SELECT environment, min(created_at), max(updated_at)\r\n            FROM endpoints\r\n            WHERE account_id=@accountId\r\n            GROUP BY environment\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$56A58B8C70EAA20E2EA303C461292E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.52, unit: "ms", raw: 1515000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.02, unit: "ms", raw: 3022730 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "E58D52F1EBF4E9EE6A9C5203FFAF3C17",
            spanId: "77D4704EAB878464",
            startTime: "2023-03-06T09:10:49.341576Z",
            duration: { value: 1.07, unit: "ms", raw: 1065800 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.006256Z",
          p50: { value: 1.52, unit: "ms", raw: 1515000 },
          p95: { value: 3.02, unit: "ms", raw: 3022730 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "5CFDD26A22A92573242711496DC90C",
            displayName:
              "select MAX(sample_date) from span_flow_trace_samples where sample_type='General' and account_id='00000000-0000-0000-0000-000000000000'",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$5CFDD26A22A92573242711496DC90C",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.63, unit: "ms", raw: 3633900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.13, unit: "ms", raw: 7134200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.880817Z",
          p50: { value: 3.63, unit: "ms", raw: 3633900 },
          p95: { value: 7.13, unit: "ms", raw: 7134200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "66FC673DFE3EFE8A3F564B78BF7C62",
            displayName:
              "\r\n            INSERT INTO span_flow_trace_samples(index, service, span, account_id, environment, flow_hash, span_id, trace_id, instrumentation_library, sample_date, sample_type)\r\n            VALUES (@Index,\r\n                    @Service,\r\n                    @Span, \r\n                    @AccountId, \r\n                    @Environment,\r\n                    @FlowHash, \r\n                    @SpanId,\r\n                    @TraceId,\r\n                    @InstrumentationLibrary,\r\n                    @SampleDate,\r\n                    @SampleType\r\n                    )\r\n\r\n            ON CONFLICT ON CONSTRAINT span_flow_trace_samples_index_environment_service_instrumen_key\r\n            DO UPDATE SET\r\n                span_id = @SpanId, \r\n                trace_id = @TraceId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$66FC673DFE3EFE8A3F564B78BF7C62",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.03, unit: "ms", raw: 7032050 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.86, unit: "ms", raw: 16858700 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.803851Z",
          p50: { value: 7.03, unit: "ms", raw: 7032050 },
          p95: { value: 16.86, unit: "ms", raw: 16858700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "9002F5FD0D8FC9CEC4D68EA8D6FC04",
            displayName:
              "\r\n            SELECT environment, min(created_at), max(updated_at)\r\n            FROM spans\r\n            WHERE account_id=@accountId\r\n            GROUP BY environment\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$9002F5FD0D8FC9CEC4D68EA8D6FC04",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.55, unit: "ms", raw: 1547450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 4.01, unit: "ms", raw: 4010150 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "E58D52F1EBF4E9EE6A9C5203FFAF3C17",
            spanId: "36CED052A189246E",
            startTime: "2023-03-06T09:10:49.341695Z",
            duration: { value: 1.89, unit: "ms", raw: 1893500 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.076712Z",
          p50: { value: 1.55, unit: "ms", raw: 1547450 },
          p95: { value: 4.01, unit: "ms", raw: 4010150 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "996E8C571176F86633AD8345BABFCA",
            displayName:
              "\r\n            SELECT\r\n                'Endpoint' AS Type,\r\n                CONCAT('endpoint:',inputs.id) AS CodeObjectId,\r\n                ep.environment AS Environment,\r\n                ep.span AS Name,\r\n                ep.route AS GroupName,\r\n\r\n                ep.created_at AS FirstRecordedTime,\r\n                ep.updated_at AS LastRecordedTime\r\n            FROM (VALUES (@a0, @b0, @c0)) AS inputs (id, root_location, route)\r\n            JOIN endpoints AS ep ON\r\n                (\r\n                    (ep.root_location = inputs.root_location AND ep.route = inputs.route)\r\n                    OR (ep.code_object_id = inputs.id)\r\n                )\r\n                AND ep.account_id = @accountId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$996E8C571176F86633AD8345BABFCA",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.14, unit: "ms", raw: 1139100 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 3.35,
                unit: "ms",
                raw: 3348734.999999999
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "71AECB5D8727AA63",
            startTime: "2023-03-06T09:10:49.372626Z",
            duration: { value: 1.12, unit: "ms", raw: 1120600 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.999883Z",
          p50: { value: 1.14, unit: "ms", raw: 1139100 },
          p95: { value: 3.35, unit: "ms", raw: 3348734.999999999 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B1919E65A98D4EF8B6BC8483467DD2",
            displayName:
              "\r\n            SELECT\r\n                coi.environment AS Environment,\r\n                coi.code_object_id AS CodeObjectId,\r\n                coi.insight_type AS InsightType,\r\n                coi.first_detected AS FirstDetected,\r\n                coi.insight_data AS InsightData,\r\n                coi.is_active AS IsActive,\r\n                coi.last_detected AS LastDetected,\r\n                coi.last_deactivated AS LastDeactivated,\r\n                coi.custom_start_time AS CustomStartTime,\r\n                coi.actual_start_time AS ActualStartTime\r\n\r\n            FROM (VALUES (@a0)) AS inputs (id)\r\n            JOIN code_object_insights AS coi ON \r\n                coi.code_object_id=inputs.id \r\n            WHERE coi.account_id = @accountId AND coi.is_active = TRUE AND coi.environment = @environment",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B1919E65A98D4EF8B6BC8483467DD2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.16, unit: "ms", raw: 1160000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 6.45, unit: "ms", raw: 6447150 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CBEFF4E88D153015730AB7B76C1E5EA2",
            spanId: "0D2A3368D90B6BD8",
            startTime: "2023-03-06T09:10:49.332385Z",
            duration: { value: 848.5, unit: "μs", raw: 848500 }
          },
          firstDataSeenTime: "2023-03-06T09:06:01.932274Z",
          p50: { value: 1.16, unit: "ms", raw: 1160000 },
          p95: { value: 6.45, unit: "ms", raw: 6447150 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B488BB9D107608CF7EFF7E3FC256E3",
            displayName:
              "\r\n            INSERT INTO endpoints(service, route, span, account_id, environment, usage_score, max_calls_1m,\r\n                                  slow_spans, highly_occuring_spans, endpoints_median, endpoints_median_of_medians, endpoints_median_of_p75, \r\n                                  endpoints_p75, min, max, mean, median, p75, p95, p99, zscore, root_location, span_code_object_id, code_object_id)\r\n            VALUES(@Service, \r\n                   @Route,\r\n                   @Span, \r\n                   @AccountId, \r\n                   @Environment,\r\n                   @UsageScore, \r\n                   @MaxCallsIn1Min,\r\n                   CAST(@SlowSpansJson AS json),\r\n                   CAST(@HighlyOccuringJson AS json),\r\n                   @AllRequestsP50,\r\n                   0,\r\n                   @AllEndpointsMean,\r\n                   @AllRequestsP75,\r\n                   0,\r\n                   0,\r\n                   0,\r\n                   @Duration,\r\n                   0,\r\n                   0,\r\n                   0,\r\n                   @ZScore,\r\n                   @RootLocation,\r\n                   @SpanCodeObjectId,\r\n                   @CodeObjectId)\r\n            ON CONFLICT (service, route, account_id, environment, root_location) \r\n            DO UPDATE SET \r\n                usage_score = @UsageScore,\r\n                max_calls_1m  = @MaxCallsIn1Min,\r\n                slow_spans = CAST(@SlowSpansJson AS json),\r\n                highly_occuring_spans = CAST(@HighlyOccuringJson AS json),\r\n                endpoints_median  = @AllRequestsP50,\r\n                endpoints_median_of_medians  = @AllEndpointsMean,\r\n                endpoints_median_of_p75 = 0,\r\n                endpoints_p75  = @AllRequestsP75,\r\n                min  = 0,\r\n                max  = 0,\r\n                mean  = 0,\r\n                median  = @Duration,\r\n                p75  = 0,\r\n                p95  = 0,\r\n                p99  = 0,\r\n                zscore = @ZScore,\r\n                span = @Span,\r\n                span_code_object_id = @SpanCodeObjectId,\r\n                code_object_id = @CodeObjectId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B488BB9D107608CF7EFF7E3FC256E3",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.65, unit: "ms", raw: 3645800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.65, unit: "ms", raw: 3645800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.847815Z",
          p50: { value: 3.65, unit: "ms", raw: 3645800 },
          p95: { value: 3.65, unit: "ms", raw: 3645800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B6524E03F4EA2D4D2CA980AD5E177B",
            displayName:
              "\r\nWITH norm AS\r\n( \r\nSELECT \r\nt.error_source_uid,\r\nt.unhandled,\r\nt.recency,\r\n        t.day_avg,\r\nt.unexpected,\r\nCASE \r\nWHEN t.max_slope = t.min_slope THEN 0\r\nELSE (t.trend_slope-t.min_slope)/(t.max_slope-t.min_slope)\r\nEND AS trend_slope_normalize,\r\nCASE \r\nWHEN t.max_wma = t.min_wma THEN 0\r\nELSE (t.wma-t.min_wma)/(t.max_wma-t.min_wma)\r\nEND AS moving_avg_normalize\r\nFROM(\r\nSELECT \r\nes.uid as error_source_uid, \r\nes.wma, \r\nes.trend_slope, \r\nes.recency,\r\nes.day_avg,\r\nes.unhandled,\r\nes.unexpected,\r\nMIN(es.trend_slope) OVER (PARTITION BY co.account_id, co.environment)  AS min_slope ,  \r\nMAX(es.trend_slope) OVER (PARTITION BY co.account_id, co.environment) AS max_slope,\r\nMIN(es.wma) OVER (PARTITION BY co.account_id, co.environment)  AS min_wma ,  \r\nMAX(es.wma) OVER (PARTITION BY co.account_id, co.environment) AS max_wma\r\nFROM code_objects co \r\nINNER JOIN \r\n(\r\nSELECT es.uid, es.code_object_uid,\r\nSUM(ef.moving_avg) as wma, \r\nMAX(ef.trend_slope) as trend_slope,\r\nMAX(ef.recency) as recency,\r\nSUM(ef.day_avg) as day_avg,\r\nCASE\r\nWHEN bool_or(ef.handled = false) = true THEN 1\r\nELSE 0\r\nEND unhandled,\r\nCASE\r\nWHEN bool_and(ef.unexpected = true) = true THEN true\r\nELSE false\r\nEND unexpected\r\nFROM  errors_source es\r\nINNER JOIN error_source_error_flow esef ON esef.error_source_uid = es.uid \r\nINNER JOIN error_flows ef ON ef.uid = esef.error_flow_uid\r\nGROUP BY es.uid \r\n) es\r\nON es.code_object_uid = co.uid\r\n) t\r\n)\r\nUPDATE errors_source es\r\nSET unhandled = n.unhandled,\r\n    unexpected = n.unexpected,\r\ntrend_slope_normalize = n.trend_slope_normalize,\r\nmoving_avg_normalize = n.moving_avg_normalize,\r\nrecency = n.recency,\r\n    day_avg = n.day_avg,\r\nscore = n.unhandled_score_unit+n.trend_slope_score_unit+n.moving_avg_score_unit+n.recency_score_unit,\r\nunhandled_score_unit = n.unhandled_score_unit,\r\ntrend_slope_score_unit = n.trend_slope_score_unit,\r\nmoving_avg_score_unit = n.moving_avg_score_unit,\r\nrecency_score_unit = n.recency_score_unit\r\nFROM\r\n(\r\nSELECT  error_source_uid,\r\nunhandled, \r\nunexpected, \r\ntrend_slope_normalize, \r\nmoving_avg_normalize, \r\nrecency,\r\n            day_avg,\r\n    round(100 * 0.5 * unhandled) AS unhandled_score_unit,\r\nround(100 * 0.25 * \r\nCASE \r\nWHEN trend_slope_normalize IS NULL THEN 0\r\nELSE trend_slope_normalize\r\nEND) AS trend_slope_score_unit,\r\nround(100 * 0.25 * moving_avg_normalize) as moving_avg_score_unit,\r\nround(100 * 0.2 * \r\nCASE \r\nWHEN trend_slope_normalize IS NOT NULL THEN 0\r\nELSE recency\r\nEND) AS recency_score_unit\r\n FROM norm\r\n) n\r\nWHERE n.error_source_uid = es.uid",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B6524E03F4EA2D4D2CA980AD5E177B",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.87, unit: "ms", raw: 11866550 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 22.98, unit: "ms", raw: 22984300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.442931Z",
          p50: { value: 11.87, unit: "ms", raw: 11866550 },
          p95: { value: 22.98, unit: "ms", raw: 22984300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "C22F4325D28B0BE65C08ACB2C8ECD6",
            displayName:
              "\r\nSELECT environment, min(created_at), max(updated_at)\r\n            FROM error_flows\r\n            WHERE account_id=@accountId\r\n            GROUP BY environment\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C22F4325D28B0BE65C08ACB2C8ECD6",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 923.6, unit: "μs", raw: 923600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.7, unit: "ms", raw: 2703060 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "FFE47BA4C5027924",
            startTime: "2023-03-06T09:10:49.374333Z",
            duration: { value: 910.5, unit: "μs", raw: 910500 }
          },
          firstDataSeenTime: "2023-03-06T09:06:03.154038Z",
          p50: { value: 923.6, unit: "μs", raw: 923600 },
          p95: { value: 2.7, unit: "ms", raw: 2703060 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "C3FFB8B4A1803C183D2DD736022856",
            displayName:
              "\r\n            INSERT INTO span_flows(service, span, account_id, environment, flow_hash, count_by_flow, count_by_span, instrumentation_library, code_object_id, span_code_object_id)\r\n            VALUES(\r\n                @Service, \r\n                @Span, \r\n                @AccountId, \r\n                @Environment,\r\n                @FlowHash, \r\n                @FlowOccurrences,\r\n                @SpanOccurrences,\r\n                @InstrumentationLibrary,\r\n                @CodeObjectId,\r\n                @SpanCodeObjectId\r\n            )\r\n            ON CONFLICT ON CONSTRAINT span_flows_unique_key\r\n            DO UPDATE SET\r\n                count_by_flow = @FlowOccurrences, \r\n                count_by_span = @SpanOccurrences,\r\n                code_object_id = @CodeObjectId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C3FFB8B4A1803C183D2DD736022856",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.18, unit: "ms", raw: 6183600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.97, unit: "ms", raw: 7967700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.208342Z",
          p50: { value: 6.18, unit: "ms", raw: 6183600 },
          p95: { value: 7.97, unit: "ms", raw: 7967700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "C69DE909E30AEF52398B89079C5764",
            displayName:
              "\r\n            UPDATE code_objects co1\r\n            SET score = round(co2.score)\r\n            FROM(\r\n            select co.uid, avg(es.score) as score\r\n            from code_objects as co\r\n            inner join errors_source as es\r\n            on es.code_object_uid = co.uid\r\n            group by co.uid\r\n            ) co2\r\n            WHERE co2.uid = co1.uid",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C69DE909E30AEF52398B89079C5764",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.41, unit: "ms", raw: 5414450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.38, unit: "ms", raw: 10376600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.277615Z",
          p50: { value: 5.41, unit: "ms", raw: 5414450 },
          p95: { value: 10.38, unit: "ms", raw: 10376600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "D496FA8E3F9DFC5D460BF95C36DD3D",
            displayName:
              "\r\n\r\n            SELECT co.id AS CodeObjectId,\r\n            co.id AS Name,\r\n            co.id AS GroupName,\r\n            co.created_at AS FirstRecordedTime,\r\n            co.updated_at AS LastRecordedTime,\r\n            co.environment AS Environment,\r\n            'CodeObject' AS Type\r\nFROM code_objects AS co\r\nINNER JOIN errors_source AS es\r\nON co.uid = es.code_object_uid\r\n            INNER JOIN code_objects AS co1\r\n            ON co1.uid = es.raised_by_code_object_uid\r\nWHERE co.id=ANY(@codeObjectIds) and co.account_id = @accountId\r\n            ORDER BY es.last_error_timestamp DESC\r\n\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$D496FA8E3F9DFC5D460BF95C36DD3D",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.26, unit: "ms", raw: 1256900 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 4.05,
                unit: "ms",
                raw: 4047259.9999999995
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "C8D7B7933A5AFD85",
            startTime: "2023-03-06T09:10:49.372441Z",
            duration: { value: 1.62, unit: "ms", raw: 1618300 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.853362Z",
          p50: { value: 1.26, unit: "ms", raw: 1256900 },
          p95: { value: 4.05, unit: "ms", raw: 4047259.9999999995 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "D80305FD49E783563CC7734749B315",
            displayName:
              "\r\n            SELECT \r\n               es.uid AS Uid,\r\n               es.error_type AS Name,\r\n               co.environment AS Environment,\r\n\r\n               es.score AS Score,\r\n               co.id AS CodeObjectId,\r\n               co_s.id AS SourceCodeObjectId,\r\n               to_timestamp(es.first_error_timestamp/1000/1000/1000) AS FirstOccurenceTime,\r\n               to_timestamp(es.last_error_timestamp/1000/1000/1000) AS LastOccurenceTime,\r\n               es.handled_locally AS HandledLocally,\r\n               es.moving_avg_score_unit AS ScoreMovingAvg,\r\n               es.trend_slope_score_unit AS ScoreTrendSlope,\r\n               es.recency_score_unit AS ScoreRecency,\r\n               es.unhandled_score_unit AS ScoreUnhandled,\r\n               es.day_avg AS DayAvg\r\n            FROM errors_source AS es \r\n            JOIN code_objects AS co ON co.uid = es.code_object_uid\r\n            JOIN code_objects AS co_s ON co_s.uid = es.raised_by_code_object_uid\r\n            WHERE co.account_id = @accountId AND \r\n              co.environment = @environment AND\r\n              co.id = ANY(@codeObjectIds)\r\n        ORDER BY es.score DESC",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$D80305FD49E783563CC7734749B315",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.5, unit: "ms", raw: 1496100 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 7.63,
                unit: "ms",
                raw: 7632270.0000000065
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "671C7A9A1B58846F35CB5612C8ABBA7C",
            spanId: "59C4C37D56392D7D",
            startTime: "2023-03-06T09:10:49.357755Z",
            duration: { value: 11.37, unit: "ms", raw: 11374200 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.467138Z",
          p50: { value: 1.5, unit: "ms", raw: 1496100 },
          p95: { value: 7.63, unit: "ms", raw: 7632270.0000000065 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "ECE54D00D1BB7F89F390D99DD23B99",
            displayName:
              "\r\n            SELECT\r\n                'Span' AS Type,\r\n                environment AS Environment,\r\n                instrumentation_library AS InstrumentationLibrary,\r\n                created_at AS FirstRecordedTime,\r\n                updated_at AS LastRecordedTime,\r\n                span AS Name,\r\n                span AS GroupName,\r\n\r\n                CASE\r\n                    WHEN code_object_id is not null\r\n                    THEN CONCAT('method:',code_object_id)\r\n                    ELSE span_code_object_id\r\n                END AS CodeObjectId\r\n            FROM spans\r\n            WHERE account_id = @accountId\r\n            AND  (span_code_object_id = ANY (@spanCodeObjectIds)) ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$ECE54D00D1BB7F89F390D99DD23B99",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.8, unit: "ms", raw: 6795600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 6.8, unit: "ms", raw: 6795600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:51:01.524051Z",
          p50: { value: 6.8, unit: "ms", raw: 6795600 },
          p95: { value: 6.8, unit: "ms", raw: 6795600 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST api/CodeObjects/insights",
            displayName: "HTTP POST api/CodeObjects/insights",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP POST api/CodeObjects/insights",
            methodCodeObjectId:
              "Digma.Analytics.Controllers.CodeObjectsController$_$GetCodeObjectInsight(CodeObjectInsightQuery)",
            kind: "Server",
            codeObjectId:
              "Digma.Analytics.Controllers.CodeObjectsController$_$GetCodeObjectInsight(CodeObjectInsightQuery)"
          },
          assetType: "Endpoint",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST api/CodeObjects/insights",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.21, unit: "ms", raw: 7212000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.43, unit: "ms", raw: 10428835 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CBEFF4E88D153015730AB7B76C1E5EA2",
            spanId: "D5C73821388E0CAB",
            startTime: "2023-03-06T09:10:49.326582Z",
            duration: { value: 7.13, unit: "ms", raw: 7131600 }
          },
          firstDataSeenTime: "2023-03-06T09:06:01.736444Z",
          p50: { value: 7.21, unit: "ms", raw: 7212000 },
          p95: { value: 10.43, unit: "ms", raw: 10428835 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST api/CodeObjects/status",
            displayName: "HTTP POST api/CodeObjects/status",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP POST api/CodeObjects/status",
            methodCodeObjectId:
              "Digma.Analytics.Controllers.CodeObjectsController$_$GetUsageStatus(CodeObjectStatusQuery)",
            kind: "Server",
            codeObjectId:
              "Digma.Analytics.Controllers.CodeObjectsController$_$GetUsageStatus(CodeObjectStatusQuery)"
          },
          assetType: "Endpoint",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST api/CodeObjects/status",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 4.89, unit: "ms", raw: 4892500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.07, unit: "ms", raw: 10073370 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "1834C5F336A160A9",
            startTime: "2023-03-06T09:10:49.371632Z",
            duration: { value: 4.15, unit: "ms", raw: 4152000 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.720915Z",
          p50: { value: 4.89, unit: "ms", raw: 4892500 },
          p95: { value: 10.07, unit: "ms", raw: 10073370 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST api/CodeObjects/errors",
            displayName: "HTTP POST api/CodeObjects/errors",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP POST api/CodeObjects/errors",
            methodCodeObjectId:
              "Digma.Analytics.Controllers.CodeObjectsController$_$GetCodeObjectErrors(CodeObjectErrorsQuery)",
            kind: "Server",
            codeObjectId:
              "Digma.Analytics.Controllers.CodeObjectsController$_$GetCodeObjectErrors(CodeObjectErrorsQuery)"
          },
          assetType: "Endpoint",
          serviceName: "Digma.Analytics",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST api/CodeObjects/errors",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 4.13, unit: "ms", raw: 4130000 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 11.5,
                unit: "ms",
                raw: 11496470.000000004
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "671C7A9A1B58846F35CB5612C8ABBA7C",
            spanId: "227FA1C651D37EA9",
            startTime: "2023-03-06T09:10:49.355534Z",
            duration: { value: 14.13, unit: "ms", raw: 14133200 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.324473Z",
          p50: { value: 4.13, unit: "ms", raw: 4130000 },
          p95: { value: 11.5, unit: "ms", raw: 11496470.000000004 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "Digma.Analytics"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "WriteAsync",
            displayName: "WriteAsync",
            instrumentationLibrary: "InfluxClient",
            spanCodeObjectId: "span:InfluxClient$_$WriteAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 38.32, unit: "ms", raw: 38324600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 287.23, unit: "ms", raw: 287228600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:01.180033Z",
          p50: { value: 38.32, unit: "ms", raw: 38324600 },
          p95: { value: 287.23, unit: "ms", raw: 287228600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "705AAAF74000722E6C803D3F4A2CDE",
            displayName:
              "\r\n            INSERT INTO span_flows_meta(account_id, environment, flow_hash, json_data)\r\n            VALUES(  @AccountId, \r\n                     @Environment,\r\n                     @FlowHash, \r\n                CAST(@JsonData as json)\r\n                )\r\n            ON CONFLICT (account_id, environment, flow_hash) \r\n            DO UPDATE SET\r\n                json_data = CAST(@JsonData as json)",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$705AAAF74000722E6C803D3F4A2CDE",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:01.058237Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "C3A66BD2062F55D632E5ED097D24CA",
            displayName:
              "\r\n            INSERT INTO trace_scopes(account_id, environment, trace_scope_hash, trace_flow_display_name,\r\n                first_entry_service_name, first_entry_scope_id, first_entry_span_code_object_id, first_entry_method_code_object_id, \r\n                last_entry_service_name, last_entry_scope_id, last_entry_span_code_object_id, last_entry_method_code_object_id, \r\n                latest_trace_id, latest_trace_timestamp, latest_trace_duration, related_code_objects_as_json\r\n                )\r\n            VALUES ( @AccountId,\r\n                     @Environment,\r\n                     @TraceScopeHash,\r\n                     @TraceFlowDisplayName,\r\n                     @FirstEntryServiceName,\r\n                     @FirstEntryScopeId,\r\n                     @FirstEntrySpanCodeObjectId,\r\n                     @FirstEntryMethodCodeObjectId,\r\n                     @LastEntryServiceName,\r\n                     @LastEntryScopeId,\r\n                     @LastEntrySpanCodeObjectId,\r\n                     @LastEntryMethodCodeObjectId,\r\n                     @LatestTraceId,\r\n                     @LatestTraceTimestamp,\r\n                     @LatestTraceDuration,\r\n                CAST(@RelatedCodeObjectsAsJson as json)\r\n                   )\r\n            ON CONFLICT ON CONSTRAINT trace_scopes_unique_key_1\r\n            DO UPDATE SET\r\n                trace_flow_display_name = @TraceFlowDisplayName,\r\n                first_entry_service_name = @FirstEntryServiceName,\r\n                first_entry_scope_id = @FirstEntryScopeId,\r\n                first_entry_span_code_object_id = @FirstEntrySpanCodeObjectId,\r\n                first_entry_method_code_object_id = @FirstEntryMethodCodeObjectId,\r\n                last_entry_service_name = @LastEntryServiceName,\r\n                last_entry_scope_id = @LastEntryScopeId,\r\n                last_entry_span_code_object_id = @LastEntrySpanCodeObjectId,\r\n                last_entry_method_code_object_id = @LastEntryMethodCodeObjectId,\r\n                latest_trace_id = @LatestTraceId,\r\n                latest_trace_timestamp = @LatestTraceTimestamp,\r\n                latest_trace_duration = @LatestTraceDuration,\r\n                related_code_objects_as_json = CAST(@RelatedCodeObjectsAsJson as json)\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C3A66BD2062F55D632E5ED097D24CA",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.899372Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "DA3D4126B419A9CF84EA6C7A11D509",
            displayName:
              "\r\n            INSERT INTO span_descendants(span_uid, descendant_span_uid, descendant_flow_hash)\r\n\r\n            SELECT DISTINCT ON (1,2,3) subject.uid, descendant.uid, inputs.descendant_flow_hash\r\n            \r\n            FROM (VALUES (@AccountId_0, @Environment_0, @InstrumentationLibrary_0, @SpanName_0, @DescendantInstrumentationLibrary_0, @DescendantSpanName_0, @DescendantFlowHash_0)) AS inputs (account_id, environment, instrumentation_library, span_name, descendant_instrumentation_library, descendant_span_name, descendant_flow_hash)\r\n            \r\n            JOIN spans AS subject ON subject.account_id = inputs.account_id AND\r\n                                     subject.environment = inputs.environment AND\r\n                                     subject.instrumentation_library = inputs.instrumentation_library AND\r\n                                     subject.span = inputs.span_name\r\n                     \r\n            JOIN spans AS descendant ON descendant.account_id = inputs.account_id AND\r\n                                        descendant.environment = inputs.environment AND\r\n                                        descendant.instrumentation_library = inputs.descendant_instrumentation_library AND\r\n                                        descendant.span = inputs.descendant_span_name\r\n   \r\n            ON CONFLICT (span_uid, descendant_span_uid, descendant_flow_hash) \r\n            DO UPDATE SET updated_at = NOW()",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$DA3D4126B419A9CF84EA6C7A11D509",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:01.06229Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "EA76D2AEC5768E888E505460FAF4D2",
            displayName:
              "\r\n            SELECT account_id  AS AccountId,\r\n                   environment AS Environment,\r\n                   id          AS Id, \r\n                   json_data   AS JsonData\r\n            FROM   error_flows_meta\r\n            WHERE  account_id = @accountId \r\n              AND  environment = @environment\r\n              AND  id = ANY(@errorFlowIds)\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$EA76D2AEC5768E888E505460FAF4D2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:01.068668Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Upsert",
            displayName: "Upsert",
            instrumentationLibrary: "SpanFlowsRepository",
            spanCodeObjectId: "span:SpanFlowsRepository$_$Upsert",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.81381Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertDescendants",
            displayName: "UpsertDescendants",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertDescendants",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:01.187491Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "AddErrorFlowInstances",
            displayName: "AddErrorFlowInstances",
            instrumentationLibrary: "TraceCollector",
            spanCodeObjectId: "span:TraceCollector$_$AddErrorFlowInstances",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.860565Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "AddOrUpdateErrorSpanMeasurements",
            displayName: "AddOrUpdateErrorSpanMeasurements",
            instrumentationLibrary: "TraceCollector",
            spanCodeObjectId:
              "span:TraceCollector$_$AddOrUpdateErrorSpanMeasurements",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:01.151157Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "AddOrUpdateRootedSpanMeasurements",
            displayName: "AddOrUpdateRootedSpanMeasurements",
            instrumentationLibrary: "TraceCollector",
            spanCodeObjectId:
              "span:TraceCollector$_$AddOrUpdateRootedSpanMeasurements",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.999023Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessTrace",
            displayName: "ProcessTrace",
            instrumentationLibrary: "TraceCollector",
            spanCodeObjectId: "span:TraceCollector$_$ProcessTrace",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.853346Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateErrorFlows",
            displayName: "UpdateErrorFlows",
            instrumentationLibrary: "TraceCollector",
            spanCodeObjectId: "span:TraceCollector$_$UpdateErrorFlows",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.988981Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Upsert",
            displayName: "Upsert",
            instrumentationLibrary: "TraceScopesRepository",
            spanCodeObjectId: "span:TraceScopesRepository$_$Upsert",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.950432Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetTrace",
            displayName: "GetTrace",
            instrumentationLibrary: "TraceTempStorage",
            spanCodeObjectId: "span:TraceTempStorage$_$GetTrace",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.869048Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "LockTrace",
            displayName: "LockTrace",
            instrumentationLibrary: "TraceTempStorage",
            spanCodeObjectId: "span:TraceTempStorage$_$LockTrace",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.906435Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SetTrace",
            displayName: "SetTrace",
            instrumentationLibrary: "TraceTempStorage",
            spanCodeObjectId: "span:TraceTempStorage$_$SetTrace",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:00.933315Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "RPC opentelemetry.proto.collector.trace.v1.TraceService/Export",
            displayName:
              "opentelemetry.proto.collector.trace.v1.TraceService/Export",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$RPC opentelemetry.proto.collector.trace.v1.TraceService/Export",
            methodCodeObjectId:
              "opentelemetry.proto.collector.trace.v1$_$TraceService/Export",
            kind: "Server",
            codeObjectId:
              "opentelemetry.proto.collector.trace.v1$_$TraceService/Export"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Collector",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-02T14:12:01.225994Z",
          p50: null,
          p95: null
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "Digma.Collector"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetInsightEndpointData",
            displayName: "GetInsightEndpointData",
            instrumentationLibrary: "EndpointsRepository",
            spanCodeObjectId:
              "span:EndpointsRepository$_$GetInsightEndpointData",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.46, unit: "ms", raw: 1461200 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 519.35,
                unit: "ms",
                raw: 519351150.0000006
              }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "64E0ACA633FA2216",
            startTime: "2023-03-06T09:07:13.067095Z",
            duration: { value: 4.13, unit: "ms", raw: 4127400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.571336Z",
          p50: { value: 1.46, unit: "ms", raw: 1461200 },
          p95: { value: 519.35, unit: "ms", raw: 519351150.0000006 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CalcChildSpanDuration",
            displayName: "CalcChildSpanDuration",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$CalcChildSpanDuration",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 27.33, unit: "ms", raw: 27326900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 27.33, unit: "ms", raw: 27326900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "0C4E65664D6AD2F2",
            startTime: "2023-03-06T09:07:24.267538Z",
            duration: { value: 7.99, unit: "ms", raw: 7993600 }
          },
          firstDataSeenTime: "2023-03-06T09:09:09.292275Z",
          p50: { value: 27.33, unit: "ms", raw: 27326900 },
          p95: { value: 27.33, unit: "ms", raw: 27326900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanDurationLastChanges",
            displayName: "GetSpanDurationLastChanges",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpanDurationLastChanges",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 15.82, unit: "ms", raw: 15824200 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 392.66,
                unit: "ms",
                raw: 392656359.9999999
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "17E9526103D25555",
            startTime: "2023-03-06T09:07:13.435831Z",
            duration: { value: 211.35, unit: "ms", raw: 211345100 }
          },
          firstDataSeenTime: "2023-03-06T09:08:13.552363Z",
          p50: { value: 15.82, unit: "ms", raw: 15824200 },
          p95: { value: 392.66, unit: "ms", raw: 392656359.9999999 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanDurationPercentiles",
            displayName: "GetSpanDurationPercentiles",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpanDurationPercentiles",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 13.26, unit: "ms", raw: 13264900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 13.26, unit: "ms", raw: 13264900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "AE67A11E0629BCD8",
            startTime: "2023-03-06T09:07:13.893233Z",
            duration: { value: 185.28, unit: "ms", raw: 185280900 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.909537Z",
          p50: { value: 13.26, unit: "ms", raw: 13264900 },
          p95: { value: 13.26, unit: "ms", raw: 13264900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanPeriodicPercentiles",
            displayName: "GetSpanPeriodicPercentiles",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpanPeriodicPercentiles",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.34, unit: "ms", raw: 11344400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.34, unit: "ms", raw: 11344400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "F7D7F7F2E634A5DB",
            startTime: "2023-03-06T09:07:14.173665Z",
            duration: { value: 25.24, unit: "ms", raw: 25236400 }
          },
          firstDataSeenTime: "2023-03-06T09:09:04.074102Z",
          p50: { value: 11.34, unit: "ms", raw: 11344400 },
          p95: { value: 11.34, unit: "ms", raw: 11344400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpansDurationSummaries",
            displayName: "GetSpansDurationSummaries",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpansDurationSummaries",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 37.92, unit: "ms", raw: 37920100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.01, unit: "sec", raw: 1012900000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "2A2D0019B6EB9E44",
            startTime: "2023-03-06T09:07:12.897152Z",
            duration: { value: 538.67, unit: "ms", raw: 538665600 }
          },
          firstDataSeenTime: "2023-03-06T09:08:13.84057Z",
          p50: { value: 37.92, unit: "ms", raw: 37920100 },
          p95: { value: 1.01, unit: "sec", raw: 1012900000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetTraceIdsFromSpanSummaries",
            displayName: "GetTraceIdsFromSpanSummaries",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetTraceIdsFromSpanSummaries",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 18.29, unit: "ms", raw: 18292500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 18.29, unit: "ms", raw: 18292500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "1E15C28501DD9ECB",
            startTime: "2023-03-06T09:07:14.078521Z",
            duration: { value: 95.13, unit: "ms", raw: 95134200 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.988769Z",
          p50: { value: 18.29, unit: "ms", raw: 18292500 },
          p95: { value: 18.29, unit: "ms", raw: 18292500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "QueryAsync",
            displayName: "QueryAsync",
            instrumentationLibrary: "InfluxClient",
            spanCodeObjectId: "span:InfluxClient$_$QueryAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.25, unit: "ms", raw: 52246000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.08, unit: "sec", raw: 1083772625 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "B518951BA6BE7404",
            startTime: "2023-03-06T09:07:24.267544Z",
            duration: { value: 7.98, unit: "ms", raw: 7983900 }
          },
          firstDataSeenTime: "2023-03-06T09:09:09.918076Z",
          p50: { value: 52.25, unit: "ms", raw: 52246000 },
          p95: { value: 1.08, unit: "sec", raw: 1083772625 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetCodeObjectInsights",
            displayName: "GetCodeObjectInsights",
            instrumentationLibrary: "InsightsService",
            spanCodeObjectId: "span:InsightsService$_$GetCodeObjectInsights",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.22, unit: "ms", raw: 6216100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.95, unit: "ms", raw: 16954325 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "C4E012A741056E95",
            startTime: "2023-03-06T09:07:13.08772Z",
            duration: { value: 14.07, unit: "ms", raw: 14070900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.784161Z",
          p50: { value: 6.22, unit: "ms", raw: 6216100 },
          p95: { value: 16.95, unit: "ms", raw: 16954325 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-endpoint-slowest-spans-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-endpoint-slowest-spans-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-endpoint-slowest-spans-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.52, unit: "ms", raw: 2521750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 35.3, unit: "ms", raw: 35304100 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "9237B5683934811A7AC0909F46C2BC0E",
            spanId: "F01E07BB6AA7D7AE",
            startTime: "2023-03-06T09:07:13.003083Z",
            duration: { value: 7.95, unit: "ms", raw: 7947200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:08.133888Z",
          p50: { value: 2.52, unit: "ms", raw: 2521750 },
          p95: { value: 35.3, unit: "ms", raw: 35304100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-endpoint-slow-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-endpoint-slow-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-endpoint-slow-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.72, unit: "ms", raw: 3721300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.28, unit: "sec", raw: 1279776800 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "A85D1ABB33824F7A",
            startTime: "2023-03-06T09:07:13.045137Z",
            duration: { value: 13.35, unit: "ms", raw: 13353000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.117924Z",
          p50: { value: 3.72, unit: "ms", raw: 3721300 },
          p95: { value: 1.28, unit: "sec", raw: 1279776800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-endpoint-suspected-nplus-one-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-endpoint-suspected-nplus-one-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-endpoint-suspected-nplus-one-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.34, unit: "ms", raw: 2342750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 102.88, unit: "ms", raw: 102882700 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "73CAABF8463FAD69",
            startTime: "2023-03-06T09:07:13.066928Z",
            duration: { value: 7.6, unit: "ms", raw: 7603300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.296458Z",
          p50: { value: 2.34, unit: "ms", raw: 2342750 },
          p95: { value: 102.88, unit: "ms", raw: 102882700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-endpoint-usage-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-endpoint-usage-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-endpoint-usage-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 8.54, unit: "ms", raw: 8537600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 130.46, unit: "ms", raw: 130461400 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "C9B5CF1E94B6A571224F6779BD546374",
            spanId: "DF5A729C0CE472D6",
            startTime: "2023-03-06T09:07:13.066928Z",
            duration: { value: 45.63, unit: "ms", raw: 45633000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.478409Z",
          p50: { value: 8.54, unit: "ms", raw: 8537600 },
          p95: { value: 130.46, unit: "ms", raw: 130461400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-environment-assets::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-environment-assets::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-environment-assets::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 687.54, unit: "ms", raw: 687543100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.5, unit: "sec", raw: 2501468900 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "FF15A118D0D83E83",
            startTime: "2023-03-06T09:07:13.028522Z",
            duration: { value: 84.59, unit: "ms", raw: 84594500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.216667Z",
          p50: { value: 687.54, unit: "ms", raw: 687543100 },
          p95: { value: 2.5, unit: "sec", raw: 2501468900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-method-error-hotspot-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-method-error-hotspot-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-method-error-hotspot-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 22.77, unit: "ms", raw: 22766400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 41.24, unit: "ms", raw: 41237000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "3AC03BE1377ECE48",
            startTime: "2023-03-06T09:07:13.022363Z",
            duration: { value: 5.71, unit: "ms", raw: 5710800 }
          },
          firstDataSeenTime: "2023-03-06T09:09:08.076977Z",
          p50: { value: 22.77, unit: "ms", raw: 22766400 },
          p95: { value: 41.24, unit: "ms", raw: 41237000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-method-error-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-method-error-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-method-error-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 25.99, unit: "ms", raw: 25987850 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 32.53, unit: "ms", raw: 32527400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "EC438328ABD0F96C",
            startTime: "2023-03-06T09:07:13.055894Z",
            duration: { value: 21.19, unit: "ms", raw: 21194400 }
          },
          firstDataSeenTime: "2023-03-06T09:09:07.709327Z",
          p50: { value: 25.99, unit: "ms", raw: 25987850 },
          p95: { value: 32.53, unit: "ms", raw: 32527400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-breakdown-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-breakdown-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-breakdown-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 35.22, unit: "ms", raw: 35223500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 35.22, unit: "ms", raw: 35223500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "A5F1C4512B3EA973",
            startTime: "2023-03-06T09:07:24.266777Z",
            duration: { value: 9.98, unit: "ms", raw: 9980900 }
          },
          firstDataSeenTime: "2023-03-06T09:09:08.805886Z",
          p50: { value: 35.22, unit: "ms", raw: 35223500 },
          p95: { value: 35.22, unit: "ms", raw: 35223500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-duration-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-duration-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-duration-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 171.7, unit: "ms", raw: 171697200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 171.7, unit: "ms", raw: 171697200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "20B60F13E86B10FA",
            startTime: "2023-03-06T09:07:12.895277Z",
            duration: { value: 1.32, unit: "sec", raw: 1318577700 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.471124Z",
          p50: { value: 171.7, unit: "ms", raw: 171697200 },
          p95: { value: 171.7, unit: "ms", raw: 171697200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-endpoints-bottleneck-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-endpoints-bottleneck-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-endpoints-bottleneck-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.79, unit: "ms", raw: 11787950 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 13.67, unit: "ms", raw: 13673200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "9496F6BB75FBD5E2B4B2F93CCD61CC99",
            spanId: "53C1483960678B68",
            startTime: "2023-03-06T09:07:22.733596Z",
            duration: { value: 1.71, unit: "ms", raw: 1706800 }
          },
          firstDataSeenTime: "2023-03-06T09:08:07.958608Z",
          p50: { value: 11.79, unit: "ms", raw: 11787950 },
          p95: { value: 13.67, unit: "ms", raw: 13673200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-nplus-one-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-nplus-one-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-nplus-one-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.09, unit: "ms", raw: 7087250 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 12, unit: "ms", raw: 11997500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "3C9260530B279DAB",
            startTime: "2023-03-06T09:07:32.739713Z",
            duration: { value: 2.66, unit: "ms", raw: 2660100 }
          },
          firstDataSeenTime: "2023-03-06T09:09:10.852906Z",
          p50: { value: 7.09, unit: "ms", raw: 7087250 },
          p95: { value: 12, unit: "ms", raw: 11997500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-scaling-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-scaling-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-scaling-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.03, unit: "ms", raw: 2033400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.03, unit: "ms", raw: 2033400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "8B1B526635598CE3",
            startTime: "2023-03-06T09:07:12.077336Z",
            duration: { value: 1.31, unit: "ms", raw: 1311000 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.661352Z",
          p50: { value: 2.03, unit: "ms", raw: 2033400 },
          p95: { value: 2.03, unit: "ms", raw: 2033400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-scaling-root-cause-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-scaling-root-cause-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-scaling-root-cause-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 8.6, unit: "ms", raw: 8602700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 8.6, unit: "ms", raw: 8602700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "716E52162650F7CA",
            startTime: "2023-03-06T09:07:12.148241Z",
            duration: { value: 14.05, unit: "ms", raw: 14054900 }
          },
          firstDataSeenTime: "2023-03-06T09:08:08.537622Z",
          p50: { value: 8.6, unit: "ms", raw: 8602700 },
          p95: { value: 8.6, unit: "ms", raw: 8602700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-usage-insight::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-usage-insight::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-usage-insight::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.46, unit: "ms", raw: 11458100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.46, unit: "ms", raw: 11458100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "3EA7A65FEE1F3C49",
            startTime: "2023-03-06T09:07:12.044056Z",
            duration: { value: 17.73, unit: "ms", raw: 17729500 }
          },
          firstDataSeenTime: "2023-03-06T09:08:09.844766Z",
          p50: { value: 11.46, unit: "ms", raw: 11458100 },
          p95: { value: 11.46, unit: "ms", raw: 11458100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "376764D615996467F7E6B51C77B098",
            displayName:
              "\r\n             SELECT DISTINCT ON (endpoint_span.uid)\r\n           e.route AS Route,\r\n                   e.service AS Service,\r\n                   endpoint_span.span AS SpanName,\r\n                   endpoint_span.environment AS Environment,\r\n                   endpoint_span.instrumentation_library AS InstrumentationLibrary,\r\n                   endpoint_span.display_name AS DisplayName,\r\n                   endpoint_span.kind AS Kind,\r\n                   endpoint_span.code_object_id AS CodeObjectId,\r\n                   endpoint_span.span_code_object_id AS SpanCodeObjectId,\r\n                   span_descendants.descendant_flow_hash AS FlowHash,\r\n               span_flow_trace_samples.trace_id AS SampleTraceId,\r\n                   descendant_concurrency.data->'ExponentialFunction'->'KneeX' AS TurningPointConcurrency\r\n\r\n            FROM endpoints e \r\n\r\n            JOIN spans AS endpoint_span ON \r\n            endpoint_span.span_code_object_id = e.span_code_object_id AND\r\n            endpoint_span.environment = e.environment  AND\r\n            endpoint_span.account_id = e.account_id\r\n\r\n            JOIN span_descendants ON \r\n            span_descendants.span_uid = endpoint_span.uid\r\n\r\n            JOIN spans AS descendant_span ON \r\n            descendant_span.uid = span_descendants.descendant_span_uid  AND\r\n            descendant_span.span = @spanName AND\r\n            descendant_span.instrumentation_library = @instrumentationLibrary AND\r\n            descendant_span.environment = @environment AND\r\n            descendant_span.account_id = @accountId\r\n            \r\n            JOIN span_concurrency AS endpoint_concurrency ON \r\n            endpoint_concurrency.span_uid = endpoint_span.uid AND\r\n                endpoint_concurrency.flow_hash = ''\r\n\r\n            JOIN span_concurrency AS descendant_concurrency ON \r\n            descendant_concurrency.span_uid = descendant_span.uid  AND\r\n                descendant_concurrency.flow_hash = span_descendants.descendant_flow_hash AND \r\n                descendant_concurrency.increase_from_base > endpoint_concurrency.increase_from_base/3\r\n\r\n            left JOIN span_flow_trace_samples ON \r\n            span_flow_trace_samples.account_id = e.account_id AND \r\n                span_flow_trace_samples.environment = e.environment AND\r\n                span_flow_trace_samples.flow_hash = descendant_concurrency.flow_hash    \r\n                \r\n            ORDER BY endpoint_span.uid, endpoint_concurrency.increase_from_base DESC",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$376764D615996467F7E6B51C77B098",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:01.96937Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "4B99545DFA376B66EAF6E3EA286EAB",
            displayName:
              "\r\n            INSERT INTO spans(account_id, environment, instrumentation_library, span, code_object_id, periodic_percentiles, duration_percentiles, span_role, kind, original_name, span_code_object_id, display_name)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @InstrumentationLibrary, \r\n                   @Span,\r\n                   @CodeObjectId,\r\n                   CAST(@PeriodicPercentilesJson AS JSON),\r\n                   CAST(@DurationPercentilesJson AS JSON),\r\n                   @SpanRole,\r\n                   @Kind,\r\n                   @SpanOriginalName,\r\n                   @SpanCodeObjectId,\r\n                   @DisplayName)\r\n            ON CONFLICT (account_id, environment, instrumentation_library, span) \r\n            DO UPDATE SET \r\n                duration_percentiles = CAST(@DurationPercentilesJson AS JSON),\r\n                periodic_percentiles = CAST(@PeriodicPercentilesJson AS JSON),\r\n                code_object_id = @CodeObjectId,\r\n                span_role = @SpanRole,\r\n                kind = @Kind,\r\n                original_name = @SpanOriginalName,\r\n                span_code_object_id = @SpanCodeObjectId,\r\n                display_name = @DisplayName",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$4B99545DFA376B66EAF6E3EA286EAB",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:02.289435Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetBadScalingAffectedEndpoints",
            displayName: "GetBadScalingAffectedEndpoints",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId:
              "span:SpansRepository$_$GetBadScalingAffectedEndpoints",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.44, unit: "ms", raw: 7438300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.44, unit: "ms", raw: 7438300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "4D720702A8E0AF78",
            startTime: "2023-03-06T09:07:12.148391Z",
            duration: { value: 8.8, unit: "ms", raw: 8799400 }
          },
          firstDataSeenTime: "2023-03-06T09:08:08.637628Z",
          p50: { value: 7.44, unit: "ms", raw: 7438300 },
          p95: { value: 7.44, unit: "ms", raw: 7438300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetConcurrency",
            displayName: "GetConcurrency",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$GetConcurrency",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.89, unit: "ms", raw: 1894900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.89, unit: "ms", raw: 1894900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "9280080EE3437CE8",
            startTime: "2023-03-06T09:07:12.077423Z",
            duration: { value: 1.21, unit: "ms", raw: 1207500 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.76484Z",
          p50: { value: 1.89, unit: "ms", raw: 1894900 },
          p95: { value: 1.89, unit: "ms", raw: 1894900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "InactivateInsight",
            displayName: "InactivateInsight",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$InactivateInsight",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 988.1, unit: "μs", raw: 988100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 53.93, unit: "ms", raw: 53933775 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "04E2716FB859C072",
            startTime: "2023-03-06T09:07:32.741305Z",
            duration: { value: 1.05, unit: "ms", raw: 1054100 }
          },
          firstDataSeenTime: "2023-03-06T09:09:10.373642Z",
          p50: { value: 988.1, unit: "μs", raw: 988100 },
          p95: { value: 53.93, unit: "ms", raw: 53933775 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateDurationStats",
            displayName: "UpdateDurationStats",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpdateDurationStats",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.54, unit: "ms", raw: 7543600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.54, unit: "ms", raw: 7543600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "4E80441F5A1AFE54",
            startTime: "2023-03-06T09:07:14.19891Z",
            duration: { value: 7.69, unit: "ms", raw: 7692000 }
          },
          firstDataSeenTime: "2023-03-06T09:09:04.188773Z",
          p50: { value: 7.54, unit: "ms", raw: 7543600 },
          p95: { value: 7.54, unit: "ms", raw: 7543600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertInsights",
            displayName: "UpsertInsights",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertInsights",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 8.81, unit: "ms", raw: 8813700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 43.5, unit: "sec", raw: 43504674300 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "0AE0C416FA63398A",
            startTime: "2023-03-06T09:07:24.984076Z",
            duration: { value: 7.94, unit: "ms", raw: 7942900 }
          },
          firstDataSeenTime: "2023-03-06T09:09:09.345953Z",
          p50: { value: 8.81, unit: "ms", raw: 8813700 },
          p95: { value: 43.5, unit: "sec", raw: 43504674300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertSpans",
            displayName: "UpsertSpans",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertSpans",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T06:53:02.882799Z",
          p50: null,
          p95: null
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "MassTransit:Fault--Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight-- send",
            displayName:
              "MassTransit:Fault--Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight-- send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$MassTransit:Fault--Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight-- send",
            methodCodeObjectId:
              "MassTransit.Fault[[Digma.Measurement.Contracts.Messages.UpdateSpanEndpointsBottleneckInsight]]",
            kind: "Producer",
            codeObjectId:
              "MassTransit.Fault[[Digma.Measurement.Contracts.Messages.UpdateSpanEndpointsBottleneckInsight]]"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 126.75, unit: "ms", raw: 126754100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 126.75, unit: "ms", raw: 126754100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "9496F6BB75FBD5E2B4B2F93CCD61CC99",
            spanId: "2B8AC98CF2391CC3",
            startTime: "2023-03-06T09:07:22.73659Z",
            duration: { value: 113.43, unit: "ms", raw: 113431900 }
          },
          firstDataSeenTime: "2023-03-06T09:09:10.366204Z",
          p50: { value: 126.75, unit: "ms", raw: 126754100 },
          p95: { value: 126.75, unit: "ms", raw: 126754100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "1498E237CCCCB1CFBBEA0EE8B9971C",
            displayName:
              "\r\n            UPDATE spans\r\n            SET duration_percentiles = CAST(@DurationPercentilesJson AS JSON),\r\n                periodic_percentiles = CAST(@PeriodicPercentilesJson AS JSON)\r\n            WHERE account_id = @AccountId\r\n              AND environment = @Environment\r\n              AND instrumentation_library = @InstrumentationLibrary\r\n              AND span = @Span\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$1498E237CCCCB1CFBBEA0EE8B9971C",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.45, unit: "ms", raw: 7449500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.45, unit: "ms", raw: 7449500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "E8D41F5E2E40BB17",
            startTime: "2023-03-06T09:07:14.198975Z",
            duration: { value: 7.6, unit: "ms", raw: 7596500 }
          },
          firstDataSeenTime: "2023-03-06T09:09:04.272985Z",
          p50: { value: 7.45, unit: "ms", raw: 7449500 },
          p95: { value: 7.45, unit: "ms", raw: 7449500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "28D8C18FC0716679E647D8184BD1D2",
            displayName:
              "\r\n             SELECT DISTINCT ON (endpoint_span.uid)\r\n           e.route AS Route,\r\n                   e.service AS Service,\r\n                   endpoint_span.span AS SpanName,\r\n                   endpoint_span.environment AS Environment,\r\n                   endpoint_span.instrumentation_library AS InstrumentationLibrary,\r\n                   endpoint_span.display_name AS DisplayName,\r\n                   endpoint_span.kind AS Kind,\r\n                   endpoint_span.code_object_id AS CodeObjectId,\r\n                   endpoint_span.span_code_object_id AS SpanCodeObjectId,\r\n                   span_descendants.descendant_flow_hash AS FlowHash,\r\n               span_flow_trace_samples.trace_id AS SampleTraceId\r\n            FROM endpoints e \r\n\r\n            JOIN spans AS endpoint_span ON \r\n            endpoint_span.span_code_object_id = e.span_code_object_id AND\r\n            endpoint_span.environment = e.environment  AND\r\n            endpoint_span.account_id = e.account_id\r\n\r\n            JOIN span_descendants ON \r\n            span_descendants.span_uid = endpoint_span.uid\r\n\r\n            JOIN spans AS descendant_span ON \r\n            descendant_span.uid = span_descendants.descendant_span_uid  AND\r\n            descendant_span.span = @spanName AND\r\n            descendant_span.instrumentation_library = @instrumentationLibrary AND\r\n            descendant_span.environment = @environment AND\r\n            descendant_span.account_id = @accountId\r\n            \r\n            JOIN span_concurrency AS endpoint_concurrency ON \r\n            endpoint_concurrency.span_uid = endpoint_span.uid AND\r\n                endpoint_concurrency.flow_hash = ''\r\n\r\n            JOIN span_concurrency AS descendant_concurrency ON \r\n            descendant_concurrency.span_uid = descendant_span.uid  AND\r\n                descendant_concurrency.flow_hash = span_descendants.descendant_flow_hash AND \r\n                descendant_concurrency.increase_from_base > endpoint_concurrency.increase_from_base/3\r\n\r\n            left JOIN span_flow_trace_samples ON \r\n            span_flow_trace_samples.account_id = e.account_id AND \r\n                span_flow_trace_samples.environment = e.environment AND\r\n                span_flow_trace_samples.flow_hash = descendant_concurrency.flow_hash    \r\n                \r\n            ORDER BY endpoint_span.uid, endpoint_concurrency.increase_from_base DESC",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$28D8C18FC0716679E647D8184BD1D2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.37, unit: "ms", raw: 7370000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.37, unit: "ms", raw: 7370000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "486988BC00B391D5",
            startTime: "2023-03-06T09:07:12.148432Z",
            duration: { value: 8.75, unit: "ms", raw: 8748300 }
          },
          firstDataSeenTime: "2023-03-06T09:08:08.730001Z",
          p50: { value: 7.37, unit: "ms", raw: 7370000 },
          p95: { value: 7.37, unit: "ms", raw: 7370000 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "3E1341CC29BEA6A2FAA579DE56C346",
            displayName:
              "\r\n            UPDATE code_object_insights\r\n            SET is_active = false,\r\n                last_deactivated = (now() at time zone 'utc')\r\n            WHERE\r\n                account_id = @AccountId AND \r\n                environment = @Environment AND \r\n                code_object_id = @CodeObjectId AND \r\n                insight_type = @InsightType",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$3E1341CC29BEA6A2FAA579DE56C346",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 918.05, unit: "μs", raw: 918050 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 49.46,
                unit: "ms",
                raw: 49462739.99999994
              }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "A8B037991DC44179",
            startTime: "2023-03-06T09:07:32.741327Z",
            duration: { value: 1.02, unit: "ms", raw: 1021600 }
          },
          firstDataSeenTime: "2023-03-06T09:09:10.61248Z",
          p50: { value: 918.05, unit: "μs", raw: 918050 },
          p95: { value: 49.46, unit: "ms", raw: 49462739.99999994 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "460F1A57D056CE9146A4A60D86C18B",
            displayName:
              "\r\n            SELECT account_id AS AccountId,\r\n                   environment AS Environment,\r\n                   service AS ServiceName,\r\n                   code_object_id AS MethodCodeObjectId,\r\n                   span_code_object_id as SpanCodeObjectId,\r\n                   route as EndpointCodeObjectId\r\n            FROM endpoints\r\n            WHERE account_id = @accountId\r\n              AND environment = @environment\r\n              \r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$460F1A57D056CE9146A4A60D86C18B",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.2, unit: "ms", raw: 2202700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 9.24, unit: "ms", raw: 9238500 }
            }
          ],
          insights: [
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "49CA9B4C2D4C510B",
            startTime: "2023-03-06T09:07:13.041727Z",
            duration: { value: 4.14, unit: "ms", raw: 4143700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.44637Z",
          p50: { value: 2.2, unit: "ms", raw: 2202700 },
          p95: { value: 9.24, unit: "ms", raw: 9238500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "4BF73D1CDDEBB70E1D7203A4B03A5E",
            displayName:
              "\r\n            INSERT INTO environment_items(account_id, environment, service_name, item_type, item_json_data)\r\n            VALUES (@AccountId, \r\n                    @Environment, \r\n                    @ServiceName, \r\n                    @ItemType,\r\n                    CAST(@ItemDataAsJson AS JSON)\r\n                   )\r\n            ON CONFLICT ON CONSTRAINT environment_items_unique_key_1 \r\n            DO UPDATE SET \r\n                item_json_data = CAST(@ItemDataAsJson AS JSON)\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$4BF73D1CDDEBB70E1D7203A4B03A5E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.94, unit: "ms", raw: 10939350 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 15.91, unit: "ms", raw: 15905500 }
            }
          ],
          insights: [
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "02D384A6EB48172A",
            startTime: "2023-03-06T09:07:13.101944Z",
            duration: { value: 11.14, unit: "ms", raw: 11138100 }
          },
          firstDataSeenTime: "2023-03-02T10:21:08.085273Z",
          p50: { value: 10.94, unit: "ms", raw: 10939350 },
          p95: { value: 15.91, unit: "ms", raw: 15905500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "557FB5997D46DEDBD1054A7AB66434",
            displayName:
              "\r\n            INSERT INTO code_object_insights(account_id, environment, code_object_id, insight_type, insight_data, is_active, first_detected, last_detected, last_deactivated, actual_start_time)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @CodeObjectId, \r\n                   @InsightType,\r\n                   CAST(@InsightData AS JSON),\r\n                   @IsActive,\r\n                   @FirstDetected,\r\n                   @LastDetected,\r\n                   @LastDeactivated,\r\n                   @ActualStartTime)\r\n            ON CONFLICT (account_id,environment, code_object_id, insight_type) \r\n            DO UPDATE SET \r\n                insight_data = CAST(@InsightData AS JSON),\r\n                is_active = @IsActive, \r\n                last_detected = @LastDetected,  \r\n                actual_start_time = @ActualStartTime",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$557FB5997D46DEDBD1054A7AB66434",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.28, unit: "ms", raw: 6278500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 69.03, unit: "ms", raw: 69030800 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "EBF7823C39F11F30",
            startTime: "2023-03-06T09:07:24.984197Z",
            duration: { value: 7.8, unit: "ms", raw: 7802300 }
          },
          firstDataSeenTime: "2023-03-06T09:09:09.342844Z",
          p50: { value: 6.28, unit: "ms", raw: 6278500 },
          p95: { value: 69.03, unit: "ms", raw: 69030800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "58341B73852BA2D2136DFA03C7E55E",
            displayName:
              "\r\n            SELECT custom_start_time\r\n            FROM code_object_insights\r\n            WHERE account_id = @accountId AND\r\n                  environment = @environment AND\r\n                  code_object_id = @codeObjectId AND\r\n                  insight_type = @insightType",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$58341B73852BA2D2136DFA03C7E55E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 705.3, unit: "μs", raw: 705300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 728.6, unit: "μs", raw: 728600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "280985EF6C79AF81",
            startTime: "2023-03-06T09:07:24.266885Z",
            duration: { value: 637.6, unit: "μs", raw: 637600 }
          },
          firstDataSeenTime: "2023-03-06T09:09:08.98473Z",
          p50: { value: 705.3, unit: "μs", raw: 705300 },
          p95: { value: 728.6, unit: "μs", raw: 728600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "6A8066B20EC5A5252C685BC3BEAA88",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                code_object_id AS CodeObjectId,\r\n                instrumentation_library AS InstrumentationLibrary,\r\n                span AS Span,\r\n                duration_percentiles AS DurationPercentilesJson,\r\n                slow_endpoints AS SlowEndpointsJson,\r\n                high_trace_occurences AS HighTraceOccurencesJson,\r\n                periodic_percentiles AS PeriodicPercentilesJson,\r\n                span_role AS SpanRole,\r\n                span_classification AS SpanClassification,\r\n                kind AS Kind,\r\n                original_name AS SpanOriginalName,\r\n                span_code_object_id AS SpanCodeObjectId,\r\n                display_name AS DisplayName\r\n            FROM spans \r\n            WHERE account_id = @accountId \r\n             AND environment = @environment \r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$6A8066B20EC5A5252C685BC3BEAA88",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.52, unit: "ms", raw: 2520950 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 19.57, unit: "ms", raw: 19573200 }
            }
          ],
          insights: [
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "75CE3677BAF82594",
            startTime: "2023-03-06T09:07:13.028727Z",
            duration: { value: 5.05, unit: "ms", raw: 5049500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.29603Z",
          p50: { value: 2.52, unit: "ms", raw: 2520950 },
          p95: { value: 19.57, unit: "ms", raw: 19573200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "92536AA3B1EC72CA666F3037EAF4A7",
            displayName:
              "\r\n            SELECT \r\n                rank_filter.CodeObjectId,\r\n                rank_filter.ErrorType,\r\n                rank_filter.SourceCodeObjectId,\r\n                rank_filter.UID \r\n            FROM (\r\n                SELECT co.id as CodeObjectId, es.error_type as ErrorType, co1.id as SourceCodeObjectId, es.uid as UID ,\r\n                rank() OVER (\r\n                            PARTITION BY co.id\r\n                            ORDER BY es.last_error_timestamp DESC\r\n                        )FROM code_objects AS co\r\n    INNER JOIN errors_source AS es\r\n    ON co.uid = es.code_object_uid\r\n                INNER JOIN code_objects AS co1\r\n                ON co1.uid = es.raised_by_code_object_uid\r\n    WHERE co.id=@codeObjectId and co.account_id = @accountId\r\n                and co.environment = @environment\r\n            ) rank_filter WHERE RANK <3",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$92536AA3B1EC72CA666F3037EAF4A7",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.63, unit: "ms", raw: 3630600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 4.73, unit: "ms", raw: 4730300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "19CD8A8C78F8E862",
            startTime: "2023-03-06T09:07:13.059585Z",
            duration: { value: 2.24, unit: "ms", raw: 2239200 }
          },
          firstDataSeenTime: "2023-03-06T09:09:07.823787Z",
          p50: { value: 3.63, unit: "ms", raw: 3630600 },
          p95: { value: 4.73, unit: "ms", raw: 4730300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "92842DCBCB57FA7A1C08277DD79C69",
            displayName:
              "\r\n            SELECT DISTINCT ON (endpoints.uid)\r\n                endpoints.environment AS Environment,\r\n                endpoints.route AS Route,\r\n                endpoints.code_object_id AS MethodCodeObjectId,\r\n                endpoints.span_code_object_id AS SpanCodeObjectId,\r\n                endpoints.service AS Service,\r\n                endpoints.usage_score AS UsageScore,\r\n                endpoints.max_calls_1m AS MaxCallsIn1Min,\r\n                endpoints.slow_spans AS SlowSpansJson,\r\n                endpoints.highly_occuring_spans AS HighlyOccuringSpansJson,\r\n                endpoints.endpoints_median AS EndpointsMedian,\r\n                endpoints.endpoints_median_of_medians AS EndpointsMedianOfMedians,\r\n                endpoints.endpoints_p75 AS EndpointsP75,\r\n                endpoints.median AS Median,\r\n                endpoints.zscore AS ZScore,\r\n                endpoints.updated_at AS LastUpdate,\r\n                spans.span AS SpanName,\r\n                spans.kind AS SpanKind,\r\n                spans.span_role AS SpanRole,\r\n                spans.display_name AS SpanDisplayName,\r\n                spans.original_name AS SpanOriginalName,\r\n                spans.span_classification AS SpanClassification,\r\n                spans.instrumentation_library AS SpanInstrumentationLibrary\r\n            FROM endpoints\r\n            LEFT JOIN spans ON spans.span_code_object_id = endpoints.span_code_object_id\r\n            WHERE endpoints.account_id = @accountId AND\r\n                  endpoints.environment = @environment AND\r\n                  endpoints.service = @service AND\r\n                  endpoints.route = @route",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$92842DCBCB57FA7A1C08277DD79C69",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.39, unit: "ms", raw: 1386450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 161.62, unit: "ms", raw: 161620800 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "EBE61D1AB5A97333",
            startTime: "2023-03-06T09:07:13.067177Z",
            duration: { value: 4.04, unit: "ms", raw: 4037600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.696219Z",
          p50: { value: 1.39, unit: "ms", raw: 1386450 },
          p95: { value: 161.62, unit: "ms", raw: 161620800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "954FB28BE3D91AB440332482B84543",
            displayName:
              "\r\n            SELECT account_id AS AccountId,\r\n                   environment AS Environment,\r\n                   flow_hash AS FlowHash,\r\n                   service AS Service,\r\n                   instrumentation_library AS InstrumentationLibrary,\r\n                   span AS Span,\r\n                   code_object_id AS CodeObjectId,\r\n                   span_code_object_id as SpanCodeObjectId,\r\n                   count_by_flow AS FlowOccurrences,\r\n                   count_by_span AS SpanOccurrences,\r\n                   created_at AS FirstSeenSpanTimestamp,\r\n                   latest_trace_id       AS LatestTraceId,\r\n                   latest_span_id        AS LatestSpanId,\r\n                   latest_span_timestamp AS LatestSpanTimestamp,\r\n                   latest_span_duration  AS LatestSpanDuration\r\n            FROM v_span_flows_with_rank_of_lasts\r\n            WHERE account_id = @accountId\r\n              AND environment = @environment\r\n               AND rank_of_last_by_environment_and_service_and_span = 1\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$954FB28BE3D91AB440332482B84543",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 9.53, unit: "ms", raw: 9531400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 46.98, unit: "ms", raw: 46982400 }
            }
          ],
          insights: [
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "C7B957F6760E8D1F",
            startTime: "2023-03-06T09:07:13.033898Z",
            duration: { value: 7.73, unit: "ms", raw: 7728100 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.359685Z",
          p50: { value: 9.53, unit: "ms", raw: 9531400 },
          p95: { value: 46.98, unit: "ms", raw: 46982400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B1919E65A98D4EF8B6BC8483467DD2",
            displayName:
              "\r\n            SELECT\r\n                coi.environment AS Environment,\r\n                coi.code_object_id AS CodeObjectId,\r\n                coi.insight_type AS InsightType,\r\n                coi.first_detected AS FirstDetected,\r\n                coi.insight_data AS InsightData,\r\n                coi.is_active AS IsActive,\r\n                coi.last_detected AS LastDetected,\r\n                coi.last_deactivated AS LastDeactivated,\r\n                coi.custom_start_time AS CustomStartTime,\r\n                coi.actual_start_time AS ActualStartTime\r\n\r\n            FROM (VALUES (@a0)) AS inputs (id)\r\n            JOIN code_object_insights AS coi ON \r\n                coi.code_object_id=inputs.id \r\n            WHERE coi.account_id = @accountId AND coi.is_active = TRUE AND coi.environment = @environment",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B1919E65A98D4EF8B6BC8483467DD2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.16, unit: "ms", raw: 1160000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 6.45, unit: "ms", raw: 6447150 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "ADE61A55FF2E563E",
            startTime: "2023-03-06T09:07:13.099348Z",
            duration: { value: 2.18, unit: "ms", raw: 2181300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.862829Z",
          p50: { value: 1.16, unit: "ms", raw: 1160000 },
          p95: { value: 6.45, unit: "ms", raw: 6447150 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "BF10824CA703FA871FF03E7016902F",
            displayName:
              "\r\n            SELECT route as Route,\r\n                   code_object_id as CodeObjectId,\r\n                   span_code_object_id as SpanCodeObjectId\r\n            FROM endpoints \r\n            WHERE account_id = @accountId \r\n              AND environment = @environment \r\n              AND route = ANY(@endpointCodeObjectIds)\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$BF10824CA703FA871FF03E7016902F",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 919.5, unit: "μs", raw: 919500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.16, unit: "ms", raw: 1161400 }
            }
          ],
          insights: [
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "C05275CD547BF9D5",
            startTime: "2023-03-06T09:07:13.096539Z",
            duration: { value: 2.19, unit: "ms", raw: 2192100 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.955651Z",
          p50: { value: 919.5, unit: "μs", raw: 919500 },
          p95: { value: 1.16, unit: "ms", raw: 1161400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "BF1E292CA50D4F97118E4B1B0D85B7",
            displayName:
              "\r\n            SELECT spans.account_id AS AccountId,\r\n                   spans.environment AS Environment,\r\n                   spans.instrumentation_library AS InstrumentationLibrary,\r\n                   spans.span AS SpanName,\r\n                   span_concurrency.flow_hash AS FlowHash,\r\n                   span_concurrency.increase_from_base AS IncreaseFromBase,\r\n                   span_concurrency.data AS JsonData\r\n            FROM span_concurrency\r\n            JOIN spans ON spans.uid = span_concurrency.span_uid AND\r\n                          spans.account_id = @AccountId AND\r\n                          spans.environment = @Environment AND\r\n                          spans.instrumentation_library = @InstrumentationLibrary AND\r\n                          spans.span = @SpanName \r\n            WHERE span_concurrency.flow_hash = @FlowHash",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$BF1E292CA50D4F97118E4B1B0D85B7",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.84, unit: "ms", raw: 1842100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.84, unit: "ms", raw: 1842100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "98719A27256EAC06",
            startTime: "2023-03-06T09:07:12.077459Z",
            duration: { value: 1.16, unit: "ms", raw: 1161200 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.841172Z",
          p50: { value: 1.84, unit: "ms", raw: 1842100 },
          p95: { value: 1.84, unit: "ms", raw: 1842100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "C711435733ECCA4A30640D141A8832",
            displayName:
              "\r\n            SELECT\r\n                code_objects.account_id AS AccountId,\r\n                code_objects.environment AS Environment,\r\n                code_objects.id AS MethodCodeObjectId,\r\n                code_objects.score AS Score,\r\n                code_objects.updated_at AS LastUpdate\r\n            FROM code_objects\r\n            WHERE code_objects.account_id = @accountId\r\n              AND code_objects.environment = @environment\r\n              AND code_objects.id = @codeObjectId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C711435733ECCA4A30640D141A8832",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.07, unit: "ms", raw: 5069500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.06, unit: "ms", raw: 7058100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "940AE09B40AA2C9F",
            startTime: "2023-03-06T09:07:13.022499Z",
            duration: { value: 2.15, unit: "ms", raw: 2150400 }
          },
          firstDataSeenTime: "2023-03-06T09:09:07.39389Z",
          p50: { value: 5.07, unit: "ms", raw: 5069500 },
          p95: { value: 7.06, unit: "ms", raw: 7058100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "C9F84DEC4FD6FCCDEFE1B9B4BB2B14",
            displayName:
              "\r\nSELECT count(1) FILTER (WHERE es.unhandled = 1) AS UnhandledCount\r\n     , count(1) FILTER (WHERE es.unexpected = true) AS UnexpectedCount\r\n , count(1) AS ErrorCount\r\n     , co.environment as Environment\r\n     , co.id AS CodeObjectId\r\nFROM code_objects AS co\r\nINNER JOIN errors_source AS es\r\nON co.uid = es.code_object_uid\r\nWHERE co.id=@codeObjectId and co.account_id = @accountId and co.environment = @environment\r\n            GROUP BY co.id, co.environment;\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C9F84DEC4FD6FCCDEFE1B9B4BB2B14",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 9.38, unit: "ms", raw: 9379050 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 15.44, unit: "ms", raw: 15435900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "32D76BB0D4DB5399",
            startTime: "2023-03-06T09:07:13.056054Z",
            duration: { value: 3.48, unit: "ms", raw: 3481000 }
          },
          firstDataSeenTime: "2023-03-06T09:09:07.940074Z",
          p50: { value: 9.38, unit: "ms", raw: 9379050 },
          p95: { value: 15.44, unit: "ms", raw: 15435900 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "D1479EB54A32F954FCCEC1E9731148",
            displayName:
              "\r\n            SELECT DISTINCT\r\n                span_code_object_id AS SpanCodeObjectId,\r\n                code_object_id AS MethodCodeObjectId,\r\n                span AS Span,\r\n                environment AS Environment,\r\n                flow_hash AS FlowHash,\r\n                100.0 * count_by_flow / count_by_span AS Percentage\r\n                FROM span_flows\r\n                WHERE account_id = @accountId \r\n                AND count_by_span > 0\r\n                AND  (span_code_object_id = ANY (@spanCodeObjectIds)) \r\n                AND environment = @environment",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$D1479EB54A32F954FCCEC1E9731148",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 995, unit: "μs", raw: 995000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 995, unit: "μs", raw: 995000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "368B456F626089C2",
            startTime: "2023-03-06T09:07:12.04424Z",
            duration: { value: 9.07, unit: "ms", raw: 9074700 }
          },
          firstDataSeenTime: "2023-03-06T09:08:09.961921Z",
          p50: { value: 995, unit: "μs", raw: 995000 },
          p95: { value: 995, unit: "μs", raw: 995000 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "DB091C35D8F4C18146B9D4B26A8373",
            displayName:
              "\r\n            SELECT account_id  AS AccountId,\r\n                   environment AS Environment,\r\n                   flow_hash   AS FlowHash,\r\n                   trace_id   AS TraceId\r\n\r\n            FROM   span_flow_trace_samples\r\n            WHERE  account_id = @accountId \r\n              AND  environment = @environment\r\n              AND  flow_hash = ANY(@flowHashes)\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$DB091C35D8F4C18146B9D4B26A8373",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 661.5, unit: "μs", raw: 661500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 661.5, unit: "μs", raw: 661500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "2990BC03CE629D13",
            startTime: "2023-03-06T09:07:12.054291Z",
            duration: { value: 706.6, unit: "μs", raw: 706600 }
          },
          firstDataSeenTime: "2023-03-06T09:08:10.207227Z",
          p50: { value: 661.5, unit: "μs", raw: 661500 },
          p95: { value: 661.5, unit: "μs", raw: 661500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "E0F2CD6C5E2041E9D1C4ACD56A4640",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                code_object_id AS CodeObjectId,\r\n                instrumentation_library AS InstrumentationLibrary,\r\n                span AS Span,\r\n                duration_percentiles AS DurationPercentilesJson,\r\n                slow_endpoints AS SlowEndpointsJson,\r\n                high_trace_occurences AS HighTraceOccurencesJson,\r\n                periodic_percentiles AS PeriodicPercentilesJson,\r\n                span_role AS SpanRole,\r\n                span_classification AS SpanClassification,\r\n                kind AS Kind,\r\n                original_name AS SpanOriginalName,\r\n                span_code_object_id AS SpanCodeObjectId,\r\n                display_name AS DisplayName\r\n            FROM spans \r\n            WHERE account_id = @accountId \r\n             AND environment = @environment \r\n             AND  (span_code_object_id = ANY (@spanCodeObjectIds)) ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$E0F2CD6C5E2041E9D1C4ACD56A4640",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.04, unit: "ms", raw: 1037000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 5.58, unit: "ms", raw: 5579800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "A405505FB271F978",
            startTime: "2023-03-06T09:07:32.739888Z",
            duration: { value: 1.38, unit: "ms", raw: 1377100 }
          },
          firstDataSeenTime: "2023-03-06T09:09:10.228095Z",
          p50: { value: 1.04, unit: "ms", raw: 1037000 },
          p95: { value: 5.58, unit: "ms", raw: 5579800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "F2EA35F333C3EF9D8E303BFBA82468",
            displayName:
              "\r\n            SELECT account_id  AS AccountId,\r\n                   environment AS Environment,\r\n                   flow_hash   AS FlowHash,\r\n                   json_data   AS JsonData,\r\n                   latest_trace_id       AS LatestTraceId,\r\n                   latest_span_id        AS LatestSpanId,\r\n                   latest_span_timestamp AS LatestSpanTimestamp,\r\n                   latest_span_duration  AS LatestSpanDuration\r\n            FROM   span_flows_meta\r\n            WHERE  account_id = @accountId\r\n              AND  environment = @environment\r\n              AND  flow_hash = ANY(@flowHashes)\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$F2EA35F333C3EF9D8E303BFBA82468",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 560.2, unit: "μs", raw: 560200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 560.2, unit: "μs", raw: 560200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "C47BAA7CFEB5CADA",
            startTime: "2023-03-06T09:07:12.053375Z",
            duration: { value: 833, unit: "μs", raw: 833000 }
          },
          firstDataSeenTime: "2023-03-06T09:08:10.117189Z",
          p50: { value: 560.2, unit: "μs", raw: 560200 },
          p95: { value: 560.2, unit: "μs", raw: 560200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "FB42CF9C794C236685B66C06C0DE3E",
            displayName:
              "\r\n            SELECT\r\n                coi.environment AS Environment,\r\n                coi.code_object_id AS CodeObjectId,\r\n                coi.insight_type AS InsightType,\r\n                coi.first_detected AS FirstDetected,\r\n                coi.insight_data AS InsightData,\r\n                coi.is_active AS IsActive,\r\n                coi.last_deactivated AS LastDetected,\r\n                coi.last_deactivated AS LastDeactivated,\r\n                coi.custom_start_time AS CustomStartTime\r\n            FROM code_object_insights AS coi\r\n            WHERE coi.account_id = @accountId\r\n              AND coi.environment = @environment\r\n              AND coi.code_object_id = @codeObjectId\r\n              AND coi.insight_type = @insightType\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$FB42CF9C794C236685B66C06C0DE3E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.13, unit: "ms", raw: 1130800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.13, unit: "ms", raw: 1130800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "F73624F630FBED66",
            startTime: "2023-03-06T09:07:14.132666Z",
            duration: { value: 3.94, unit: "ms", raw: 3942900 }
          },
          firstDataSeenTime: "2023-03-06T09:09:04.400833Z",
          p50: { value: 1.13, unit: "ms", raw: 1130800 },
          p95: { value: 1.13, unit: "ms", raw: 1130800 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateEndpointSlowInsight Consume",
            displayName: "UpdateEndpointSlowInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateEndpointSlowInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointSlowInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointSlowInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-endpoint-slow-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 8.89, unit: "ms", raw: 8894200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.56, unit: "sec", raw: 1561903400 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateEndpointSlowInsight Consume",
                subtitle: "3 spans",
                description:
                  "1573% \r\n            UPDATE code_object_insights\r\n            SET is_active = false,\r\n                last_deactivated = (now() at time zone 'utc')\r\n            WHERE\r\n                account_id = @AccountId AND \r\n                environment = @Environment AND \r\n                code_object_id = @CodeObjectId AND \r\n                insight_type = @InsightType 2.42 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "8A144DB485D8089B",
            startTime: "2023-03-06T09:07:13.037312Z",
            duration: { value: 34.73, unit: "ms", raw: 34726200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.064196Z",
          p50: { value: 8.89, unit: "ms", raw: 8894200 },
          p95: { value: 1.56, unit: "sec", raw: 1561903400 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanUsageInsight Consume",
            displayName: "UpdateSpanUsageInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanUsageInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanUsageInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanUsageInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-usage-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 13.47, unit: "ms", raw: 13468200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 13.47, unit: "ms", raw: 13468200 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateSpanUsageInsight Consume",
                subtitle: "3 spans",
                description:
                  "6034% \r\n            INSERT INTO code_object_insights(account_id, environment, code_object_id, insight_type, insight_data, is_active, first_detected, last_detected, last_deactivated, actual_start_time)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @CodeObjectId, \r\n                   @InsightType,\r\n                   CAST(@InsightData AS JSON),\r\n                   @IsActive,\r\n                   @FirstDetected,\r\n                   @LastDetected,\r\n                   @LastDeactivated,\r\n                   @ActualStartTime)\r\n            ON CONFLICT (account_id,environment, code_object_id, insight_type) \r\n            DO UPDATE SET \r\n                insight_data = CAST(@InsightData AS JSON),\r\n                is_active = @IsActive, \r\n                last_detected = @LastDetected,  \r\n                actual_start_time = @ActualStartTime 812.78 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "DADE82CD240B78A5",
            startTime: "2023-03-06T09:07:12.042042Z",
            duration: { value: 20.63, unit: "ms", raw: 20631300 }
          },
          firstDataSeenTime: "2023-03-06T09:08:09.801064Z",
          p50: { value: 13.47, unit: "ms", raw: 13468200 },
          p95: { value: 13.47, unit: "ms", raw: 13468200 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanEndpointsBottleneckInsight Consume",
            displayName: "UpdateSpanEndpointsBottleneckInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanEndpointsBottleneckInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanEndpointsBottleneckInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanEndpointsBottleneckInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-endpoints-bottleneck-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.7, unit: "sec", raw: 7697485150 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 15.38, unit: "sec", raw: 15376098800 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName:
                  "UpdateSpanEndpointsBottleneckInsight Consume",
                subtitle: "3 spans",
                description:
                  "1272% MassTransit:Fault--Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight-- send 240.19 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "9496F6BB75FBD5E2B4B2F93CCD61CC99",
            spanId: "FDA2B8585384CE97",
            startTime: "2023-03-06T09:07:07.701946Z",
            duration: { value: 15.31, unit: "sec", raw: 15305917100 }
          },
          firstDataSeenTime: "2023-03-06T09:08:07.846691Z",
          p50: { value: 7.7, unit: "sec", raw: 7697485150 },
          p95: { value: 15.38, unit: "sec", raw: 15376098800 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateEnvironmentAssets Consume",
            displayName: "UpdateEnvironmentAssets Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateEnvironmentAssets Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.EnvironmentAssetsConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.EnvironmentAssetsConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-environment-assets::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 689.95, unit: "ms", raw: 689954950 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.5, unit: "sec", raw: 2504519700 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateEnvironmentAssets Consume",
                subtitle: "3 spans",
                description: "993% GetCodeObjectInsights 8.42 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "96FC222F116D991A",
            startTime: "2023-03-06T09:07:13.027387Z",
            duration: { value: 87.04, unit: "ms", raw: 87038500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.109197Z",
          p50: { value: 689.95, unit: "ms", raw: 689954950 },
          p95: { value: 2.5, unit: "sec", raw: 2504519700 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateMethodErrorInsight Consume",
            displayName: "UpdateMethodErrorInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateMethodErrorInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.MethodErrorInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.MethodErrorInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-method-error-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 29.63, unit: "ms", raw: 29626800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 37.86, unit: "ms", raw: 37856700 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateMethodErrorInsight Consume",
                subtitle: "3 spans",
                description:
                  "2864% \r\n            INSERT INTO code_object_insights(account_id, environment, code_object_id, insight_type, insight_data, is_active, first_detected, last_detected, last_deactivated, actual_start_time)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @CodeObjectId, \r\n                   @InsightType,\r\n                   CAST(@InsightData AS JSON),\r\n                   @IsActive,\r\n                   @FirstDetected,\r\n                   @LastDetected,\r\n                   @LastDeactivated,\r\n                   @ActualStartTime)\r\n            ON CONFLICT (account_id,environment, code_object_id, insight_type) \r\n            DO UPDATE SET \r\n                insight_data = CAST(@InsightData AS JSON),\r\n                is_active = @IsActive, \r\n                last_detected = @LastDetected,  \r\n                actual_start_time = @ActualStartTime 612.81 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "DC9684097FA79640",
            startTime: "2023-03-06T09:07:13.046734Z",
            duration: { value: 36.11, unit: "ms", raw: 36111200 }
          },
          firstDataSeenTime: "2023-03-06T09:09:07.78971Z",
          p50: { value: 29.63, unit: "ms", raw: 29626800 },
          p95: { value: 37.86, unit: "ms", raw: 37856700 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanBreakdownInsight Consume",
            displayName: "UpdateSpanBreakdownInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanBreakdownInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanBreakdownInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanBreakdownInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-breakdown-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 48.16, unit: "ms", raw: 48157900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 48.16, unit: "ms", raw: 48157900 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateSpanBreakdownInsight Consume",
                subtitle: "3 spans",
                description: "2850% QueryAsync 1.37 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "6C166445C1BF3D47",
            startTime: "2023-03-06T09:07:24.265962Z",
            duration: { value: 11.82, unit: "ms", raw: 11823400 }
          },
          firstDataSeenTime: "2023-03-06T09:09:08.705794Z",
          p50: { value: 48.16, unit: "ms", raw: 48157900 },
          p95: { value: 48.16, unit: "ms", raw: 48157900 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanScalingInsight Consume",
            displayName: "UpdateSpanScalingInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanScalingInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanScalingInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanScalingInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-scaling-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.9, unit: "ms", raw: 3904600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.9, unit: "ms", raw: 3904600 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateSpanScalingInsight Consume",
                subtitle: "3 spans",
                description:
                  "4620% \r\n            SELECT spans.account_id AS AccountId,\r\n                   spans.environment AS Environment,\r\n                   spans.instrumentation_library AS InstrumentationLibrary,\r\n                   spans.span AS SpanName,\r\n                   span_concurrency.flow_hash AS FlowHash,\r\n                   span_concurrency.increase_from_base AS IncreaseFromBase,\r\n                   span_concurrency.data AS JsonData\r\n            FROM span_concurrency\r\n            JOIN spans ON spans.uid = span_concurrency.span_uid AND\r\n                          spans.account_id = @AccountId AND\r\n                          spans.environment = @Environment AND\r\n                          spans.instrumentation_library = @InstrumentationLibrary AND\r\n                          spans.span = @SpanName \r\n            WHERE span_concurrency.flow_hash = @FlowHash 180.4 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "94434A35B67F109B",
            startTime: "2023-03-06T09:07:12.07628Z",
            duration: { value: 3.34, unit: "ms", raw: 3337300 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.54554Z",
          p50: { value: 3.9, unit: "ms", raw: 3904600 },
          p95: { value: 3.9, unit: "ms", raw: 3904600 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanNPlusOneInsight Consume",
            displayName: "UpdateSpanNPlusOneInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanNPlusOneInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanNPlusOneInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanNPlusOneInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-nplus-one-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.02, unit: "sec", raw: 5024594500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.04, unit: "sec", raw: 10035231800 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateSpanNPlusOneInsight Consume",
                subtitle: "2 spans",
                description:
                  "184% update-span-nplus-one-insight::00000000-0000-0000-0000-000000000000 process 328.67 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "E52D701AADEA48B6",
            startTime: "2023-03-06T09:07:22.709773Z",
            duration: { value: 10.03, unit: "sec", raw: 10033722900 }
          },
          firstDataSeenTime: "2023-03-06T09:09:10.352512Z",
          p50: { value: 5.02, unit: "sec", raw: 5024594500 },
          p95: { value: 10.04, unit: "sec", raw: 10035231800 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanScalingRootCauseInsight Consume",
            displayName: "UpdateSpanScalingRootCauseInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanScalingRootCauseInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanScalingRootCauseInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanScalingRootCauseInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-scaling-root-cause-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.77, unit: "ms", raw: 10774700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.77, unit: "ms", raw: 10774700 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateSpanScalingRootCauseInsight Consume",
                subtitle: "3 spans",
                description:
                  "9707% \r\n             SELECT DISTINCT ON (endpoint_span.uid)\r\n           e.route AS Route,\r\n                   e.service AS Service,\r\n                   endpoint_span.span AS SpanName,\r\n                   endpoint_span.environment AS Environment,\r\n                   endpoint_span.instrumentation_library AS InstrumentationLibrary,\r\n                   endpoint_span.display_name AS DisplayName,\r\n                   endpoint_span.kind AS Kind,\r\n                   endpoint_span.code_object_id AS CodeObjectId,\r\n                   endpoint_span.span_code_object_id AS SpanCodeObjectId,\r\n                   span_descendants.descendant_flow_hash AS FlowHash,\r\n               span_flow_trace_samples.trace_id AS SampleTraceId\r\n            FROM endpoints e \r\n\r\n            JOIN spans AS endpoint_span ON \r\n            endpoint_span.span_code_object_id = e.span_code_object_id AND\r\n            endpoint_span.environment = e.environment  AND\r\n            endpoint_span.account_id = e.account_id\r\n\r\n            JOIN span_descendants ON \r\n            span_descendants.span_uid = endpoint_span.uid\r\n\r\n            JOIN spans AS descendant_span ON \r\n            descendant_span.uid = span_descendants.descendant_span_uid  AND\r\n            descendant_span.span = @spanName AND\r\n            descendant_span.instrumentation_library = @instrumentationLibrary AND\r\n            descendant_span.environment = @environment AND\r\n            descendant_span.account_id = @accountId\r\n            \r\n            JOIN span_concurrency AS endpoint_concurrency ON \r\n            endpoint_concurrency.span_uid = endpoint_span.uid AND\r\n                endpoint_concurrency.flow_hash = ''\r\n\r\n            JOIN span_concurrency AS descendant_concurrency ON \r\n            descendant_concurrency.span_uid = descendant_span.uid  AND\r\n                descendant_concurrency.flow_hash = span_descendants.descendant_flow_hash AND \r\n                descendant_concurrency.increase_from_base > endpoint_concurrency.increase_from_base/3\r\n\r\n            left JOIN span_flow_trace_samples ON \r\n            span_flow_trace_samples.account_id = e.account_id AND \r\n                span_flow_trace_samples.environment = e.environment AND\r\n                span_flow_trace_samples.flow_hash = descendant_concurrency.flow_hash    \r\n                \r\n            ORDER BY endpoint_span.uid, endpoint_concurrency.increase_from_base DESC 1.05 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "3B173790C2FB9F40",
            startTime: "2023-03-06T09:07:12.147036Z",
            duration: { value: 17.24, unit: "ms", raw: 17244100 }
          },
          firstDataSeenTime: "2023-03-06T09:08:08.433371Z",
          p50: { value: 10.77, unit: "ms", raw: 10774700 },
          p95: { value: 10.77, unit: "ms", raw: 10774700 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateEndpointUsageInsight Consume",
            displayName: "UpdateEndpointUsageInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateEndpointUsageInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointUsageInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointUsageInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-endpoint-usage-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.03, unit: "ms", raw: 11026300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 135.81, unit: "ms", raw: 135811700 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateEndpointUsageInsight Consume",
                subtitle: "3 spans",
                description:
                  "3465% \r\n            INSERT INTO code_object_insights(account_id, environment, code_object_id, insight_type, insight_data, is_active, first_detected, last_detected, last_deactivated, actual_start_time)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @CodeObjectId, \r\n                   @InsightType,\r\n                   CAST(@InsightData AS JSON),\r\n                   @IsActive,\r\n                   @FirstDetected,\r\n                   @LastDetected,\r\n                   @LastDeactivated,\r\n                   @ActualStartTime)\r\n            ON CONFLICT (account_id,environment, code_object_id, insight_type) \r\n            DO UPDATE SET \r\n                insight_data = CAST(@InsightData AS JSON),\r\n                is_active = @IsActive, \r\n                last_detected = @LastDetected,  \r\n                actual_start_time = @ActualStartTime 3.55 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "C9B5CF1E94B6A571224F6779BD546374",
            spanId: "ACB4208946213DCF",
            startTime: "2023-03-06T09:07:13.056832Z",
            duration: { value: 56.93, unit: "ms", raw: 56933400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.389411Z",
          p50: { value: 11.03, unit: "ms", raw: 11026300 },
          p95: { value: 135.81, unit: "ms", raw: 135811700 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateEndpointSlowestSpansInsight Consume",
            displayName: "UpdateEndpointSlowestSpansInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateEndpointSlowestSpansInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointSlowestSpansInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointSlowestSpansInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-endpoint-slowest-spans-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.12, unit: "ms", raw: 7121300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 38.1, unit: "ms", raw: 38099600 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateEndpointSlowestSpansInsight Consume",
                subtitle: "3 spans",
                description:
                  "987% \r\n            SELECT DISTINCT ON (endpoints.uid)\r\n                endpoints.environment AS Environment,\r\n                endpoints.route AS Route,\r\n                endpoints.code_object_id AS MethodCodeObjectId,\r\n                endpoints.span_code_object_id AS SpanCodeObjectId,\r\n                endpoints.service AS Service,\r\n                endpoints.usage_score AS UsageScore,\r\n                endpoints.max_calls_1m AS MaxCallsIn1Min,\r\n                endpoints.slow_spans AS SlowSpansJson,\r\n                endpoints.highly_occuring_spans AS HighlyOccuringSpansJson,\r\n                endpoints.endpoints_median AS EndpointsMedian,\r\n                endpoints.endpoints_median_of_medians AS EndpointsMedianOfMedians,\r\n                endpoints.endpoints_p75 AS EndpointsP75,\r\n                endpoints.median AS Median,\r\n                endpoints.zscore AS ZScore,\r\n                endpoints.updated_at AS LastUpdate,\r\n                spans.span AS SpanName,\r\n                spans.kind AS SpanKind,\r\n                spans.span_role AS SpanRole,\r\n                spans.display_name AS SpanDisplayName,\r\n                spans.original_name AS SpanOriginalName,\r\n                spans.span_classification AS SpanClassification,\r\n                spans.instrumentation_library AS SpanInstrumentationLibrary\r\n            FROM endpoints\r\n            LEFT JOIN spans ON spans.span_code_object_id = endpoints.span_code_object_id\r\n            WHERE endpoints.account_id = @accountId AND\r\n                  endpoints.environment = @environment AND\r\n                  endpoints.service = @service AND\r\n                  endpoints.route = @route 5.97 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "9237B5683934811A7AC0909F46C2BC0E",
            spanId: "BF9A404F715AD6F8",
            startTime: "2023-03-06T09:07:13.001991Z",
            duration: { value: 24.78, unit: "ms", raw: 24783700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:08.751349Z",
          p50: { value: 7.12, unit: "ms", raw: 7121300 },
          p95: { value: 38.1, unit: "ms", raw: 38099600 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateEndpointSuspectedNPlusOneInsight Consume",
            displayName: "UpdateEndpointSuspectedNPlusOneInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateEndpointSuspectedNPlusOneInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointSuspectedNPlusOneInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.EndpointSuspectedNPlusOneInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-endpoint-suspected-nplus-one-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 4.31, unit: "ms", raw: 4305900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 127.04, unit: "ms", raw: 127044100 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName:
                  "UpdateEndpointSuspectedNPlusOneInsight Consume",
                subtitle: "3 spans",
                description:
                  "4502% \r\n            UPDATE code_object_insights\r\n            SET is_active = false,\r\n                last_deactivated = (now() at time zone 'utc')\r\n            WHERE\r\n                account_id = @AccountId AND \r\n                environment = @Environment AND \r\n                code_object_id = @CodeObjectId AND \r\n                insight_type = @InsightType 2.5 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "43327ECBBEF04A71",
            startTime: "2023-03-06T09:07:13.065094Z",
            duration: { value: 16.08, unit: "ms", raw: 16079700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:09.195748Z",
          p50: { value: 4.31, unit: "ms", raw: 4305900 },
          p95: { value: 127.04, unit: "ms", raw: 127044100 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanDurationInsight Consume",
            displayName: "UpdateSpanDurationInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanDurationInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanDurationInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.SpanDurationInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-duration-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 173.3, unit: "ms", raw: 173295100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 173.3, unit: "ms", raw: 173295100 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateSpanDurationInsight Consume",
                subtitle: "3 spans",
                description: "5681% QueryAsync 21.47 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "54B1DA39C9455C42",
            startTime: "2023-03-06T09:07:12.894629Z",
            duration: { value: 1.32, unit: "sec", raw: 1322055100 }
          },
          firstDataSeenTime: "2023-03-06T09:09:03.398859Z",
          p50: { value: 173.3, unit: "ms", raw: 173295100 },
          p95: { value: 173.3, unit: "ms", raw: 173295100 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateMethodErrorHotspotInsight Consume",
            displayName: "UpdateMethodErrorHotspotInsight Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateMethodErrorHotspotInsight Consume",
            methodCodeObjectId:
              "Digma.Insight.Analysis.Consumers.MethodErrorHotspotInsightConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Insight.Analysis.Consumers.MethodErrorHotspotInsightConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Insight.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-method-error-hotspot-insight::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 30.7, unit: "ms", raw: 30695200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 50.75, unit: "ms", raw: 50750200 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateMethodErrorHotspotInsight Consume",
                subtitle: "1 spans",
                description:
                  "619% \r\n            INSERT INTO code_object_insights(account_id, environment, code_object_id, insight_type, insight_data, is_active, first_detected, last_detected, last_deactivated, actual_start_time)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @CodeObjectId, \r\n                   @InsightType,\r\n                   CAST(@InsightData AS JSON),\r\n                   @IsActive,\r\n                   @FirstDetected,\r\n                   @LastDetected,\r\n                   @LastDeactivated,\r\n                   @ActualStartTime)\r\n            ON CONFLICT (account_id,environment, code_object_id, insight_type) \r\n            DO UPDATE SET \r\n                insight_data = CAST(@InsightData AS JSON),\r\n                is_active = @IsActive, \r\n                last_detected = @LastDetected,  \r\n                actual_start_time = @ActualStartTime 314.44 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "CE540BA5DFD50D37",
            startTime: "2023-03-06T09:07:13.013425Z",
            duration: { value: 17.87, unit: "ms", raw: 17869000 }
          },
          firstDataSeenTime: "2023-03-06T09:09:07.772499Z",
          p50: { value: 30.7, unit: "ms", raw: 30695200 },
          p95: { value: 50.75, unit: "ms", raw: 50750200 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "Digma.Insight.Analysis"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CalcSpanConcurrencySummaries",
            displayName: "CalcSpanConcurrencySummaries",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$CalcSpanConcurrencySummaries",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.89, unit: "ms", raw: 7893750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 8.68, unit: "ms", raw: 8682000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "475BE9C038DBB3C2",
            startTime: "2023-03-06T09:07:25.836059Z",
            duration: { value: 7.14, unit: "ms", raw: 7143700 }
          },
          firstDataSeenTime: "2023-03-06T09:08:04.720161Z",
          p50: { value: 7.89, unit: "ms", raw: 7893750 },
          p95: { value: 8.68, unit: "ms", raw: 8682000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CalcSpanDurationSummaries",
            displayName: "CalcSpanDurationSummaries",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$CalcSpanDurationSummaries",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 139.12, unit: "ms", raw: 139121100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 232.38, unit: "ms", raw: 232375800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "06AB743668AEA4EA",
            startTime: "2023-03-06T09:07:13.972683Z",
            duration: { value: 206.04, unit: "ms", raw: 206040000 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.988508Z",
          p50: { value: 139.12, unit: "ms", raw: 139121100 },
          p95: { value: 232.38, unit: "ms", raw: 232375800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CountSpanRecordsPerSecond",
            displayName: "CountSpanRecordsPerSecond",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$CountSpanRecordsPerSecond",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 20.5, unit: "ms", raw: 20495400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 90.3, unit: "ms", raw: 90302200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "1D7D5E74F74997C4",
            startTime: "2023-03-06T09:07:13.711852Z",
            duration: { value: 260.81, unit: "ms", raw: 260812400 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.852405Z",
          p50: { value: 20.5, unit: "ms", raw: 20495400 },
          p95: { value: 90.3, unit: "ms", raw: 90302200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanDurationLastChanges",
            displayName: "GetSpanDurationLastChanges",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpanDurationLastChanges",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 15.82, unit: "ms", raw: 15824200 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 392.66,
                unit: "ms",
                raw: 392656359.9999999
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "BB9A919104271427",
            startTime: "2023-03-06T09:07:13.04145Z",
            duration: { value: 304.07, unit: "ms", raw: 304074500 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.828986Z",
          p50: { value: 15.82, unit: "ms", raw: 15824200 },
          p95: { value: 392.66, unit: "ms", raw: 392656359.9999999 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanFlowStats",
            displayName: "GetSpanFlowStats",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanFlowStats",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.76, unit: "ms", raw: 10757450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.78, unit: "ms", raw: 14780600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "B50E7B73BB2C0594",
            startTime: "2023-03-06T09:07:09.841244Z",
            duration: { value: 42.07, unit: "ms", raw: 42069300 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.301602Z",
          p50: { value: 10.76, unit: "ms", raw: 10757450 },
          p95: { value: 14.78, unit: "ms", raw: 14780600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanLastConcurrencySummary",
            displayName: "GetSpanLastConcurrencySummary",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpanLastConcurrencySummary",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.32, unit: "ms", raw: 7320750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.49, unit: "ms", raw: 7494500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "FAD3DB236804D24B",
            startTime: "2023-03-06T09:07:25.741686Z",
            duration: { value: 94.37, unit: "ms", raw: 94365600 }
          },
          firstDataSeenTime: "2023-03-06T09:08:04.57295Z",
          p50: { value: 7.32, unit: "ms", raw: 7320750 },
          p95: { value: 7.49, unit: "ms", raw: 7494500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanLastDurationSummaries",
            displayName: "GetSpanLastDurationSummaries",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpanLastDurationSummaries",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 17.62, unit: "ms", raw: 17619250 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 390.95, unit: "ms", raw: 390953300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "2E6933436FC04196",
            startTime: "2023-03-06T09:07:12.692574Z",
            duration: { value: 348.85, unit: "ms", raw: 348846300 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.656158Z",
          p50: { value: 17.62, unit: "ms", raw: 17619250 },
          p95: { value: 390.95, unit: "ms", raw: 390953300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanMetadata",
            displayName: "GetSpanMetadata",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanMetadata",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.35, unit: "ms", raw: 52348900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 52.35, unit: "ms", raw: 52348900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "7EFB8038EF7B1B59",
            startTime: "2023-03-06T09:07:08.699623Z",
            duration: { value: 52.35, unit: "ms", raw: 52348900 }
          },
          firstDataSeenTime: "2023-03-06T09:08:12.269491Z",
          p50: { value: 52.35, unit: "ms", raw: 52348900 },
          p95: { value: 52.35, unit: "ms", raw: 52348900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanScalingData",
            displayName: "GetSpanScalingData",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanScalingData",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 32.14, unit: "ms", raw: 32139350 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.39, unit: "sec", raw: 1393894300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "800358A6E9337ED8",
            startTime: "2023-03-06T09:07:11.785756Z",
            duration: { value: 1.33, unit: "sec", raw: 1334015900 }
          },
          firstDataSeenTime: "2023-03-06T09:07:07.126117Z",
          p50: { value: 32.14, unit: "ms", raw: 32139350 },
          p95: { value: 1.39, unit: "sec", raw: 1393894300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpansDurationSummaries",
            displayName: "GetSpansDurationSummaries",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetSpansDurationSummaries",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 37.92, unit: "ms", raw: 37920100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.01, unit: "sec", raw: 1012900000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "D8FED9AF5984F2C5",
            startTime: "2023-03-06T09:07:13.345536Z",
            duration: { value: 161.12, unit: "ms", raw: 161124100 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.028752Z",
          p50: { value: 37.92, unit: "ms", raw: 37920100 },
          p95: { value: 1.01, unit: "sec", raw: 1012900000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "QueryAsync",
            displayName: "QueryAsync",
            instrumentationLibrary: "InfluxClient",
            spanCodeObjectId: "span:InfluxClient$_$QueryAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.25, unit: "ms", raw: 52246000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.08, unit: "sec", raw: 1083772625 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "8A4F6E987841CC34",
            startTime: "2023-03-06T09:07:25.836066Z",
            duration: { value: 7.13, unit: "ms", raw: 7134000 }
          },
          firstDataSeenTime: "2023-03-06T09:08:14.44867Z",
          p50: { value: 52.25, unit: "ms", raw: 52246000 },
          p95: { value: 1.08, unit: "sec", raw: 1083772625 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "WriteAsync",
            displayName: "WriteAsync",
            instrumentationLibrary: "InfluxClient",
            spanCodeObjectId: "span:InfluxClient$_$WriteAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 38.32, unit: "ms", raw: 38324600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 287.23, unit: "ms", raw: 287228600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "CFE031B7CD920139",
            startTime: "2023-03-06T09:07:25.84321Z",
            duration: { value: 45.88, unit: "ms", raw: 45881200 }
          },
          firstDataSeenTime: "2023-03-06T09:08:13.287429Z",
          p50: { value: 38.32, unit: "ms", raw: 38324600 },
          p95: { value: 287.23, unit: "ms", raw: 287228600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-concurrency-histogram-measurement::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-concurrency-histogram-measurement::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-concurrency-histogram-measurement::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 18.56, unit: "ms", raw: 18562200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.4, unit: "sec", raw: 1395557500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "D30C452744C18090",
            startTime: "2023-03-06T09:07:11.785705Z",
            duration: { value: 1.34, unit: "sec", raw: 1336711500 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.930763Z",
          p50: { value: 18.56, unit: "ms", raw: 18562200 },
          p95: { value: 1.4, unit: "sec", raw: 1395557500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-concurrency-summary-measurement::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-concurrency-summary-measurement::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-concurrency-summary-measurement::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 39.74, unit: "ms", raw: 39740100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 54.29, unit: "ms", raw: 54286600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "EECC9B00E86DDB9E",
            startTime: "2023-03-06T09:07:25.741641Z",
            duration: { value: 147.47, unit: "ms", raw: 147468600 }
          },
          firstDataSeenTime: "2023-03-06T09:08:04.439934Z",
          p50: { value: 39.74, unit: "ms", raw: 39740100 },
          p95: { value: 54.29, unit: "ms", raw: 54286600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-duration-change-measurement::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-duration-change-measurement::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-duration-change-measurement::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 99.65, unit: "ms", raw: 99646100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2020490800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "CEEF101B9E7F47D0",
            startTime: "2023-03-06T09:07:11.780227Z",
            duration: { value: 1.73, unit: "sec", raw: 1726458000 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.206006Z",
          p50: { value: 99.65, unit: "ms", raw: 99646100 },
          p95: { value: 2.02, unit: "sec", raw: 2020490800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-duration-summary-measurement::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-duration-summary-measurement::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-duration-summary-measurement::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 83.97, unit: "ms", raw: 83971300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.42, unit: "sec", raw: 1415455600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "24F315738C69BB0B",
            startTime: "2023-03-06T09:07:12.03516Z",
            duration: { value: 2.2, unit: "sec", raw: 2198312600 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.464355Z",
          p50: { value: 83.97, unit: "ms", raw: 83971300 },
          p95: { value: 1.42, unit: "sec", raw: 1415455600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "update-span-flow-measurement::00000000-0000-0000-0000-000000000000 process",
            displayName:
              "update-span-flow-measurement::00000000-0000-0000-0000-000000000000 process",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$update-span-flow-measurement::00000000-0000-0000-0000-000000000000 process",
            methodCodeObjectId: "",
            kind: "Consumer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 19.98, unit: "ms", raw: 19980000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 26.93, unit: "ms", raw: 26934000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "A72CF81B02D8C2F6",
            startTime: "2023-03-06T09:07:09.841186Z",
            duration: { value: 65.82, unit: "ms", raw: 65816600 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.152469Z",
          p50: { value: 19.98, unit: "ms", raw: 19980000 },
          p95: { value: 26.93, unit: "ms", raw: 26934000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Consume",
            displayName: "Consume",
            instrumentationLibrary:
              "SpanConcurrencyHistogramMeasurementConsumer",
            spanCodeObjectId:
              "span:SpanConcurrencyHistogramMeasurementConsumer$_$Consume",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 35.43, unit: "ms", raw: 35426800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.4, unit: "sec", raw: 1395509000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "8B2FB48A0B9D9047",
            startTime: "2023-03-06T09:07:11.785738Z",
            duration: { value: 1.34, unit: "sec", raw: 1336658100 }
          },
          firstDataSeenTime: "2023-03-06T09:07:07.034836Z",
          p50: { value: 35.43, unit: "ms", raw: 35426800 },
          p95: { value: 1.4, unit: "sec", raw: 1395509000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Consume",
            displayName: "Consume",
            instrumentationLibrary: "SpanConcurrencySummaryMeasurementConsumer",
            spanCodeObjectId:
              "span:SpanConcurrencySummaryMeasurementConsumer$_$Consume",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 39.69, unit: "ms", raw: 39688750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 54.24, unit: "ms", raw: 54236400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "6B0251B419F5E792",
            startTime: "2023-03-06T09:07:25.741674Z",
            duration: { value: 147.42, unit: "ms", raw: 147424400 }
          },
          firstDataSeenTime: "2023-03-06T09:08:04.546414Z",
          p50: { value: 39.69, unit: "ms", raw: 39688750 },
          p95: { value: 54.24, unit: "ms", raw: 54236400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CleanUnverifiedChanges",
            displayName: "CleanUnverifiedChanges",
            instrumentationLibrary: "SpanDurationChangeMeasurementConsumer",
            spanCodeObjectId:
              "span:SpanDurationChangeMeasurementConsumer$_$CleanUnverifiedChanges",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 27.26, unit: "ms", raw: 27259000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 793, unit: "ms", raw: 793003400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "A3935CCCA0A3E03B",
            startTime: "2023-03-06T09:07:11.780304Z",
            duration: { value: 1.26, unit: "sec", raw: 1261129800 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.354325Z",
          p50: { value: 27.26, unit: "ms", raw: 27259000 },
          p95: { value: 793, unit: "ms", raw: 793003400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Consume",
            displayName: "Consume",
            instrumentationLibrary: "SpanDurationChangeMeasurementConsumer",
            spanCodeObjectId:
              "span:SpanDurationChangeMeasurementConsumer$_$Consume",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 99.59, unit: "ms", raw: 99592500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2020401500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "CFB9DE089F61A2FD",
            startTime: "2023-03-06T09:07:11.780298Z",
            duration: { value: 1.73, unit: "sec", raw: 1726370600 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.288087Z",
          p50: { value: 99.59, unit: "ms", raw: 99592500 },
          p95: { value: 2.02, unit: "sec", raw: 2020401500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SetNewDurationChanges",
            displayName: "SetNewDurationChanges",
            instrumentationLibrary: "SpanDurationChangeMeasurementConsumer",
            spanCodeObjectId:
              "span:SpanDurationChangeMeasurementConsumer$_$SetNewDurationChanges",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 56.97, unit: "ms", raw: 56973600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.23, unit: "sec", raw: 1227383800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "25EA126E7C85AAD8",
            startTime: "2023-03-06T09:07:13.041444Z",
            duration: { value: 465.22, unit: "ms", raw: 465221100 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.716647Z",
          p50: { value: 56.97, unit: "ms", raw: 56973600 },
          p95: { value: 1.23, unit: "sec", raw: 1227383800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Consume",
            displayName: "Consume",
            instrumentationLibrary: "SpanDurationSummaryMeasurementConsumer",
            spanCodeObjectId:
              "span:SpanDurationSummaryMeasurementConsumer$_$Consume",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 83.91, unit: "ms", raw: 83913800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.42, unit: "sec", raw: 1415397400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "8C76856D2E9FCC72",
            startTime: "2023-03-06T09:07:12.035205Z",
            duration: { value: 2.2, unit: "sec", raw: 2198250500 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.555503Z",
          p50: { value: 83.91, unit: "ms", raw: 83913800 },
          p95: { value: 1.42, unit: "sec", raw: 1415397400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Consume",
            displayName: "Consume",
            instrumentationLibrary: "SpanFlowMeasurementConsumer",
            spanCodeObjectId: "span:SpanFlowMeasurementConsumer$_$Consume",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 19.18, unit: "ms", raw: 19183750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 26.85, unit: "ms", raw: 26853200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "A6A37B8400059389",
            startTime: "2023-03-06T09:07:09.841227Z",
            duration: { value: 65.76, unit: "ms", raw: 65758600 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.198978Z",
          p50: { value: 19.18, unit: "ms", raw: 19183750 },
          p95: { value: 26.85, unit: "ms", raw: 26853200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "DeleteConcurrency",
            displayName: "DeleteConcurrency",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$DeleteConcurrency",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.12, unit: "ms", raw: 3117300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 6.64, unit: "ms", raw: 6641300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "C25F12602DEB5BAD",
            startTime: "2023-03-06T09:07:13.119812Z",
            duration: { value: 2.58, unit: "ms", raw: 2576300 }
          },
          firstDataSeenTime: "2023-03-06T09:07:07.555873Z",
          p50: { value: 3.12, unit: "ms", raw: 3117300 },
          p95: { value: 6.64, unit: "ms", raw: 6641300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertSpanFlows",
            displayName: "UpsertSpanFlows",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertSpanFlows",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.77, unit: "ms", raw: 6771150 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 8.1, unit: "ms", raw: 8096100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "465AB21B12D11969",
            startTime: "2023-03-06T09:07:09.885402Z",
            duration: { value: 21.58, unit: "ms", raw: 21578500 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.614585Z",
          p50: { value: 6.77, unit: "ms", raw: 6771150 },
          p95: { value: 8.1, unit: "ms", raw: 8096100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B0E89D0EE0127E274B0328172B5A71",
            displayName:
              "\r\n            SELECT environment AS Environment,\r\n                   span AS Name,\r\n                   display_name AS DisplayName,\r\n                   original_name AS OriginalName,\r\n                   instrumentation_library AS InstrumentationLibrary,\r\n                   span_code_object_id AS SpanCodeObjectId,\r\n                   code_object_id AS CodeObjectId,\r\n                   span_role AS Role,\r\n                   span_classification AS Classification,\r\n                   kind AS Kind\r\n            FROM spans\r\n            WHERE account_id = @accountId AND environment = ANY (@environments) AND span_code_object_id = @spanCodeObjectId\r\n            LIMIT 1\r\n        ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B0E89D0EE0127E274B0328172B5A71",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.68, unit: "ms", raw: 1678300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.8, unit: "ms", raw: 2801200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "AF1B165E47DF4788",
            startTime: "2023-03-06T09:07:08.673586Z",
            duration: { value: 6.25, unit: "ms", raw: 6253800 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.375352Z",
          p50: { value: 1.68, unit: "ms", raw: 1678300 },
          p95: { value: 2.8, unit: "ms", raw: 2801200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B8B312DEC0E93574F0ED791C665E2F",
            displayName:
              "\r\n            DELETE FROM span_concurrency\r\n            WHERE span_uid IN\r\n            (\r\n                SELECT spans.uid\r\n                FROM (VALUES (@AccountId_0, @Environment_0, @InstrumentationLibrary_0, @SpanName_0, @FlowHash_0),\n(@AccountId_1, @Environment_1, @InstrumentationLibrary_1, @SpanName_1, @FlowHash_1)) AS inputs (account_id, environment, instrumentation_library, span_name, flow_hash)\r\n                JOIN spans ON spans.account_id = inputs.account_id AND\r\n                              spans.environment = inputs.environment AND\r\n                              spans.instrumentation_library = inputs.instrumentation_library AND\r\n                              spans.span = inputs.span_name\r\n                JOIN span_concurrency ON span_concurrency.span_uid = spans.uid AND \r\n                                         span_concurrency.flow_hash = inputs.flow_hash\r\n            )",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B8B312DEC0E93574F0ED791C665E2F",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3, unit: "ms", raw: 3000600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 6.55, unit: "ms", raw: 6548600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "E64F0A5EF49287AD",
            startTime: "2023-03-06T09:07:13.119915Z",
            duration: { value: 2.45, unit: "ms", raw: 2447900 }
          },
          firstDataSeenTime: "2023-03-06T09:07:07.651631Z",
          p50: { value: 3, unit: "ms", raw: 3000600 },
          p95: { value: 6.55, unit: "ms", raw: 6548600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "C3FFB8B4A1803C183D2DD736022856",
            displayName:
              "\r\n            INSERT INTO span_flows(service, span, account_id, environment, flow_hash, count_by_flow, count_by_span, instrumentation_library, code_object_id, span_code_object_id)\r\n            VALUES(\r\n                @Service, \r\n                @Span, \r\n                @AccountId, \r\n                @Environment,\r\n                @FlowHash, \r\n                @FlowOccurrences,\r\n                @SpanOccurrences,\r\n                @InstrumentationLibrary,\r\n                @CodeObjectId,\r\n                @SpanCodeObjectId\r\n            )\r\n            ON CONFLICT ON CONSTRAINT span_flows_unique_key\r\n            DO UPDATE SET\r\n                count_by_flow = @FlowOccurrences, \r\n                count_by_span = @SpanOccurrences,\r\n                code_object_id = @CodeObjectId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C3FFB8B4A1803C183D2DD736022856",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.18, unit: "ms", raw: 6183600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.97, unit: "ms", raw: 7967700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "E75E7C6BBABB548A",
            startTime: "2023-03-06T09:07:09.885473Z",
            duration: { value: 21.48, unit: "ms", raw: 21482400 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.674717Z",
          p50: { value: 6.18, unit: "ms", raw: 6183600 },
          p95: { value: 7.97, unit: "ms", raw: 7967700 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanConcurrencyHistogramMeasurement Consume",
            displayName: "UpdateSpanConcurrencyHistogramMeasurement Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanConcurrencyHistogramMeasurement Consume",
            methodCodeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanConcurrencyHistogramMeasurementConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanConcurrencyHistogramMeasurementConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-concurrency-histogram-measurement::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 31.73, unit: "ms", raw: 31734000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.4, unit: "sec", raw: 1397237500 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName:
                  "UpdateSpanConcurrencyHistogramMeasurement Consume",
                subtitle: "3 spans",
                description: "19476% QueryAsync 4.9 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "B9D68CB39F24CDFB",
            startTime: "2023-03-06T09:07:11.785135Z",
            duration: { value: 1.34, unit: "sec", raw: 1338682000 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.845902Z",
          p50: { value: 31.73, unit: "ms", raw: 31734000 },
          p95: { value: 1.4, unit: "sec", raw: 1397237500 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanDurationChangeMeasurement Consume",
            displayName: "UpdateSpanDurationChangeMeasurement Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanDurationChangeMeasurement Consume",
            methodCodeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanDurationChangeMeasurementConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanDurationChangeMeasurementConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-duration-change-measurement::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 117.5, unit: "ms", raw: 117502800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.55, unit: "sec", raw: 2545423100 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName:
                  "UpdateSpanDurationChangeMeasurement Consume",
                subtitle: "2 spans",
                description: "10213% QueryAsync 12 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "9A76F49BAF5C070A",
            startTime: "2023-03-06T09:07:11.779672Z",
            duration: { value: 1.73, unit: "sec", raw: 1728658600 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.771859Z",
          p50: { value: 117.5, unit: "ms", raw: 117502800 },
          p95: { value: 2.55, unit: "sec", raw: 2545423100 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanConcurrencySummaryMeasurement Consume",
            displayName: "UpdateSpanConcurrencySummaryMeasurement Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanConcurrencySummaryMeasurement Consume",
            methodCodeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanConcurrencySummaryMeasurementConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanConcurrencySummaryMeasurementConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-concurrency-summary-measurement::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 42.26, unit: "ms", raw: 42262400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 57, unit: "ms", raw: 56997300 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName:
                  "UpdateSpanConcurrencySummaryMeasurement Consume",
                subtitle: "2 spans",
                description: "6854% WriteAsync 3.91 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "AF3333BDD7745BED",
            startTime: "2023-03-06T09:07:25.740351Z",
            duration: { value: 149.8, unit: "ms", raw: 149797000 }
          },
          firstDataSeenTime: "2023-03-06T09:08:04.299555Z",
          p50: { value: 42.26, unit: "ms", raw: 42262400 },
          p95: { value: 57, unit: "ms", raw: 56997300 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanFlowMeasurement Consume",
            displayName: "UpdateSpanFlowMeasurement Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanFlowMeasurement Consume",
            methodCodeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanFlowMeasurementConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanFlowMeasurementConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-flow-measurement::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 26.99, unit: "ms", raw: 26991100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 31.24, unit: "ms", raw: 31236200 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "UpdateSpanFlowMeasurement Consume",
                subtitle: "3 spans",
                description:
                  "4526% \r\n            INSERT INTO span_flows(service, span, account_id, environment, flow_hash, count_by_flow, count_by_span, instrumentation_library, code_object_id, span_code_object_id)\r\n            VALUES(\r\n                @Service, \r\n                @Span, \r\n                @AccountId, \r\n                @Environment,\r\n                @FlowHash, \r\n                @FlowOccurrences,\r\n                @SpanOccurrences,\r\n                @InstrumentationLibrary,\r\n                @CodeObjectId,\r\n                @SpanCodeObjectId\r\n            )\r\n            ON CONFLICT ON CONSTRAINT span_flows_unique_key\r\n            DO UPDATE SET\r\n                count_by_flow = @FlowOccurrences, \r\n                count_by_span = @SpanOccurrences,\r\n                code_object_id = @CodeObjectId 1.3 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "30E374A6BFE9B3E8",
            startTime: "2023-03-06T09:07:09.837711Z",
            duration: { value: 71.44, unit: "ms", raw: 71438300 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.698911Z",
          p50: { value: 26.99, unit: "ms", raw: 26991100 },
          p95: { value: 31.24, unit: "ms", raw: 31236200 }
        },
        {
          span: {
            classification: "Consumer",
            role: "Entry",
            name: "UpdateSpanDurationSummaryMeasurement Consume",
            displayName: "UpdateSpanDurationSummaryMeasurement Consume",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$UpdateSpanDurationSummaryMeasurement Consume",
            methodCodeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanDurationSummaryMeasurementConsumer$_$Consume(ConsumeContext`1)",
            kind: "Consumer",
            codeObjectId:
              "Digma.Measurement.Analysis.Consumers.SpanDurationSummaryMeasurementConsumer$_$Consume(ConsumeContext`1)"
          },
          assetType: "Consumer",
          serviceName: "Digma.Measurement.Analysis",
          endpointCodeObjectId:
            "endpoint:epConsumer:update-span-duration-summary-measurement::00000000-0000-0000-0000-000000000000 receive",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 103.42, unit: "ms", raw: 103420600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.68, unit: "sec", raw: 1675592400 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName:
                  "UpdateSpanDurationSummaryMeasurement Consume",
                subtitle: "3 spans",
                description:
                  "22876% update-span-duration-summary-measurement::00000000-0000-0000-0000-000000000000 process 12.2 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "632AA377BE141861",
            startTime: "2023-03-06T09:07:12.029906Z",
            duration: { value: 2.21, unit: "sec", raw: 2205437400 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.362716Z",
          p50: { value: 103.42, unit: "ms", raw: 103420600 },
          p95: { value: 1.68, unit: "sec", raw: 1675592400 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "ARIK-LAPTOP[LOCAL]",
      serviceName: "Digma.Measurement.Analysis"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "EndpointClient",
            role: "Unknown",
            name: "CodeAnalytics/codeObjects/errorsHTTP POST ",
            displayName: "HTTP POST",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Http",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Http$_$CodeAnalytics/codeObjects/errorsHTTP POST ",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 4.43, unit: "ms", raw: 4432800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 5.11, unit: "ms", raw: 5114800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "1A76447E0AAAFC5DFE19BE4126FBEA92",
            spanId: "53F5CA6F511EBDFA",
            startTime: "2023-03-06T09:05:37.976327Z",
            duration: { value: 3.96, unit: "ms", raw: 3955000 }
          },
          firstDataSeenTime: "2023-03-06T09:05:01.066222Z",
          p50: { value: 4.43, unit: "ms", raw: 4432800 },
          p95: { value: 5.11, unit: "ms", raw: 5114800 }
        },
        {
          span: {
            classification: "EndpointClient",
            role: "Unknown",
            name: "CodeAnalytics/codeObjects/insightsHTTP POST ",
            displayName: "HTTP POST",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Http",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Http$_$CodeAnalytics/codeObjects/insightsHTTP POST ",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.49, unit: "ms", raw: 7485800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 9.11, unit: "ms", raw: 9108600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "A2F66855E075329B7131F3858F353361",
            spanId: "B183346EAD8A8E56",
            startTime: "2023-03-06T09:05:37.952761Z",
            duration: { value: 8.87, unit: "ms", raw: 8874600 }
          },
          firstDataSeenTime: "2023-03-06T09:05:01.181113Z",
          p50: { value: 7.49, unit: "ms", raw: 7485800 },
          p95: { value: 9.11, unit: "ms", raw: 9108600 }
        },
        {
          span: {
            classification: "EndpointClient",
            role: "Unknown",
            name: "CodeAnalytics/codeobjects/statusHTTP POST ",
            displayName: "HTTP POST",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Http",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Http$_$CodeAnalytics/codeobjects/statusHTTP POST ",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 4.41, unit: "ms", raw: 4410400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 5.53, unit: "ms", raw: 5527425 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "1964683C1CEBFDA7CAEFC94DECAA3459",
            spanId: "5013DECCE6E401AB",
            startTime: "2023-03-06T09:05:37.981856Z",
            duration: { value: 4.41, unit: "ms", raw: 4410400 }
          },
          firstDataSeenTime: "2023-03-06T09:05:01.109486Z",
          p50: { value: 4.41, unit: "ms", raw: 4410400 },
          p95: { value: 5.53, unit: "ms", raw: 5527425 }
        },
        {
          span: {
            classification: "EndpointClient",
            role: "Unknown",
            name: "HTTP POST Digma.Analytics api/CodeObjects/errors",
            displayName: "HTTP POST",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Http",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Http$_$HTTP POST Digma.Analytics api/CodeObjects/errors",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.01, unit: "ms", raw: 5006000 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 12.53,
                unit: "ms",
                raw: 12529725.000000004
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "671C7A9A1B58846F35CB5612C8ABBA7C",
            spanId: "E16E0F811C023165",
            startTime: "2023-03-06T09:10:49.355132Z",
            duration: { value: 14.55, unit: "ms", raw: 14551800 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.272899Z",
          p50: { value: 5.01, unit: "ms", raw: 5006000 },
          p95: { value: 12.53, unit: "ms", raw: 12529725.000000004 }
        },
        {
          span: {
            classification: "EndpointClient",
            role: "Unknown",
            name: "HTTP POST Digma.Analytics api/CodeObjects/insights",
            displayName: "HTTP POST",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Http",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Http$_$HTTP POST Digma.Analytics api/CodeObjects/insights",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.76, unit: "ms", raw: 7756600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.33, unit: "ms", raw: 11328050 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CBEFF4E88D153015730AB7B76C1E5EA2",
            spanId: "9CA42FA233D81DEC",
            startTime: "2023-03-06T09:10:49.326137Z",
            duration: { value: 7.63, unit: "ms", raw: 7625900 }
          },
          firstDataSeenTime: "2023-03-06T09:06:01.617061Z",
          p50: { value: 7.76, unit: "ms", raw: 7756600 },
          p95: { value: 11.33, unit: "ms", raw: 11328050 }
        },
        {
          span: {
            classification: "EndpointClient",
            role: "Unknown",
            name: "HTTP POST Digma.Analytics api/CodeObjects/status",
            displayName: "HTTP POST",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Http",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Http$_$HTTP POST Digma.Analytics api/CodeObjects/status",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.22, unit: "ms", raw: 5223300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.47, unit: "ms", raw: 10465145 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "CF8A900211EB6B54",
            startTime: "2023-03-06T09:10:49.371351Z",
            duration: { value: 4.43, unit: "ms", raw: 4433200 }
          },
          firstDataSeenTime: "2023-03-06T09:06:02.621055Z",
          p50: { value: 5.22, unit: "ms", raw: 5223300 },
          p95: { value: 10.47, unit: "ms", raw: 10465145 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST CodeAnalytics/codeObjects/insights",
            displayName: "HTTP POST CodeAnalytics/codeObjects/insights",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP POST CodeAnalytics/codeObjects/insights",
            methodCodeObjectId:
              "Digma.PluginBackend.Controllers.CodeAnalyticsController$_$GetInsights(InsightRequest)",
            kind: "Server",
            codeObjectId:
              "Digma.PluginBackend.Controllers.CodeAnalyticsController$_$GetInsights(InsightRequest)"
          },
          assetType: "Endpoint",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST CodeAnalytics/codeObjects/insights",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 9.21, unit: "ms", raw: 9210350 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 12.98, unit: "ms", raw: 12979540 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CBEFF4E88D153015730AB7B76C1E5EA2",
            spanId: "299C9D053E3F6ECA",
            startTime: "2023-03-06T09:10:49.325096Z",
            duration: { value: 9.55, unit: "ms", raw: 9548800 }
          },
          firstDataSeenTime: "2023-03-06T09:05:01.103951Z",
          p50: { value: 9.21, unit: "ms", raw: 9210350 },
          p95: { value: 12.98, unit: "ms", raw: 12979540 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST CodeAnalytics/codeobjects/status",
            displayName: "HTTP POST CodeAnalytics/codeobjects/status",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP POST CodeAnalytics/codeobjects/status",
            methodCodeObjectId:
              "Digma.PluginBackend.Controllers.CodeAnalyticsController$_$GetCodeObjectsStatus(CodeObjectStatusRequest)",
            kind: "Server",
            codeObjectId:
              "Digma.PluginBackend.Controllers.CodeAnalyticsController$_$GetCodeObjectsStatus(CodeObjectStatusRequest)"
          },
          assetType: "Endpoint",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST CodeAnalytics/codeobjects/status",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.25, unit: "ms", raw: 6245750 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 12.14,
                unit: "ms",
                raw: 12137429.999999987
              }
            }
          ],
          insights: [
            {
              type: "HighUsage",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "885C0D48F2B03CCC382D4911855FFBCA",
            spanId: "1174F6DE249AC5D7",
            startTime: "2023-03-06T09:10:49.370937Z",
            duration: { value: 5.59, unit: "ms", raw: 5592200 }
          },
          firstDataSeenTime: "2023-03-06T09:05:01.086183Z",
          p50: { value: 6.25, unit: "ms", raw: 6245750 },
          p95: { value: 12.14, unit: "ms", raw: 12137429.999999987 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET CodeAnalytics/codeObjects/errors",
            displayName: "HTTP GET CodeAnalytics/codeObjects/errors",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET CodeAnalytics/codeObjects/errors",
            methodCodeObjectId:
              "Digma.PluginBackend.Controllers.CodeAnalyticsController$_$GetCodeObjectErrors(String[],String)",
            kind: "Server",
            codeObjectId:
              "Digma.PluginBackend.Controllers.CodeAnalyticsController$_$GetCodeObjectErrors(String[],String)"
          },
          assetType: "Endpoint",
          serviceName: "Digma.PluginBackend",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET CodeAnalytics/codeObjects/errors",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.01, unit: "ms", raw: 6013100 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 13.55,
                unit: "ms",
                raw: 13545929.99999999
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "671C7A9A1B58846F35CB5612C8ABBA7C",
            spanId: "A2A0D92AD07C6211",
            startTime: "2023-03-06T09:10:49.354771Z",
            duration: { value: 15.57, unit: "ms", raw: 15573200 }
          },
          firstDataSeenTime: "2023-03-06T09:05:01.235468Z",
          p50: { value: 6.01, unit: "ms", raw: 6013100 },
          p95: { value: 13.55, unit: "ms", raw: 13545929.99999999 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "Digma.PluginBackend"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetAllInsightMethodObjects",
            displayName: "GetAllInsightMethodObjects",
            instrumentationLibrary: "CodeObjectsRepository",
            spanCodeObjectId:
              "span:CodeObjectsRepository$_$GetAllInsightMethodObjects",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.31, unit: "ms", raw: 1310850 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 59.61, unit: "ms", raw: 59613700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "A9E27B88F721034B",
            startTime: "2023-03-06T09:07:12.350005Z",
            duration: { value: 19.06, unit: "ms", raw: 19062900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.868642Z",
          p50: { value: 1.31, unit: "ms", raw: 1310850 },
          p95: { value: 59.61, unit: "ms", raw: 59613700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateScore",
            displayName: "UpdateScore",
            instrumentationLibrary: "CodeObjectsRepository",
            spanCodeObjectId: "span:CodeObjectsRepository$_$UpdateScore",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.7, unit: "ms", raw: 5695200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.43, unit: "ms", raw: 10430600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21D6A06CE674A6AD424F03074DDDAF64",
            spanId: "BDBE071E485858BB",
            startTime: "2023-03-06T09:07:00.04933Z",
            duration: { value: 10.43, unit: "ms", raw: 10430600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.266646Z",
          p50: { value: 5.7, unit: "ms", raw: 5695200 },
          p95: { value: 10.43, unit: "ms", raw: 10430600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessEndpointsByAccount",
            displayName: "ProcessEndpointsByAccount",
            instrumentationLibrary: "ContinuousEndpointUsageJob",
            spanCodeObjectId:
              "span:ContinuousEndpointUsageJob$_$ProcessEndpointsByAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 136.26, unit: "sec", raw: 136261514800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 174.89, unit: "sec", raw: 174887624600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "E340656F34F5A586",
            startTime: "2023-03-06T09:06:31.681404Z",
            duration: { value: 174.89, unit: "sec", raw: 174887624600 }
          },
          firstDataSeenTime: "2023-03-06T09:07:01.612012Z",
          p50: { value: 136.26, unit: "sec", raw: 136261514800 },
          p95: { value: 174.89, unit: "sec", raw: 174887624600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Collecting span samples",
            displayName: "Collecting span samples",
            instrumentationLibrary: "ContinuousSampleCollectionJob",
            spanCodeObjectId:
              "span:ContinuousSampleCollectionJob$_$Collecting span samples",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 423.7, unit: "ms", raw: 423697600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.18, unit: "sec", raw: 1179681500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "3D75E0380F00CB5D9E4C5405A5B12C53",
            spanId: "6F423B6AC6ADA33A",
            startTime: "2023-03-06T09:07:00.079804Z",
            duration: { value: 750.84, unit: "ms", raw: 750843500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.606887Z",
          p50: { value: 423.7, unit: "ms", raw: 423697600 },
          p95: { value: 1.18, unit: "sec", raw: 1179681500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessSpansSamplesByAccount",
            displayName: "ProcessSpansSamplesByAccount",
            instrumentationLibrary: "ContinuousSampleCollectionJob",
            spanCodeObjectId:
              "span:ContinuousSampleCollectionJob$_$ProcessSpansSamplesByAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 426.04, unit: "ms", raw: 426042300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.18, unit: "sec", raw: 1181023500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "3D75E0380F00CB5D9E4C5405A5B12C53",
            spanId: "7D6D7C8329775FBE",
            startTime: "2023-03-06T09:07:00.0798Z",
            duration: { value: 752.26, unit: "ms", raw: 752261800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.529997Z",
          p50: { value: 426.04, unit: "ms", raw: 426042300 },
          p95: { value: 1.18, unit: "sec", raw: 1181023500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "EndpointRelativeDurationAnalyzer",
            spanCodeObjectId: "span:EndpointRelativeDurationAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.58, unit: "ms", raw: 16583800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.58, unit: "ms", raw: 16583800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "CF04B0D3AEAA8F7D",
            startTime: "2023-03-06T09:06:32.678419Z",
            duration: { value: 16.58, unit: "ms", raw: 16583800 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.419635Z",
          p50: { value: 16.58, unit: "ms", raw: 16583800 },
          p95: { value: 16.58, unit: "ms", raw: 16583800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "EndpointSlowestSpansInsightJob",
            spanCodeObjectId: "span:EndpointSlowestSpansInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.44, unit: "sec", raw: 7437842500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.15, unit: "sec", raw: 14150149800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "9237B5683934811A7AC0909F46C2BC0E",
            spanId: "7310B773E58E5326",
            startTime: "2023-03-06T09:07:12.048326Z",
            duration: { value: 14.15, unit: "sec", raw: 14150149800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.586071Z",
          p50: { value: 7.44, unit: "sec", raw: 7437842500 },
          p95: { value: 14.15, unit: "sec", raw: 14150149800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "EndpointSlowestSpansInsightJob",
            spanCodeObjectId:
              "span:EndpointSlowestSpansInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.44, unit: "sec", raw: 7437516500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.15, unit: "sec", raw: 14150078900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "9237B5683934811A7AC0909F46C2BC0E",
            spanId: "9C9128F4B776F433",
            startTime: "2023-03-06T09:07:12.048369Z",
            duration: { value: 14.15, unit: "sec", raw: 14150078900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.496308Z",
          p50: { value: 7.44, unit: "sec", raw: 7437516500 },
          p95: { value: 14.15, unit: "sec", raw: 14150078900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "EndpointSlowInsightJob",
            spanCodeObjectId: "span:EndpointSlowInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.28, unit: "sec", raw: 7276562200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14, unit: "sec", raw: 14003757000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "15A926555AFC6622",
            startTime: "2023-03-06T09:07:12.188371Z",
            duration: { value: 14, unit: "sec", raw: 14003757000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.999785Z",
          p50: { value: 7.28, unit: "sec", raw: 7276562200 },
          p95: { value: 14, unit: "sec", raw: 14003757000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "EndpointSlowInsightJob",
            spanCodeObjectId: "span:EndpointSlowInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.28, unit: "sec", raw: 7276184000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14, unit: "sec", raw: 14003684700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "A4BD7517E53DEBA7",
            startTime: "2023-03-06T09:07:12.188403Z",
            duration: { value: 14, unit: "sec", raw: 14003684700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.0814Z",
          p50: { value: 7.28, unit: "sec", raw: 7276184000 },
          p95: { value: 14, unit: "sec", raw: 14003684700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetAllEndpoints",
            displayName: "GetAllEndpoints",
            instrumentationLibrary: "EndpointsRepository",
            spanCodeObjectId: "span:EndpointsRepository$_$GetAllEndpoints",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.05, unit: "ms", raw: 2048700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.05, unit: "ms", raw: 2048700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "7B2A124993A5F207",
            startTime: "2023-03-06T09:06:31.681412Z",
            duration: { value: 2.05, unit: "ms", raw: 2048700 }
          },
          firstDataSeenTime: "2023-03-06T09:10:01.695657Z",
          p50: { value: 2.05, unit: "ms", raw: 2048700 },
          p95: { value: 2.05, unit: "ms", raw: 2048700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetAllInsightEndpointData",
            displayName: "GetAllInsightEndpointData",
            instrumentationLibrary: "EndpointsRepository",
            spanCodeObjectId:
              "span:EndpointsRepository$_$GetAllInsightEndpointData",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.12, unit: "ms", raw: 52117300 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 147.5,
                unit: "ms",
                raw: 147499329.99999997
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "604967B4A9DF7DD7",
            startTime: "2023-03-06T09:07:12.188409Z",
            duration: { value: 14.23, unit: "ms", raw: 14233900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.245552Z",
          p50: { value: 52.12, unit: "ms", raw: 52117300 },
          p95: { value: 147.5, unit: "ms", raw: 147499329.99999997 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertUsage",
            displayName: "UpsertUsage",
            instrumentationLibrary: "EndpointsRepository",
            spanCodeObjectId: "span:EndpointsRepository$_$UpsertUsage",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.01, unit: "sec", raw: 2013789300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.01, unit: "sec", raw: 2013789300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "05FF555BA0A46E452139B57E41272E01",
            spanId: "F9E1E16BBDF015B8",
            startTime: "2023-03-06T09:06:02.781082Z",
            duration: { value: 2.01, unit: "sec", raw: 2013789300 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.456265Z",
          p50: { value: 2.01, unit: "sec", raw: 2013789300 },
          p95: { value: 2.01, unit: "sec", raw: 2013789300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "EndpointSuspectedNPlusOneInsightJob",
            spanCodeObjectId:
              "span:EndpointSuspectedNPlusOneInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.29, unit: "sec", raw: 7293469800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.18, unit: "sec", raw: 14175828300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "8F3575F6D6E7EF7B",
            startTime: "2023-03-06T09:07:11.912057Z",
            duration: { value: 14.18, unit: "sec", raw: 14175828300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.199742Z",
          p50: { value: 7.29, unit: "sec", raw: 7293469800 },
          p95: { value: 14.18, unit: "sec", raw: 14175828300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "EndpointSuspectedNPlusOneInsightJob",
            spanCodeObjectId:
              "span:EndpointSuspectedNPlusOneInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.29, unit: "sec", raw: 7293126800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.18, unit: "sec", raw: 14175760700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "98162CAC5260F532",
            startTime: "2023-03-06T09:07:11.912088Z",
            duration: { value: 14.18, unit: "sec", raw: 14175760700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.880478Z",
          p50: { value: 7.29, unit: "sec", raw: 7293126800 },
          p95: { value: 14.18, unit: "sec", raw: 14175760700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "EndpointUsageAnalyzer",
            spanCodeObjectId: "span:EndpointUsageAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 243.22, unit: "ms", raw: 243219800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 243.22, unit: "ms", raw: 243219800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "DBEA78EB23B0D145",
            startTime: "2023-03-06T09:06:32.435195Z",
            duration: { value: 243.22, unit: "ms", raw: 243219800 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.002461Z",
          p50: { value: 243.22, unit: "ms", raw: 243219800 },
          p95: { value: 243.22, unit: "ms", raw: 243219800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ApplyLogScaling",
            displayName: "ApplyLogScaling",
            instrumentationLibrary: "EndpointUsageAnalyzer",
            spanCodeObjectId: "span:EndpointUsageAnalyzer$_$ApplyLogScaling",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.7, unit: "μs", raw: 5700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 5.7, unit: "μs", raw: 5700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "9016279ED035BAD4",
            startTime: "2023-03-06T09:06:32.678371Z",
            duration: { value: 2, unit: "μs", raw: 2000 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.343237Z",
          p50: { value: 5.7, unit: "μs", raw: 5700 },
          p95: { value: 5.7, unit: "μs", raw: 5700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CalcDailyUsageMeasurements",
            displayName: "CalcDailyUsageMeasurements",
            instrumentationLibrary: "EndpointUsageAnalyzer",
            spanCodeObjectId:
              "span:EndpointUsageAnalyzer$_$CalcDailyUsageMeasurements",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 26.57, unit: "ms", raw: 26571600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 26.57, unit: "ms", raw: 26571600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "6CA27E8EB6150772",
            startTime: "2023-03-06T09:06:32.452224Z",
            duration: { value: 26.57, unit: "ms", raw: 26571600 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.142652Z",
          p50: { value: 26.57, unit: "ms", raw: 26571600 },
          p95: { value: 26.57, unit: "ms", raw: 26571600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "EndpointUsageInsightJob",
            spanCodeObjectId: "span:EndpointUsageInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.28, unit: "sec", raw: 7280532300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.14, unit: "sec", raw: 14144931400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "C9B5CF1E94B6A571224F6779BD546374",
            spanId: "CF5D09BD0B027D7C",
            startTime: "2023-03-06T09:07:12.09222Z",
            duration: { value: 14.14, unit: "sec", raw: 14144931400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.103386Z",
          p50: { value: 7.28, unit: "sec", raw: 7280532300 },
          p95: { value: 14.14, unit: "sec", raw: 14144931400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "EndpointUsageInsightJob",
            spanCodeObjectId:
              "span:EndpointUsageInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.28, unit: "sec", raw: 7280280600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.14, unit: "sec", raw: 14144866200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "C9B5CF1E94B6A571224F6779BD546374",
            spanId: "47058536B954B2AC",
            startTime: "2023-03-06T09:07:12.092259Z",
            duration: { value: 14.14, unit: "sec", raw: 14144866200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.89889Z",
          p50: { value: 7.28, unit: "sec", raw: 7280280600 },
          p95: { value: 14.14, unit: "sec", raw: 14144866200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "EnvironmentAssetsSchedulingJob",
            spanCodeObjectId: "span:EnvironmentAssetsSchedulingJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.01, unit: "sec", raw: 3006865700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.14, unit: "sec", raw: 3140245000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "BBE05A09F6B40A0F",
            startTime: "2023-03-06T09:07:11.843266Z",
            duration: { value: 3.01, unit: "sec", raw: 3006865700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.167509Z",
          p50: { value: 3.01, unit: "sec", raw: 3006865700 },
          p95: { value: 3.14, unit: "sec", raw: 3140245000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "EnvironmentAssetsSchedulingJob",
            spanCodeObjectId:
              "span:EnvironmentAssetsSchedulingJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.01, unit: "sec", raw: 3006743600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.14, unit: "sec", raw: 3140111700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "36FAA43EB357812C",
            startTime: "2023-03-06T09:07:11.84333Z",
            duration: { value: 3.01, unit: "sec", raw: 3006743600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.254843Z",
          p50: { value: 3.01, unit: "sec", raw: 3006743600 },
          p95: { value: 3.14, unit: "sec", raw: 3140111700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CalcEndpointsDailyUsage",
            displayName: "CalcEndpointsDailyUsage",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$CalcEndpointsDailyUsage",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 26.55, unit: "ms", raw: 26553900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 26.55, unit: "ms", raw: 26553900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "2634953E1BA31F7D",
            startTime: "2023-03-06T09:06:32.452234Z",
            duration: { value: 26.55, unit: "ms", raw: 26553900 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.199065Z",
          p50: { value: 26.55, unit: "ms", raw: 26553900 },
          p95: { value: 26.55, unit: "ms", raw: 26553900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointMeasurements",
            displayName: "GetEndpointMeasurements",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetEndpointMeasurements",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 62.25, unit: "ms", raw: 62248200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 62.25, unit: "ms", raw: 62248200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "04F60B1200B828AB",
            startTime: "2023-03-06T09:06:31.68359Z",
            duration: { value: 62.25, unit: "ms", raw: 62248200 }
          },
          firstDataSeenTime: "2023-03-06T09:10:01.825064Z",
          p50: { value: 62.25, unit: "ms", raw: 62248200 },
          p95: { value: 62.25, unit: "ms", raw: 62248200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointSlowSpans",
            displayName: "GetEndpointSlowSpans",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetEndpointSlowSpans",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.07, unit: "ms", raw: 10070100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.07, unit: "ms", raw: 10070100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "F129761DA1047921",
            startTime: "2023-03-06T09:06:35.481422Z",
            duration: { value: 15.2, unit: "ms", raw: 15199500 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.773219Z",
          p50: { value: 10.07, unit: "ms", raw: 10070100 },
          p95: { value: 10.07, unit: "ms", raw: 10070100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointsResponseTimeInfo",
            displayName: "GetEndpointsResponseTimeInfo",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetEndpointsResponseTimeInfo",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.51, unit: "ms", raw: 16505400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.51, unit: "ms", raw: 16505400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "B2A0710E3F6A1363",
            startTime: "2023-03-06T09:06:32.678423Z",
            duration: { value: 16.51, unit: "ms", raw: 16505400 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.540264Z",
          p50: { value: 16.51, unit: "ms", raw: 16505400 },
          p95: { value: 16.51, unit: "ms", raw: 16505400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetEndpointsUsage",
            displayName: "GetEndpointsUsage",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetEndpointsUsage",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 102.91, unit: "ms", raw: 102909000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 102.91, unit: "ms", raw: 102909000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "AF82D88F98D4260D",
            startTime: "2023-03-06T09:06:32.57533Z",
            duration: { value: 102.91, unit: "ms", raw: 102909000 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.274731Z",
          p50: { value: 102.91, unit: "ms", raw: 102909000 },
          p95: { value: 102.91, unit: "ms", raw: 102909000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetHighlyOccuringDbSpans",
            displayName: "GetHighlyOccuringDbSpans",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetHighlyOccuringDbSpans",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 744.73, unit: "ms", raw: 744727300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 744.73, unit: "ms", raw: 744727300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "87A73835A80B33C8",
            startTime: "2023-03-06T09:06:35.499729Z",
            duration: { value: 744.73, unit: "ms", raw: 744727300 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.903607Z",
          p50: { value: 744.73, unit: "ms", raw: 744727300 },
          p95: { value: 744.73, unit: "ms", raw: 744727300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetMissingDailyUsagesDates",
            displayName: "GetMissingDailyUsagesDates",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$GetMissingDailyUsagesDates",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.93, unit: "ms", raw: 16932200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.93, unit: "ms", raw: 16932200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "5FC1DF8AD3F564AE",
            startTime: "2023-03-06T09:06:32.435205Z",
            duration: { value: 16.93, unit: "ms", raw: 16932200 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.068566Z",
          p50: { value: 16.93, unit: "ms", raw: 16932200 },
          p95: { value: 16.93, unit: "ms", raw: 16932200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanFlowSamples",
            displayName: "GetSpanFlowSamples",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanFlowSamples",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 18.91, unit: "ms", raw: 18914300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 91.81, unit: "ms", raw: 91809700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "3D75E0380F00CB5D9E4C5405A5B12C53",
            spanId: "ADB3F8638C6C855C",
            startTime: "2023-03-06T09:07:00.080965Z",
            duration: { value: 22.93, unit: "ms", raw: 22928000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.762066Z",
          p50: { value: 18.91, unit: "ms", raw: 18914300 },
          p95: { value: 91.81, unit: "ms", raw: 91809700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "GetSpanUniqueList",
            displayName: "GetSpanUniqueList",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId: "span:FluxMeasurementStore$_$GetSpanUniqueList",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 817.32, unit: "ms", raw: 817315900 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 2.82,
                unit: "sec",
                raw: 2822586169.9999905
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "9DDC37166D3BACA2",
            startTime: "2023-03-06T09:07:14.907575Z",
            duration: { value: 656.23, unit: "ms", raw: 656228200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.610298Z",
          p50: { value: 817.32, unit: "ms", raw: 817315900 },
          p95: { value: 2.82, unit: "sec", raw: 2822586169.9999905 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateHighlyOccuringSpansStats",
            displayName: "UpdateHighlyOccuringSpansStats",
            instrumentationLibrary: "FluxMeasurementStore",
            spanCodeObjectId:
              "span:FluxMeasurementStore$_$UpdateHighlyOccuringSpansStats",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 120, unit: "ms", raw: 119998500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 120, unit: "ms", raw: 119998500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "F0A8BD977E24A973",
            startTime: "2023-03-06T09:06:36.244464Z",
            duration: { value: 120, unit: "ms", raw: 119998500 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.990036Z",
          p50: { value: 120, unit: "ms", raw: 119998500 },
          p95: { value: 120, unit: "ms", raw: 119998500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "QueryAsync",
            displayName: "QueryAsync",
            instrumentationLibrary: "InfluxClient",
            spanCodeObjectId: "span:InfluxClient$_$QueryAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.25, unit: "ms", raw: 52246000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.08, unit: "sec", raw: 1083772625 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "23C9B70162A3A423",
            startTime: "2023-03-06T09:07:14.907585Z",
            duration: { value: 656.21, unit: "ms", raw: 656208300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.78255Z",
          p50: { value: 52.25, unit: "ms", raw: 52246000 },
          p95: { value: 1.08, unit: "sec", raw: 1083772625 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "MethodErrorHotspotInsightJob",
            spanCodeObjectId: "span:MethodErrorHotspotInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.44, unit: "sec", raw: 5438387900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.7, unit: "sec", raw: 7699535600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "ACDCE9FB31ECA10F",
            startTime: "2023-03-06T09:07:12.349902Z",
            duration: { value: 7.7, unit: "sec", raw: 7699535600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.425373Z",
          p50: { value: 5.44, unit: "sec", raw: 5438387900 },
          p95: { value: 7.7, unit: "sec", raw: 7699535600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "MethodErrorHotspotInsightJob",
            spanCodeObjectId:
              "span:MethodErrorHotspotInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.44, unit: "sec", raw: 5438279300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.7, unit: "sec", raw: 7699397800 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "BE50BA7A8242DFE9",
            startTime: "2023-03-06T09:07:12.349998Z",
            duration: { value: 7.7, unit: "sec", raw: 7699397800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.466948Z",
          p50: { value: 5.44, unit: "sec", raw: 5438279300 },
          p95: { value: 7.7, unit: "sec", raw: 7699397800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "MethodErrorInsightJob",
            spanCodeObjectId: "span:MethodErrorInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.48, unit: "sec", raw: 5483995000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.27, unit: "sec", raw: 7267853900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "F0BBE2C461017695",
            startTime: "2023-03-06T09:07:12.13249Z",
            duration: { value: 7.27, unit: "sec", raw: 7267853900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.688854Z",
          p50: { value: 5.48, unit: "sec", raw: 5483995000 },
          p95: { value: 7.27, unit: "sec", raw: 7267853900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "MethodErrorInsightJob",
            spanCodeObjectId: "span:MethodErrorInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.48, unit: "sec", raw: 5483917000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.27, unit: "sec", raw: 7267742600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "7737FAE54D9018F9",
            startTime: "2023-03-06T09:07:12.132545Z",
            duration: { value: 7.27, unit: "sec", raw: 7267742600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.776339Z",
          p50: { value: 5.48, unit: "sec", raw: 5483917000 },
          p95: { value: 7.27, unit: "sec", raw: 7267742600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute ContinuousEndpointUsageJob",
            displayName: "execute ContinuousEndpointUsageJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute ContinuousEndpointUsageJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 136.26, unit: "sec", raw: 136261977450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 174.89, unit: "sec", raw: 174888197900 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowEndpoint",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute ContinuousEndpointUsageJob",
                subtitle: "",
                description: "Median duration 136.26 sec"
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute ContinuousEndpointUsageJob",
                subtitle: "2 spans",
                description: "95% ProcessEndpointsByAccount 174.89 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "E5AF92B1522C5734",
            startTime: "2023-03-06T09:06:31.680889Z",
            duration: { value: 174.89, unit: "sec", raw: 174888197900 }
          },
          firstDataSeenTime: "2023-03-06T09:07:01.573348Z",
          p50: { value: 136.26, unit: "sec", raw: 136261977450 },
          p95: { value: 174.89, unit: "sec", raw: 174888197900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute ContinuousErrorFlowsScoringJob",
            displayName: "execute ContinuousErrorFlowsScoringJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute ContinuousErrorFlowsScoringJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 23.59, unit: "ms", raw: 23588800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 41.02, unit: "ms", raw: 41016200 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "21D6A06CE674A6AD424F03074DDDAF64",
            spanId: "D839ABA734685E69",
            startTime: "2023-03-06T09:07:00.025829Z",
            duration: { value: 41.02, unit: "ms", raw: 41016200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.009013Z",
          p50: { value: 23.59, unit: "ms", raw: 23588800 },
          p95: { value: 41.02, unit: "ms", raw: 41016200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute ContinuousSampleCollectionJob",
            displayName: "execute ContinuousSampleCollectionJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute ContinuousSampleCollectionJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 102.59, unit: "ms", raw: 102587200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.18, unit: "sec", raw: 1181495900 }
            }
          ],
          insights: [
            {
              type: "EndpointSpaNPlusOne",
              importance: 3,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute ContinuousSampleCollectionJob",
                subtitle: "2 spans",
                description: "48% UpsertSpanFlowSamples 1.08 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "3D75E0380F00CB5D9E4C5405A5B12C53",
            spanId: "D8F420548F0B0CF6",
            startTime: "2023-03-06T09:07:00.079291Z",
            duration: { value: 752.83, unit: "ms", raw: 752826400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.457649Z",
          p50: { value: 102.59, unit: "ms", raw: 102587200 },
          p95: { value: 1.18, unit: "sec", raw: 1181495900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute EndpointSlowestSpansInsightJob",
            displayName: "execute EndpointSlowestSpansInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute EndpointSlowestSpansInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.44, unit: "sec", raw: 7438677400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.15, unit: "sec", raw: 14150600700 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute EndpointSlowestSpansInsightJob",
                subtitle: "1 spans",
                description:
                  "94% Digma.Measurement.Contracts.Messages:UpdateEndpointSlowestSpansInsight send 13.32 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "9237B5683934811A7AC0909F46C2BC0E",
            spanId: "2F67D6F8C57A66F0",
            startTime: "2023-03-06T09:07:12.047878Z",
            duration: { value: 14.15, unit: "sec", raw: 14150600700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.649661Z",
          p50: { value: 7.44, unit: "sec", raw: 7438677400 },
          p95: { value: 14.15, unit: "sec", raw: 14150600700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute EndpointSlowInsightJob",
            displayName: "execute EndpointSlowInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute EndpointSlowInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.28, unit: "sec", raw: 7277358400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14, unit: "sec", raw: 14004331000 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute EndpointSlowInsightJob",
                subtitle: "1 spans",
                description:
                  "94% Digma.Measurement.Contracts.Messages:UpdateEndpointSlowInsight send 13.17 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "28A12E6A8267020B",
            startTime: "2023-03-06T09:07:12.187801Z",
            duration: { value: 14, unit: "sec", raw: 14004331000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.227973Z",
          p50: { value: 7.28, unit: "sec", raw: 7277358400 },
          p95: { value: 14, unit: "sec", raw: 14004331000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute EndpointSuspectedNPlusOneInsightJob",
            displayName: "execute EndpointSuspectedNPlusOneInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute EndpointSuspectedNPlusOneInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.29, unit: "sec", raw: 7294441300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.18, unit: "sec", raw: 14176149800 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName:
                  "execute EndpointSuspectedNPlusOneInsightJob",
                subtitle: "1 spans",
                description:
                  "94% Digma.Measurement.Contracts.Messages:UpdateEndpointSuspectedNPlusOneInsight send 13.34 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "DF894DF5474F5B93",
            startTime: "2023-03-06T09:07:11.91174Z",
            duration: { value: 14.18, unit: "sec", raw: 14176149800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.605449Z",
          p50: { value: 7.29, unit: "sec", raw: 7294441300 },
          p95: { value: 14.18, unit: "sec", raw: 14176149800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute EndpointUsageInsightJob",
            displayName: "execute EndpointUsageInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute EndpointUsageInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.28, unit: "sec", raw: 7281069100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.15, unit: "sec", raw: 14145382900 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute EndpointUsageInsightJob",
                subtitle: "1 spans",
                description:
                  "93% Digma.Measurement.Contracts.Messages:UpdateEndpointUsageInsight send 13.18 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "C9B5CF1E94B6A571224F6779BD546374",
            spanId: "31CBF1EAF98705E4",
            startTime: "2023-03-06T09:07:12.091771Z",
            duration: { value: 14.15, unit: "sec", raw: 14145382900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.910133Z",
          p50: { value: 7.28, unit: "sec", raw: 7281069100 },
          p95: { value: 14.15, unit: "sec", raw: 14145382900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute EnvironmentAssetsSchedulingJob",
            displayName: "execute EnvironmentAssetsSchedulingJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute EnvironmentAssetsSchedulingJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.01, unit: "sec", raw: 3007490900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.14, unit: "sec", raw: 3140678400 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute EnvironmentAssetsSchedulingJob",
                subtitle: "2 spans",
                description:
                  "57% Digma.Measurement.Contracts.Messages:UpdateEnvironmentAssets send 2.84 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "5D8AB3CDC7D488DA",
            startTime: "2023-03-06T09:07:11.842646Z",
            duration: { value: 3.01, unit: "sec", raw: 3007490900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.083224Z",
          p50: { value: 3.01, unit: "sec", raw: 3007490900 },
          p95: { value: 3.14, unit: "sec", raw: 3140678400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute MethodErrorHotspotInsightJob",
            displayName: "execute MethodErrorHotspotInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute MethodErrorHotspotInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.44, unit: "sec", raw: 5438885900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.7, unit: "sec", raw: 7700005600 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute MethodErrorHotspotInsightJob",
                subtitle: "2 spans",
                description:
                  "89% Digma.Measurement.Contracts.Messages:UpdateMethodErrorHotspotInsight send 6.86 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "4F8DC4CD35BA983E",
            startTime: "2023-03-06T09:07:12.349438Z",
            duration: { value: 7.7, unit: "sec", raw: 7700005600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.318759Z",
          p50: { value: 5.44, unit: "sec", raw: 5438885900 },
          p95: { value: 7.7, unit: "sec", raw: 7700005600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute MethodErrorInsightJob",
            displayName: "execute MethodErrorInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute MethodErrorInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.48, unit: "sec", raw: 5484398000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.27, unit: "sec", raw: 7268345700 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute MethodErrorInsightJob",
                subtitle: "1 spans",
                description:
                  "84% Digma.Measurement.Contracts.Messages:UpdateMethodErrorInsight send 6.16 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "464BB8319A11B15A",
            startTime: "2023-03-06T09:07:12.132007Z",
            duration: { value: 7.27, unit: "sec", raw: 7268345700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.582117Z",
          p50: { value: 5.48, unit: "sec", raw: 5484398000 },
          p95: { value: 7.27, unit: "sec", raw: 7268345700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanBreakdownInsightJob",
            displayName: "execute SpanBreakdownInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanBreakdownInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.7, unit: "sec", raw: 2701480900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.74, unit: "sec", raw: 14736314200 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanBreakdownInsightJob",
                subtitle: "2 spans",
                description:
                  "62% Digma.Measurement.Contracts.Messages:UpdateSpanBreakdownInsight send 9.23 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "A96F385863A109CE",
            startTime: "2023-03-06T09:07:09.53719Z",
            duration: { value: 14.74, unit: "sec", raw: 14736314200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.684595Z",
          p50: { value: 2.7, unit: "sec", raw: 2701480900 },
          p95: { value: 14.74, unit: "sec", raw: 14736314200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanConcurrencyHistogramJob",
            displayName: "execute SpanConcurrencyHistogramJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanConcurrencyHistogramJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.06, unit: "sec", raw: 3059005700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.65, unit: "sec", raw: 11654806900 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanConcurrencyHistogramJob",
                subtitle: "2 spans",
                description:
                  "80% Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencyHistogramMeasurement send 9.41 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "BEACD3FF7B4C22C4",
            startTime: "2023-03-06T09:07:00.219082Z",
            duration: { value: 11.65, unit: "sec", raw: 11654806900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.089729Z",
          p50: { value: 3.06, unit: "sec", raw: 3059005700 },
          p95: { value: 11.65, unit: "sec", raw: 11654806900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanConcurrencySummaryJob",
            displayName: "execute SpanConcurrencySummaryJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanConcurrencySummaryJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.61, unit: "sec", raw: 2614880000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.84, unit: "sec", raw: 10841324500 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanConcurrencySummaryJob",
                subtitle: "2 spans",
                description:
                  "84% Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencySummaryMeasurement send 9.21 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "0208548F2A822B83",
            startTime: "2023-03-06T09:07:14.907033Z",
            duration: { value: 10.84, unit: "sec", raw: 10841324500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.089726Z",
          p50: { value: 2.61, unit: "sec", raw: 2614880000 },
          p95: { value: 10.84, unit: "sec", raw: 10841324500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanDurationChangeJob",
            displayName: "execute SpanDurationChangeJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanDurationChangeJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.04, unit: "sec", raw: 3043889000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.53, unit: "sec", raw: 11525718400 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanDurationChangeJob",
                subtitle: "2 spans",
                description:
                  "81% Digma.Measurement.Contracts.Messages:UpdateSpanDurationChangeMeasurement send 9.35 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "B265873EB9981C14",
            startTime: "2023-03-06T09:07:00.259227Z",
            duration: { value: 11.53, unit: "sec", raw: 11525718400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.091813Z",
          p50: { value: 3.04, unit: "sec", raw: 3043889000 },
          p95: { value: 11.53, unit: "sec", raw: 11525718400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanDurationInsightJob",
            displayName: "execute SpanDurationInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanDurationInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3, unit: "sec", raw: 2998809900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.6, unit: "sec", raw: 11601752600 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanDurationInsightJob",
                subtitle: "3 spans",
                description:
                  "81% Digma.Measurement.Contracts.Messages:UpdateSpanDurationInsight send 9.46 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "B908E180750A387A",
            startTime: "2023-03-06T09:07:00.398155Z",
            duration: { value: 11.6, unit: "sec", raw: 11601752600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.820184Z",
          p50: { value: 3, unit: "sec", raw: 2998809900 },
          p95: { value: 11.6, unit: "sec", raw: 11601752600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanDurationSummaryJob",
            displayName: "execute SpanDurationSummaryJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanDurationSummaryJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.94, unit: "sec", raw: 2940787500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.72, unit: "sec", raw: 11715792800 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanDurationSummaryJob",
                subtitle: "2 spans",
                description:
                  "81% Digma.Measurement.Contracts.Messages:UpdateSpanDurationSummaryMeasurement send 9.52 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "486B38B07919187E",
            startTime: "2023-03-06T09:07:00.324349Z",
            duration: { value: 11.72, unit: "sec", raw: 11715792800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.092392Z",
          p50: { value: 2.94, unit: "sec", raw: 2940787500 },
          p95: { value: 11.72, unit: "sec", raw: 11715792800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanEndpointsBottleneckInsightJob",
            displayName: "execute SpanEndpointsBottleneckInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanEndpointsBottleneckInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.64, unit: "sec", raw: 2636787600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 9.38, unit: "sec", raw: 9376411000 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanEndpointsBottleneckInsightJob",
                subtitle: "2 spans",
                description:
                  "81% Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight send 7.65 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "9496F6BB75FBD5E2B4B2F93CCD61CC99",
            spanId: "A5B9A2BB79C6B8C6",
            startTime: "2023-03-06T09:07:00.115191Z",
            duration: { value: 9.38, unit: "sec", raw: 9376411000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.421342Z",
          p50: { value: 2.64, unit: "sec", raw: 2636787600 },
          p95: { value: 9.38, unit: "sec", raw: 9376411000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanFlowJob",
            displayName: "execute SpanFlowJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanFlowJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.02, unit: "sec", raw: 3023610200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.27, unit: "sec", raw: 10267507200 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanFlowJob",
                subtitle: "2 spans",
                description:
                  "82% Digma.Measurement.Contracts.Messages:UpdateSpanFlowMeasurement send 8.45 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "044E44819DA03079",
            startTime: "2023-03-06T09:07:00.154089Z",
            duration: { value: 10.27, unit: "sec", raw: 10267507200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.155976Z",
          p50: { value: 3.02, unit: "sec", raw: 3023610200 },
          p95: { value: 10.27, unit: "sec", raw: 10267507200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanNPlusOneInsightJob",
            displayName: "execute SpanNPlusOneInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanNPlusOneInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.86, unit: "sec", raw: 2861942400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.47, unit: "sec", raw: 14468506700 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanNPlusOneInsightJob",
                subtitle: "3 spans",
                description:
                  "66% Digma.Measurement.Contracts.Messages:UpdateSpanNPlusOneInsight send 9.63 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "42A11A2BD9AFC655",
            startTime: "2023-03-06T09:07:10.52293Z",
            duration: { value: 14.47, unit: "sec", raw: 14468506700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.804545Z",
          p50: { value: 2.86, unit: "sec", raw: 2861942400 },
          p95: { value: 14.47, unit: "sec", raw: 14468506700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanScalingInsightJob",
            displayName: "execute SpanScalingInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanScalingInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.03, unit: "sec", raw: 3028216300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.73, unit: "sec", raw: 11731664100 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanScalingInsightJob",
                subtitle: "2 spans",
                description:
                  "81% Digma.Measurement.Contracts.Messages:UpdateSpanScalingInsight send 9.58 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "03212ABB6B40E20C",
            startTime: "2023-03-06T09:07:00.354296Z",
            duration: { value: 11.73, unit: "sec", raw: 11731664100 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.10346Z",
          p50: { value: 3.03, unit: "sec", raw: 3028216300 },
          p95: { value: 11.73, unit: "sec", raw: 11731664100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanScalingRootCauseInsightJob",
            displayName: "execute SpanScalingRootCauseInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanScalingRootCauseInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.13, unit: "sec", raw: 7131054950 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.18, unit: "sec", raw: 11175551300 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanScalingRootCauseInsightJob",
                subtitle: "3 spans",
                description:
                  "83% Digma.Measurement.Contracts.Messages:UpdateSpanScalingRootCauseInsight send 9.34 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "FEC5FBB7BB31EF45",
            startTime: "2023-03-06T09:07:00.979943Z",
            duration: { value: 11.18, unit: "sec", raw: 11175551300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.49364Z",
          p50: { value: 7.13, unit: "sec", raw: 7131054950 },
          p95: { value: 11.18, unit: "sec", raw: 11175551300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "execute SpanUsageInsightJob",
            displayName: "execute SpanUsageInsightJob",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.Quartz",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.Quartz$_$execute SpanUsageInsightJob",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.58, unit: "sec", raw: 2582156200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.75, unit: "sec", raw: 11751349600 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "execute SpanUsageInsightJob",
                subtitle: "3 spans",
                description:
                  "80% Digma.Measurement.Contracts.Messages:UpdateSpanUsageInsight send 9.52 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "7741384848E6213C",
            startTime: "2023-03-06T09:07:00.301082Z",
            duration: { value: 11.75, unit: "sec", raw: 11751349600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.556415Z",
          p50: { value: 2.58, unit: "sec", raw: 2582156200 },
          p95: { value: 11.75, unit: "sec", raw: 11751349600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "SpanBottleneckAnalyzer",
            spanCodeObjectId: "span:SpanBottleneckAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.8, unit: "sec", raw: 2804703000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.8, unit: "sec", raw: 2804703000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "E01077FE6BB7402A",
            startTime: "2023-03-06T09:06:32.69501Z",
            duration: { value: 2.8, unit: "sec", raw: 2804703000 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.611802Z",
          p50: { value: 2.8, unit: "sec", raw: 2804703000 },
          p95: { value: 2.8, unit: "sec", raw: 2804703000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "AnalyzeEndpoint",
            displayName: "AnalyzeEndpoint",
            instrumentationLibrary: "SpanBottleneckAnalyzer",
            spanCodeObjectId: "span:SpanBottleneckAnalyzer$_$AnalyzeEndpoint",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.08, unit: "ms", raw: 10078900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.08, unit: "ms", raw: 10078900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "13C2C3B2B883BAC2",
            startTime: "2023-03-06T09:06:35.481417Z",
            duration: { value: 15.21, unit: "ms", raw: 15210700 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.701012Z",
          p50: { value: 10.08, unit: "ms", raw: 10078900 },
          p95: { value: 10.08, unit: "ms", raw: 10078900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanBreakdownInsightJob",
            spanCodeObjectId: "span:SpanBreakdownInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.7, unit: "sec", raw: 2700869100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.74, unit: "sec", raw: 14735791200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "911F933612C3C3E8",
            startTime: "2023-03-06T09:07:09.53771Z",
            duration: { value: 14.74, unit: "sec", raw: 14735791200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.777663Z",
          p50: { value: 2.7, unit: "sec", raw: 2700869100 },
          p95: { value: 14.74, unit: "sec", raw: 14735791200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Producer",
            displayName: "Producer",
            instrumentationLibrary: "SpanBreakdownInsightJob",
            spanCodeObjectId: "span:SpanBreakdownInsightJob$_$Producer",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.7, unit: "sec", raw: 2700764800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.74, unit: "sec", raw: 14735719300 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "DBF6B1ECF8560776",
            startTime: "2023-03-06T09:07:09.537758Z",
            duration: { value: 14.74, unit: "sec", raw: 14735719300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.847481Z",
          p50: { value: 2.7, unit: "sec", raw: 2700764800 },
          p95: { value: 14.74, unit: "sec", raw: 14735719300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanConcurrencyHistogramJob",
            spanCodeObjectId: "span:SpanConcurrencyHistogramJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.06, unit: "sec", raw: 3058653900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.65, unit: "sec", raw: 11654300200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "500443DFDDFB81B3",
            startTime: "2023-03-06T09:07:00.219585Z",
            duration: { value: 11.65, unit: "sec", raw: 11654300200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.092874Z",
          p50: { value: 3.06, unit: "sec", raw: 3058653900 },
          p95: { value: 11.65, unit: "sec", raw: 11654300200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanConcurrencyHistogramJob",
            spanCodeObjectId:
              "span:SpanConcurrencyHistogramJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.06, unit: "sec", raw: 3058545100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.65, unit: "sec", raw: 11654200700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "29415B6CD585BDB5",
            startTime: "2023-03-06T09:07:00.219642Z",
            duration: { value: 11.65, unit: "sec", raw: 11654200700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.091088Z",
          p50: { value: 3.06, unit: "sec", raw: 3058545100 },
          p95: { value: 11.65, unit: "sec", raw: 11654200700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanConcurrencySummaryJob",
            spanCodeObjectId: "span:SpanConcurrencySummaryJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.61, unit: "sec", raw: 2613461700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.84, unit: "sec", raw: 10840835000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "52905FCDF7A5DB7A",
            startTime: "2023-03-06T09:07:14.907517Z",
            duration: { value: 10.84, unit: "sec", raw: 10840835000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.089816Z",
          p50: { value: 2.61, unit: "sec", raw: 2613461700 },
          p95: { value: 10.84, unit: "sec", raw: 10840835000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanConcurrencySummaryJob",
            spanCodeObjectId:
              "span:SpanConcurrencySummaryJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.61, unit: "sec", raw: 2613380100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.84, unit: "sec", raw: 10840741800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "A2CD3CCED4628843",
            startTime: "2023-03-06T09:07:14.907568Z",
            duration: { value: 10.84, unit: "sec", raw: 10840741800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.090321Z",
          p50: { value: 2.61, unit: "sec", raw: 2613380100 },
          p95: { value: 10.84, unit: "sec", raw: 10840741800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanDurationChangeJob",
            spanCodeObjectId: "span:SpanDurationChangeJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.04, unit: "sec", raw: 3043546700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.53, unit: "sec", raw: 11525256200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "A451964C68B43D91",
            startTime: "2023-03-06T09:07:00.259685Z",
            duration: { value: 11.53, unit: "sec", raw: 11525256200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.089826Z",
          p50: { value: 3.04, unit: "sec", raw: 3043546700 },
          p95: { value: 11.53, unit: "sec", raw: 11525256200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanDurationChangeJob",
            spanCodeObjectId: "span:SpanDurationChangeJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.04, unit: "sec", raw: 3043474800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.53, unit: "sec", raw: 11525168600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "B14CDC1AA58FFA2C",
            startTime: "2023-03-06T09:07:00.259725Z",
            duration: { value: 11.53, unit: "sec", raw: 11525168600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.131229Z",
          p50: { value: 3.04, unit: "sec", raw: 3043474800 },
          p95: { value: 11.53, unit: "sec", raw: 11525168600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanDurationInsightJob",
            spanCodeObjectId: "span:SpanDurationInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3, unit: "sec", raw: 2998180500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.6, unit: "sec", raw: 11601203800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "BDC61A284980A71E",
            startTime: "2023-03-06T09:07:00.398699Z",
            duration: { value: 11.6, unit: "sec", raw: 11601203800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.923659Z",
          p50: { value: 3, unit: "sec", raw: 2998180500 },
          p95: { value: 11.6, unit: "sec", raw: 11601203800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanDurationInsightJob",
            spanCodeObjectId: "span:SpanDurationInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3, unit: "sec", raw: 2998100900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.6, unit: "sec", raw: 11601112300 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "436462A3C1B498D0",
            startTime: "2023-03-06T09:07:00.398747Z",
            duration: { value: 11.6, unit: "sec", raw: 11601112300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.03774Z",
          p50: { value: 3, unit: "sec", raw: 2998100900 },
          p95: { value: 11.6, unit: "sec", raw: 11601112300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanDurationSummaryJob",
            spanCodeObjectId: "span:SpanDurationSummaryJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.94, unit: "sec", raw: 2940458400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.72, unit: "sec", raw: 11715209500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "15BF67C9DF48E4AC",
            startTime: "2023-03-06T09:07:00.324928Z",
            duration: { value: 11.72, unit: "sec", raw: 11715209500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.092696Z",
          p50: { value: 2.94, unit: "sec", raw: 2940458400 },
          p95: { value: 11.72, unit: "sec", raw: 11715209500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanDurationSummaryJob",
            spanCodeObjectId: "span:SpanDurationSummaryJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.94, unit: "sec", raw: 2940384900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.72, unit: "sec", raw: 11715103400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "BBE00E85ACD7E63B",
            startTime: "2023-03-06T09:07:00.324994Z",
            duration: { value: 11.72, unit: "sec", raw: 11715103400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.092055Z",
          p50: { value: 2.94, unit: "sec", raw: 2940384900 },
          p95: { value: 11.72, unit: "sec", raw: 11715103400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanEndpointsBottleneckInsightJob",
            spanCodeObjectId:
              "span:SpanEndpointsBottleneckInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.64, unit: "sec", raw: 2636407700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 9.38, unit: "sec", raw: 9375823100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "9496F6BB75FBD5E2B4B2F93CCD61CC99",
            spanId: "7FDDDA39783AC77B",
            startTime: "2023-03-06T09:07:00.115774Z",
            duration: { value: 9.38, unit: "sec", raw: 9375823100 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.507474Z",
          p50: { value: 2.64, unit: "sec", raw: 2636407700 },
          p95: { value: 9.38, unit: "sec", raw: 9375823100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanEndpointsBottleneckInsightJob",
            spanCodeObjectId:
              "span:SpanEndpointsBottleneckInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.64, unit: "sec", raw: 2636334700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 9.38, unit: "sec", raw: 9375611600 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "9496F6BB75FBD5E2B4B2F93CCD61CC99",
            spanId: "5148373E324A61C1",
            startTime: "2023-03-06T09:07:00.115948Z",
            duration: { value: 9.38, unit: "sec", raw: 9375611600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.599284Z",
          p50: { value: 2.64, unit: "sec", raw: 2636334700 },
          p95: { value: 9.38, unit: "sec", raw: 9375611600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanFlowJob",
            spanCodeObjectId: "span:SpanFlowJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.02, unit: "sec", raw: 3022753200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.27, unit: "sec", raw: 10267050000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "E9308E85CD7E4C3A",
            startTime: "2023-03-06T09:07:00.154541Z",
            duration: { value: 10.27, unit: "sec", raw: 10267050000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.343919Z",
          p50: { value: 3.02, unit: "sec", raw: 3022753200 },
          p95: { value: 10.27, unit: "sec", raw: 10267050000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanFlowJob",
            spanCodeObjectId: "span:SpanFlowJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.02, unit: "sec", raw: 3022611200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.27, unit: "sec", raw: 10266956400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "0D71EEF5D992B77A",
            startTime: "2023-03-06T09:07:00.154579Z",
            duration: { value: 10.27, unit: "sec", raw: 10266956400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:02.376359Z",
          p50: { value: 3.02, unit: "sec", raw: 3022611200 },
          p95: { value: 10.27, unit: "sec", raw: 10266956400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanNPlusOneInsightJob",
            spanCodeObjectId: "span:SpanNPlusOneInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.86, unit: "sec", raw: 2861622100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.47, unit: "sec", raw: 14467934700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "A6DD4DC0A61F73A1",
            startTime: "2023-03-06T09:07:10.5235Z",
            duration: { value: 14.47, unit: "sec", raw: 14467934700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.921286Z",
          p50: { value: 2.86, unit: "sec", raw: 2861622100 },
          p95: { value: 14.47, unit: "sec", raw: 14467934700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanNPlusOneInsightJob",
            spanCodeObjectId: "span:SpanNPlusOneInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.86, unit: "sec", raw: 2861502700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 14.47, unit: "sec", raw: 14467846700 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "9FF92588F8290503",
            startTime: "2023-03-06T09:07:10.523559Z",
            duration: { value: 14.47, unit: "sec", raw: 14467846700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.99854Z",
          p50: { value: 2.86, unit: "sec", raw: 2861502700 },
          p95: { value: 14.47, unit: "sec", raw: 14467846700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Analyze",
            displayName: "Analyze",
            instrumentationLibrary: "SpanRepititionAnalyzer",
            spanCodeObjectId: "span:SpanRepititionAnalyzer$_$Analyze",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 893.25, unit: "ms", raw: 893248900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 893.25, unit: "ms", raw: 893248900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "3A5917004DAE2963",
            startTime: "2023-03-06T09:06:35.499724Z",
            duration: { value: 893.25, unit: "ms", raw: 893248900 }
          },
          firstDataSeenTime: "2023-03-06T09:10:02.838072Z",
          p50: { value: 893.25, unit: "ms", raw: 893248900 },
          p95: { value: 893.25, unit: "ms", raw: 893248900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanScalingInsightJob",
            spanCodeObjectId: "span:SpanScalingInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.03, unit: "sec", raw: 3027915600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.73, unit: "sec", raw: 11731125600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "AAF3FB34DBF3B4B4",
            startTime: "2023-03-06T09:07:00.354829Z",
            duration: { value: 11.73, unit: "sec", raw: 11731125600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.195966Z",
          p50: { value: 3.03, unit: "sec", raw: 3027915600 },
          p95: { value: 11.73, unit: "sec", raw: 11731125600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanScalingInsightJob",
            spanCodeObjectId: "span:SpanScalingInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.03, unit: "sec", raw: 3027858600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.73, unit: "sec", raw: 11731041500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "D5FB3D1CE6864555",
            startTime: "2023-03-06T09:07:00.354861Z",
            duration: { value: 11.73, unit: "sec", raw: 11731041500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.307922Z",
          p50: { value: 3.03, unit: "sec", raw: 3027858600 },
          p95: { value: 11.73, unit: "sec", raw: 11731041500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanScalingRootCauseInsightJob",
            spanCodeObjectId: "span:SpanScalingRootCauseInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.09, unit: "sec", raw: 3086242800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.18, unit: "sec", raw: 11175018800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "C0067DC6BD925F74",
            startTime: "2023-03-06T09:07:00.980473Z",
            duration: { value: 11.18, unit: "sec", raw: 11175018800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.514157Z",
          p50: { value: 3.09, unit: "sec", raw: 3086242800 },
          p95: { value: 11.18, unit: "sec", raw: 11175018800 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanScalingRootCauseInsightJob",
            spanCodeObjectId:
              "span:SpanScalingRootCauseInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.09, unit: "sec", raw: 3086163100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.17, unit: "sec", raw: 11174945400 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "8D4902444E46637B",
            startTime: "2023-03-06T09:07:00.980517Z",
            duration: { value: 11.17, unit: "sec", raw: 11174945400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.593337Z",
          p50: { value: 3.09, unit: "sec", raw: 3086163100 },
          p95: { value: 11.17, unit: "sec", raw: 11174945400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateEndpointRelatedStats",
            displayName: "UpdateEndpointRelatedStats",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId:
              "span:SpansRepository$_$UpdateEndpointRelatedStats",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 4.16, unit: "sec", raw: 4163152000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 4.48, unit: "sec", raw: 4477944000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "9ABF8123390969CB",
            startTime: "2023-03-06T09:09:22.717814Z",
            duration: { value: 3.85, unit: "sec", raw: 3848360000 }
          },
          firstDataSeenTime: "2023-03-06T09:07:08.568613Z",
          p50: { value: 4.16, unit: "sec", raw: 4163152000 },
          p95: { value: 4.48, unit: "sec", raw: 4477944000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpdateScore",
            displayName: "UpdateScore",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpdateScore",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 13.9, unit: "ms", raw: 13898450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 23.06, unit: "ms", raw: 23062200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21D6A06CE674A6AD424F03074DDDAF64",
            spanId: "E336274ABF493BAA",
            startTime: "2023-03-06T09:07:00.026255Z",
            duration: { value: 23.06, unit: "ms", raw: 23062200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.087768Z",
          p50: { value: 13.9, unit: "ms", raw: 13898450 },
          p95: { value: 23.06, unit: "ms", raw: 23062200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertInsights",
            displayName: "UpsertInsights",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertInsights",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 8.81, unit: "ms", raw: 8813700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 43.5, unit: "sec", raw: 43504674300 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "05FF555BA0A46E452139B57E41272E01",
            spanId: "659E5A1F04B8CDA5",
            startTime: "2023-03-06T09:04:35.876014Z",
            duration: { value: 86.91, unit: "sec", raw: 86905055300 }
          },
          firstDataSeenTime: "2023-03-06T09:07:01.616793Z",
          p50: { value: 8.81, unit: "ms", raw: 8813700 },
          p95: { value: 43.5, unit: "sec", raw: 43504674300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "UpsertSpanFlowSamples",
            displayName: "UpsertSpanFlowSamples",
            instrumentationLibrary: "SpansRepository",
            spanCodeObjectId: "span:SpansRepository$_$UpsertSpanFlowSamples",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 726.43, unit: "ms", raw: 726432200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.08, unit: "sec", raw: 1081184600 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "3D75E0380F00CB5D9E4C5405A5B12C53",
            spanId: "0B91253F9CEB2B11",
            startTime: "2023-03-06T09:07:00.104211Z",
            duration: { value: 726.43, unit: "ms", raw: 726432200 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.037092Z",
          p50: { value: 726.43, unit: "ms", raw: 726432200 },
          p95: { value: 1.08, unit: "sec", raw: 1081184600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Execute",
            displayName: "Execute",
            instrumentationLibrary: "SpanUsageInsightJob",
            spanCodeObjectId: "span:SpanUsageInsightJob$_$Execute",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.58, unit: "sec", raw: 2581753600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.75, unit: "sec", raw: 11751036400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "E32570FB0133612E",
            startTime: "2023-03-06T09:07:00.301389Z",
            duration: { value: 11.75, unit: "sec", raw: 11751036400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.690465Z",
          p50: { value: 2.58, unit: "sec", raw: 2581753600 },
          p95: { value: 11.75, unit: "sec", raw: 11751036400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ProcessPerAccount",
            displayName: "ProcessPerAccount",
            instrumentationLibrary: "SpanUsageInsightJob",
            spanCodeObjectId: "span:SpanUsageInsightJob$_$ProcessPerAccount",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.58, unit: "sec", raw: 2581674100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 11.75, unit: "sec", raw: 11750967900 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "A5BDF47EF98FC1E2",
            startTime: "2023-03-06T09:07:00.301424Z",
            duration: { value: 11.75, unit: "sec", raw: 11750967900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.719272Z",
          p50: { value: 2.58, unit: "sec", raw: 2581674100 },
          p95: { value: 11.75, unit: "sec", raw: 11750967900 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateEndpointSlowestSpansInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateEndpointSlowestSpansInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateEndpointSlowestSpansInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointSlowestSpansInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointSlowestSpansInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 29.85, unit: "ms", raw: 29853900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 55.04, unit: "ms", raw: 55040300 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "9237B5683934811A7AC0909F46C2BC0E",
            spanId: "1E390270DB4AD427",
            startTime: "2023-03-06T09:07:12.933985Z",
            duration: { value: 77.16, unit: "ms", raw: 77161400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:08.490781Z",
          p50: { value: 29.85, unit: "ms", raw: 29853900 },
          p95: { value: 55.04, unit: "ms", raw: 55040300 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateEndpointSlowInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateEndpointSlowInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateEndpointSlowInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointSlowInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointSlowInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 58.67, unit: "ms", raw: 58669200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 280.27, unit: "ms", raw: 280270200 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "F8BAA223DA694609",
            startTime: "2023-03-06T09:07:12.970092Z",
            duration: { value: 75.04, unit: "ms", raw: 75038900 }
          },
          firstDataSeenTime: "2023-03-02T10:21:08.58579Z",
          p50: { value: 58.67, unit: "ms", raw: 58669200 },
          p95: { value: 280.27, unit: "ms", raw: 280270200 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateEndpointSuspectedNPlusOneInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateEndpointSuspectedNPlusOneInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateEndpointSuspectedNPlusOneInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointSuspectedNPlusOneInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointSuspectedNPlusOneInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 25.18, unit: "ms", raw: 25179350 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 136.99, unit: "ms", raw: 136986900 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "00522C303142CB43619AA08348EAF9DF",
            spanId: "B6D09D380D5FA179",
            startTime: "2023-03-06T09:07:13.002482Z",
            duration: { value: 69.53, unit: "ms", raw: 69534000 }
          },
          firstDataSeenTime: "2023-03-02T10:21:08.715142Z",
          p50: { value: 25.18, unit: "ms", raw: 25179350 },
          p95: { value: 136.99, unit: "ms", raw: 136986900 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateEndpointUsageInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateEndpointUsageInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateEndpointUsageInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointUsageInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEndpointUsageInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 29.04, unit: "ms", raw: 29043000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 89.11, unit: "ms", raw: 89107900 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "C9B5CF1E94B6A571224F6779BD546374",
            spanId: "A65F770031A98893",
            startTime: "2023-03-06T09:07:12.999254Z",
            duration: { value: 62.74, unit: "ms", raw: 62740700 }
          },
          firstDataSeenTime: "2023-03-02T10:21:08.403123Z",
          p50: { value: 29.04, unit: "ms", raw: 29043000 },
          p95: { value: 89.11, unit: "ms", raw: 89107900 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateEnvironmentAssets send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateEnvironmentAssets send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateEnvironmentAssets send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEnvironmentAssets",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateEnvironmentAssets"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 37.65, unit: "ms", raw: 37651400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 73.89, unit: "ms", raw: 73892700 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "02BE8C71DB480D9B",
            startTime: "2023-03-06T09:07:12.958067Z",
            duration: { value: 77.83, unit: "ms", raw: 77831400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:07.029627Z",
          p50: { value: 37.65, unit: "ms", raw: 37651400 },
          p95: { value: 73.89, unit: "ms", raw: 73892700 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateMethodErrorHotspotInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateMethodErrorHotspotInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateMethodErrorHotspotInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateMethodErrorHotspotInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateMethodErrorHotspotInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 49.36, unit: "ms", raw: 49355100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 61.84, unit: "ms", raw: 61840600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "35641F83DF79E9B1",
            startTime: "2023-03-06T09:07:12.943785Z",
            duration: { value: 79.8, unit: "ms", raw: 79803100 }
          },
          firstDataSeenTime: "2023-03-06T09:08:02.98948Z",
          p50: { value: 49.36, unit: "ms", raw: 49355100 },
          p95: { value: 61.84, unit: "ms", raw: 61840600 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateMethodErrorInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateMethodErrorInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateMethodErrorInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateMethodErrorInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateMethodErrorInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 26.71, unit: "ms", raw: 26714100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 121.06, unit: "ms", raw: 121056000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6694B463B3B585C3E70171E653886428",
            spanId: "60F41A09AAF7D207",
            startTime: "2023-03-06T09:07:12.984392Z",
            duration: { value: 70.66, unit: "ms", raw: 70658700 }
          },
          firstDataSeenTime: "2023-03-06T09:08:02.769209Z",
          p50: { value: 26.71, unit: "ms", raw: 26714100 },
          p95: { value: 121.06, unit: "ms", raw: 121056000 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanBreakdownInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanBreakdownInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanBreakdownInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanBreakdownInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanBreakdownInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 84.96, unit: "ms", raw: 84964650 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 98.97, unit: "ms", raw: 98974100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "8C8356AB124860BB",
            startTime: "2023-03-06T09:07:24.213221Z",
            duration: { value: 59.55, unit: "ms", raw: 59554900 }
          },
          firstDataSeenTime: "2023-03-06T09:07:08.418301Z",
          p50: { value: 84.96, unit: "ms", raw: 84964650 },
          p95: { value: 98.97, unit: "ms", raw: 98974100 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencyHistogramMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencyHistogramMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencyHistogramMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencyHistogramMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencyHistogramMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 73.24, unit: "ms", raw: 73242300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 95.05, unit: "ms", raw: 95049000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EBAC938F542BD003FD3BA9F23B5A7D55",
            spanId: "16276908FBF124EC",
            startTime: "2023-03-06T09:07:11.741506Z",
            duration: { value: 53.22, unit: "ms", raw: 53223200 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.641309Z",
          p50: { value: 73.24, unit: "ms", raw: 73242300 },
          p95: { value: 95.05, unit: "ms", raw: 95049000 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencySummaryMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencySummaryMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanConcurrencySummaryMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencySummaryMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanConcurrencySummaryMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 58.12, unit: "ms", raw: 58119450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 71.4, unit: "ms", raw: 71395300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "2E3A988D2363E2935C0CAB30AC49CDAB",
            spanId: "662F559D2893FA7A",
            startTime: "2023-03-06T09:07:25.709001Z",
            duration: { value: 38.77, unit: "ms", raw: 38769700 }
          },
          firstDataSeenTime: "2023-03-06T09:08:04.139193Z",
          p50: { value: 58.12, unit: "ms", raw: 58119450 },
          p95: { value: 71.4, unit: "ms", raw: 71395300 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanDurationChangeMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanDurationChangeMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanDurationChangeMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationChangeMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationChangeMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 61.73, unit: "ms", raw: 61733400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 117.99, unit: "ms", raw: 117993400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CA52178A8822D9E5E89A428CB5CDAAC2",
            spanId: "41314D6A0CC8BF0A",
            startTime: "2023-03-06T09:07:11.723261Z",
            duration: { value: 60.97, unit: "ms", raw: 60968900 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.96133Z",
          p50: { value: 61.73, unit: "ms", raw: 61733400 },
          p95: { value: 117.99, unit: "ms", raw: 117993400 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanDurationInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanDurationInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanDurationInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 72.95, unit: "ms", raw: 72952000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 90.41, unit: "ms", raw: 90407200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "76C5D9798B64B7785AAE1688409E34E2",
            spanId: "AC97F2B5713634CA",
            startTime: "2023-03-06T09:07:11.949276Z",
            duration: { value: 49.81, unit: "ms", raw: 49811400 }
          },
          firstDataSeenTime: "2023-03-06T09:07:03.90423Z",
          p50: { value: 72.95, unit: "ms", raw: 72952000 },
          p95: { value: 90.41, unit: "ms", raw: 90407200 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanDurationSummaryMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanDurationSummaryMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanDurationSummaryMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationSummaryMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanDurationSummaryMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 71.73, unit: "ms", raw: 71727700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 124.29, unit: "ms", raw: 124291400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "EAF780806601A65DE3D8B201604C090D",
            spanId: "7720652BA7B3E43A",
            startTime: "2023-03-06T09:07:11.979624Z",
            duration: { value: 59.77, unit: "ms", raw: 59765200 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.833331Z",
          p50: { value: 71.73, unit: "ms", raw: 71727700 },
          p95: { value: 124.29, unit: "ms", raw: 124291400 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanEndpointsBottleneckInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanEndpointsBottleneckInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanEndpointsBottleneckInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 43.37, unit: "ms", raw: 43372800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 81.86, unit: "ms", raw: 81862600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "9496F6BB75FBD5E2B4B2F93CCD61CC99",
            spanId: "B916F4E3C421ACAA",
            startTime: "2023-03-06T09:07:07.639044Z",
            duration: { value: 74.55, unit: "ms", raw: 74552800 }
          },
          firstDataSeenTime: "2023-03-06T09:07:03.729944Z",
          p50: { value: 43.37, unit: "ms", raw: 43372800 },
          p95: { value: 81.86, unit: "ms", raw: 81862600 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanFlowMeasurement send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanFlowMeasurement send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanFlowMeasurement send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanFlowMeasurement",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanFlowMeasurement"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 70.96, unit: "ms", raw: 70956000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 129.71, unit: "ms", raw: 129709100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C71A4B933804DF80CF5FBD7B253B28",
            spanId: "6F44F8BF9FB40536",
            startTime: "2023-03-06T09:07:09.721434Z",
            duration: { value: 125.14, unit: "ms", raw: 125144800 }
          },
          firstDataSeenTime: "2023-03-06T09:07:05.892522Z",
          p50: { value: 70.96, unit: "ms", raw: 70956000 },
          p95: { value: 129.71, unit: "ms", raw: 129709100 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanNPlusOneInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanNPlusOneInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanNPlusOneInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanNPlusOneInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanNPlusOneInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 72.33, unit: "ms", raw: 72330800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 93.99, unit: "ms", raw: 93992800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "E56B3D8F522854AB40B3E7EC4588021F",
            spanId: "DF1782BEB145A0CC",
            startTime: "2023-03-06T09:07:22.653386Z",
            duration: { value: 61.88, unit: "ms", raw: 61883400 }
          },
          firstDataSeenTime: "2023-03-06T09:07:08.335469Z",
          p50: { value: 72.33, unit: "ms", raw: 72330800 },
          p95: { value: 93.99, unit: "ms", raw: 93992800 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanScalingInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanScalingInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanScalingInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 72.11, unit: "ms", raw: 72113200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 75.9, unit: "ms", raw: 75898700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0FBB23B6FF25E828E2AF64CF99F0E1FF",
            spanId: "814C1272CCC40ADE",
            startTime: "2023-03-06T09:07:12.061102Z",
            duration: { value: 24.31, unit: "ms", raw: 24314000 }
          },
          firstDataSeenTime: "2023-03-06T09:07:03.992835Z",
          p50: { value: 72.11, unit: "ms", raw: 72113200 },
          p95: { value: 75.9, unit: "ms", raw: 75898700 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanScalingRootCauseInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanScalingRootCauseInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanScalingRootCauseInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingRootCauseInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanScalingRootCauseInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 79.25, unit: "ms", raw: 79245400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 86, unit: "ms", raw: 86002500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4D3EB8062A0B9750C55DA5CACE4901F0",
            spanId: "6CC94DFA37F7A886",
            startTime: "2023-03-06T09:07:12.137872Z",
            duration: { value: 16.73, unit: "ms", raw: 16725200 }
          },
          firstDataSeenTime: "2023-03-06T09:07:04.122897Z",
          p50: { value: 79.25, unit: "ms", raw: 79245400 },
          p95: { value: 86, unit: "ms", raw: 86002500 }
        },
        {
          span: {
            classification: "Producer",
            role: "Internal",
            name: "Digma.Measurement.Contracts.Messages:UpdateSpanUsageInsight send",
            displayName:
              "Digma.Measurement.Contracts.Messages:UpdateSpanUsageInsight send",
            instrumentationLibrary: "MassTransit",
            spanCodeObjectId:
              "span:MassTransit$_$Digma.Measurement.Contracts.Messages:UpdateSpanUsageInsight send",
            methodCodeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanUsageInsight",
            kind: "Producer",
            codeObjectId:
              "Digma.Measurement.Contracts.Messages.UpdateSpanUsageInsight"
          },
          assetType: "CodeLocation",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 74.26, unit: "ms", raw: 74258400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 87.3, unit: "ms", raw: 87298600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D4FBF218E998A15EC5078F2CAD309A9A",
            spanId: "EAE17364DD98635E",
            startTime: "2023-03-06T09:07:11.990229Z",
            duration: { value: 61.72, unit: "ms", raw: 61722300 }
          },
          firstDataSeenTime: "2023-03-06T09:07:03.815233Z",
          p50: { value: 74.26, unit: "ms", raw: 74258400 },
          p95: { value: 87.3, unit: "ms", raw: 87298600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "19786159F25458E9D3FAD5508633E5",
            displayName:
              "\r\n            SELECT DISTINCT ON (endpoints.uid)\r\n                endpoints.environment AS Environment,\r\n                endpoints.route AS Route,\r\n                endpoints.code_object_id AS MethodCodeObjectId,\r\n                endpoints.span_code_object_id AS SpanCodeObjectId,\r\n                endpoints.service AS Service,\r\n                endpoints.usage_score AS UsageScore,\r\n                endpoints.max_calls_1m AS MaxCallsIn1Min,\r\n                endpoints.slow_spans AS SlowSpansJson,\r\n                endpoints.highly_occuring_spans AS HighlyOccuringSpansJson,\r\n                endpoints.endpoints_median AS EndpointsMedian,\r\n                endpoints.endpoints_median_of_medians AS EndpointsMedianOfMedians,\r\n                endpoints.endpoints_p75 AS EndpointsP75,\r\n                endpoints.median AS Median,\r\n                endpoints.zscore AS ZScore,\r\n                endpoints.updated_at AS LastUpdate,\r\n                spans.span AS SpanName,\r\n                spans.kind AS SpanKind,\r\n                spans.span_role AS SpanRole,\r\n                spans.display_name AS SpanDisplayName,\r\n                spans.original_name AS SpanOriginalName,\r\n                spans.span_classification AS SpanClassification,\r\n                spans.instrumentation_library AS SpanInstrumentationLibrary\r\n            FROM endpoints\r\n            LEFT JOIN spans ON spans.span_code_object_id = endpoints.span_code_object_id\r\n            WHERE endpoints.account_id = @accountId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$19786159F25458E9D3FAD5508633E5",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 45, unit: "ms", raw: 45002450 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 84.64,
                unit: "ms",
                raw: 84636579.99999997
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "287E03B5B265542EA865C45AF202EF81",
            spanId: "05B2142636DD1BCF",
            startTime: "2023-03-06T09:07:12.188441Z",
            duration: { value: 14.19, unit: "ms", raw: 14188100 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.552848Z",
          p50: { value: 45, unit: "ms", raw: 45002450 },
          p95: { value: 84.64, unit: "ms", raw: 84636579.99999997 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "4944255082B07BB2E951B82FB88A16",
            displayName:
              "\r\n            UPDATE spans\r\n            SET slow_endpoints = CAST(@SlowEndPointsJson AS JSON),\r\n                high_trace_occurences = CAST(@HightTraceOccurrencesJson AS JSON)\r\n            WHERE account_id = @AccountId\r\n              AND environment = @Environment\r\n              AND instrumentation_library = @InstrumentationLibrary\r\n              AND span = @Span\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$4944255082B07BB2E951B82FB88A16",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.18, unit: "ms", raw: 5180450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.45, unit: "ms", raw: 7448500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "52EC75B488914C49",
            startTime: "2023-03-06T09:09:26.561727Z",
            duration: { value: 4.35, unit: "ms", raw: 4346000 }
          },
          firstDataSeenTime: "2023-03-06T09:07:08.752892Z",
          p50: { value: 5.18, unit: "ms", raw: 5180450 },
          p95: { value: 7.45, unit: "ms", raw: 7448500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "4B9D7825EA480AA372670981725B03",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                code_object_id AS CodeObjectId,\r\n                insight_type AS InsightType,\r\n                first_detected AS FirstDetected,\r\n                insight_data AS InsightData,\r\n                is_active AS IsActive,\r\n                last_detected AS LastDetected,\r\n                last_deactivated AS LastDeactivated,\r\n                custom_start_time AS CustomStartTime,\r\n                actual_start_time AS ActualStartTime\r\n            \r\n            FROM code_object_insights \r\n            WHERE account_id = @accountId AND\r\n                  is_active = true",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$4B9D7825EA480AA372670981725B03",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 180.47, unit: "ms", raw: 180473800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 207.37, unit: "ms", raw: 207369100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21F5CF71B71296CB5FA957F763E051F9",
            spanId: "5F10ABD87F83874E",
            startTime: "2023-03-06T09:07:09.537814Z",
            duration: { value: 180.47, unit: "ms", raw: 180473800 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.945464Z",
          p50: { value: 180.47, unit: "ms", raw: 180473800 },
          p95: { value: 207.37, unit: "ms", raw: 207369100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "557FB5997D46DEDBD1054A7AB66434",
            displayName:
              "\r\n            INSERT INTO code_object_insights(account_id, environment, code_object_id, insight_type, insight_data, is_active, first_detected, last_detected, last_deactivated, actual_start_time)\r\n            VALUES(@AccountId, \r\n                   @Environment, \r\n                   @CodeObjectId, \r\n                   @InsightType,\r\n                   CAST(@InsightData AS JSON),\r\n                   @IsActive,\r\n                   @FirstDetected,\r\n                   @LastDetected,\r\n                   @LastDeactivated,\r\n                   @ActualStartTime)\r\n            ON CONFLICT (account_id,environment, code_object_id, insight_type) \r\n            DO UPDATE SET \r\n                insight_data = CAST(@InsightData AS JSON),\r\n                is_active = @IsActive, \r\n                last_detected = @LastDetected,  \r\n                actual_start_time = @ActualStartTime",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$557FB5997D46DEDBD1054A7AB66434",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.28, unit: "ms", raw: 6278500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 69.03, unit: "ms", raw: 69030800 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "05FF555BA0A46E452139B57E41272E01",
            spanId: "8E74A2ED7ADA33B6",
            startTime: "2023-03-06T09:05:59.895547Z",
            duration: { value: 2.77, unit: "ms", raw: 2765500 }
          },
          firstDataSeenTime: "2023-03-06T09:07:01.690942Z",
          p50: { value: 6.28, unit: "ms", raw: 6278500 },
          p95: { value: 69.03, unit: "ms", raw: 69030800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "5CFDD26A22A92573242711496DC90C",
            displayName:
              "select MAX(sample_date) from span_flow_trace_samples where sample_type='General' and account_id='00000000-0000-0000-0000-000000000000'",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$5CFDD26A22A92573242711496DC90C",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.63, unit: "ms", raw: 3633900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.13, unit: "ms", raw: 7134200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "3D75E0380F00CB5D9E4C5405A5B12C53",
            spanId: "54D2F5A977D996C4",
            startTime: "2023-03-06T09:07:00.079825Z",
            duration: { value: 1.12, unit: "ms", raw: 1121500 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.673296Z",
          p50: { value: 3.63, unit: "ms", raw: 3633900 },
          p95: { value: 7.13, unit: "ms", raw: 7134200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "65B79C6D334205FC87A28A4519B9B5",
            displayName:
              "\r\n            SELECT\r\n                code_objects.account_id AS AccountId,\r\n                code_objects.environment AS Environment,\r\n                code_objects.id AS MethodCodeObjectId,\r\n                code_objects.updated_at AS LastUpdate\r\n            FROM code_objects\r\n            WHERE code_objects.account_id = @accountId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$65B79C6D334205FC87A28A4519B9B5",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.23, unit: "ms", raw: 1232700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 58.6, unit: "ms", raw: 58597600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D9AC3293B6C86790534CDFB16430DB7C",
            spanId: "05A7CD1098A6844B",
            startTime: "2023-03-06T09:07:12.350048Z",
            duration: { value: 18.9, unit: "ms", raw: 18904400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:03.960022Z",
          p50: { value: 1.23, unit: "ms", raw: 1232700 },
          p95: { value: 58.6, unit: "ms", raw: 58597600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "66FC673DFE3EFE8A3F564B78BF7C62",
            displayName:
              "\r\n            INSERT INTO span_flow_trace_samples(index, service, span, account_id, environment, flow_hash, span_id, trace_id, instrumentation_library, sample_date, sample_type)\r\n            VALUES (@Index,\r\n                    @Service,\r\n                    @Span, \r\n                    @AccountId, \r\n                    @Environment,\r\n                    @FlowHash, \r\n                    @SpanId,\r\n                    @TraceId,\r\n                    @InstrumentationLibrary,\r\n                    @SampleDate,\r\n                    @SampleType\r\n                    )\r\n\r\n            ON CONFLICT ON CONSTRAINT span_flow_trace_samples_index_environment_service_instrumen_key\r\n            DO UPDATE SET\r\n                span_id = @SpanId, \r\n                trace_id = @TraceId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$66FC673DFE3EFE8A3F564B78BF7C62",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.03, unit: "ms", raw: 7032050 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.86, unit: "ms", raw: 16858700 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SpaNPlusOne",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "3D75E0380F00CB5D9E4C5405A5B12C53",
            spanId: "72516F96719C8DDE",
            startTime: "2023-03-06T09:07:00.462417Z",
            duration: { value: 7.25, unit: "ms", raw: 7245400 }
          },
          firstDataSeenTime: "2023-03-02T10:21:05.347823Z",
          p50: { value: 7.03, unit: "ms", raw: 7032050 },
          p95: { value: 16.86, unit: "ms", raw: 16858700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "79ACD8CB9739391E90640E36E25874",
            displayName:
              "\r\n           SELECT distinct(environment)\r\n            FROM spans\r\n            WHERE account_id=@accountId and updated_at>@fromTime",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$79ACD8CB9739391E90640E36E25874",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.56, unit: "ms", raw: 2559700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 4.1, unit: "ms", raw: 4102000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "12D645E33E2308BB2AD21F61F55FAFF7",
            spanId: "54FEAC394D0F043F",
            startTime: "2023-03-06T09:07:11.843377Z",
            duration: { value: 1.41, unit: "ms", raw: 1408100 }
          },
          firstDataSeenTime: "2023-03-02T10:21:06.332248Z",
          p50: { value: 2.56, unit: "ms", raw: 2559700 },
          p95: { value: 4.1, unit: "ms", raw: 4102000 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "811224EEDD88DFB019AA358987F795",
            displayName:
              "update spans set slow_endpoints = NULL where account_id = @AccountId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$811224EEDD88DFB019AA358987F795",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.51, unit: "ms", raw: 16505800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.51, unit: "ms", raw: 16505800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "05FF555BA0A46E452139B57E41272E01",
            spanId: "DB3FCE1E40B5E9C7",
            startTime: "2023-03-06T09:06:04.794906Z",
            duration: { value: 16.51, unit: "ms", raw: 16505800 }
          },
          firstDataSeenTime: "2023-03-06T09:07:08.497596Z",
          p50: { value: 16.51, unit: "ms", raw: 16505800 },
          p95: { value: 16.51, unit: "ms", raw: 16505800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "83B003C246D255EE9723B3C3A322D8",
            displayName:
              "\r\n            SELECT account_id  AS AccountId,\r\n                   environment AS Environment,\r\n                   flow_hash   AS FlowHash,\r\n                   json_data   AS JsonData,\r\n                   latest_trace_id       AS LatestTraceId,\r\n                   latest_span_id        AS LatestSpanId,\r\n                   latest_span_timestamp AS LatestSpanTimestamp,\r\n                   latest_span_duration  AS LatestSpanDuration\r\n            FROM   span_flows_meta\r\n            WHERE  account_id = @accountId\r\n              \r\n              AND  flow_hash = ANY(@flowHashes)\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$83B003C246D255EE9723B3C3A322D8",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.67, unit: "ms", raw: 1668950 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.71, unit: "ms", raw: 1712800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "57A19D12EF28D568",
            startTime: "2023-03-06T09:06:36.364539Z",
            duration: { value: 1.71, unit: "ms", raw: 1712800 }
          },
          firstDataSeenTime: "2023-03-06T09:10:03.056174Z",
          p50: { value: 1.67, unit: "ms", raw: 1668950 },
          p95: { value: 1.71, unit: "ms", raw: 1712800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "9002F5FD0D8FC9CEC4D68EA8D6FC04",
            displayName:
              "\r\n            SELECT environment, min(created_at), max(updated_at)\r\n            FROM spans\r\n            WHERE account_id=@accountId\r\n            GROUP BY environment\r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$9002F5FD0D8FC9CEC4D68EA8D6FC04",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.55, unit: "ms", raw: 1547450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 4.01, unit: "ms", raw: 4010150 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "E8049A7E34B6F7A7",
            startTime: "2023-03-06T09:06:36.393054Z",
            duration: { value: 1.53, unit: "ms", raw: 1530900 }
          },
          firstDataSeenTime: "2023-03-06T09:10:05.392104Z",
          p50: { value: 1.55, unit: "ms", raw: 1547450 },
          p95: { value: 4.01, unit: "ms", raw: 4010150 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B488BB9D107608CF7EFF7E3FC256E3",
            displayName:
              "\r\n            INSERT INTO endpoints(service, route, span, account_id, environment, usage_score, max_calls_1m,\r\n                                  slow_spans, highly_occuring_spans, endpoints_median, endpoints_median_of_medians, endpoints_median_of_p75, \r\n                                  endpoints_p75, min, max, mean, median, p75, p95, p99, zscore, root_location, span_code_object_id, code_object_id)\r\n            VALUES(@Service, \r\n                   @Route,\r\n                   @Span, \r\n                   @AccountId, \r\n                   @Environment,\r\n                   @UsageScore, \r\n                   @MaxCallsIn1Min,\r\n                   CAST(@SlowSpansJson AS json),\r\n                   CAST(@HighlyOccuringJson AS json),\r\n                   @AllRequestsP50,\r\n                   0,\r\n                   @AllEndpointsMean,\r\n                   @AllRequestsP75,\r\n                   0,\r\n                   0,\r\n                   0,\r\n                   @Duration,\r\n                   0,\r\n                   0,\r\n                   0,\r\n                   @ZScore,\r\n                   @RootLocation,\r\n                   @SpanCodeObjectId,\r\n                   @CodeObjectId)\r\n            ON CONFLICT (service, route, account_id, environment, root_location) \r\n            DO UPDATE SET \r\n                usage_score = @UsageScore,\r\n                max_calls_1m  = @MaxCallsIn1Min,\r\n                slow_spans = CAST(@SlowSpansJson AS json),\r\n                highly_occuring_spans = CAST(@HighlyOccuringJson AS json),\r\n                endpoints_median  = @AllRequestsP50,\r\n                endpoints_median_of_medians  = @AllEndpointsMean,\r\n                endpoints_median_of_p75 = 0,\r\n                endpoints_p75  = @AllRequestsP75,\r\n                min  = 0,\r\n                max  = 0,\r\n                mean  = 0,\r\n                median  = @Duration,\r\n                p75  = 0,\r\n                p95  = 0,\r\n                p99  = 0,\r\n                zscore = @ZScore,\r\n                span = @Span,\r\n                span_code_object_id = @SpanCodeObjectId,\r\n                code_object_id = @CodeObjectId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B488BB9D107608CF7EFF7E3FC256E3",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.65, unit: "ms", raw: 3645800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.65, unit: "ms", raw: 3645800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "05FF555BA0A46E452139B57E41272E01",
            spanId: "04D05BD384E9A6A1",
            startTime: "2023-03-06T09:06:03.996144Z",
            duration: { value: 8.34, unit: "ms", raw: 8337400 }
          },
          firstDataSeenTime: "2023-03-06T09:07:06.554095Z",
          p50: { value: 3.65, unit: "ms", raw: 3645800 },
          p95: { value: 3.65, unit: "ms", raw: 3645800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B6524E03F4EA2D4D2CA980AD5E177B",
            displayName:
              "\r\nWITH norm AS\r\n( \r\nSELECT \r\nt.error_source_uid,\r\nt.unhandled,\r\nt.recency,\r\n        t.day_avg,\r\nt.unexpected,\r\nCASE \r\nWHEN t.max_slope = t.min_slope THEN 0\r\nELSE (t.trend_slope-t.min_slope)/(t.max_slope-t.min_slope)\r\nEND AS trend_slope_normalize,\r\nCASE \r\nWHEN t.max_wma = t.min_wma THEN 0\r\nELSE (t.wma-t.min_wma)/(t.max_wma-t.min_wma)\r\nEND AS moving_avg_normalize\r\nFROM(\r\nSELECT \r\nes.uid as error_source_uid, \r\nes.wma, \r\nes.trend_slope, \r\nes.recency,\r\nes.day_avg,\r\nes.unhandled,\r\nes.unexpected,\r\nMIN(es.trend_slope) OVER (PARTITION BY co.account_id, co.environment)  AS min_slope ,  \r\nMAX(es.trend_slope) OVER (PARTITION BY co.account_id, co.environment) AS max_slope,\r\nMIN(es.wma) OVER (PARTITION BY co.account_id, co.environment)  AS min_wma ,  \r\nMAX(es.wma) OVER (PARTITION BY co.account_id, co.environment) AS max_wma\r\nFROM code_objects co \r\nINNER JOIN \r\n(\r\nSELECT es.uid, es.code_object_uid,\r\nSUM(ef.moving_avg) as wma, \r\nMAX(ef.trend_slope) as trend_slope,\r\nMAX(ef.recency) as recency,\r\nSUM(ef.day_avg) as day_avg,\r\nCASE\r\nWHEN bool_or(ef.handled = false) = true THEN 1\r\nELSE 0\r\nEND unhandled,\r\nCASE\r\nWHEN bool_and(ef.unexpected = true) = true THEN true\r\nELSE false\r\nEND unexpected\r\nFROM  errors_source es\r\nINNER JOIN error_source_error_flow esef ON esef.error_source_uid = es.uid \r\nINNER JOIN error_flows ef ON ef.uid = esef.error_flow_uid\r\nGROUP BY es.uid \r\n) es\r\nON es.code_object_uid = co.uid\r\n) t\r\n)\r\nUPDATE errors_source es\r\nSET unhandled = n.unhandled,\r\n    unexpected = n.unexpected,\r\ntrend_slope_normalize = n.trend_slope_normalize,\r\nmoving_avg_normalize = n.moving_avg_normalize,\r\nrecency = n.recency,\r\n    day_avg = n.day_avg,\r\nscore = n.unhandled_score_unit+n.trend_slope_score_unit+n.moving_avg_score_unit+n.recency_score_unit,\r\nunhandled_score_unit = n.unhandled_score_unit,\r\ntrend_slope_score_unit = n.trend_slope_score_unit,\r\nmoving_avg_score_unit = n.moving_avg_score_unit,\r\nrecency_score_unit = n.recency_score_unit\r\nFROM\r\n(\r\nSELECT  error_source_uid,\r\nunhandled, \r\nunexpected, \r\ntrend_slope_normalize, \r\nmoving_avg_normalize, \r\nrecency,\r\n            day_avg,\r\n    round(100 * 0.5 * unhandled) AS unhandled_score_unit,\r\nround(100 * 0.25 * \r\nCASE \r\nWHEN trend_slope_normalize IS NULL THEN 0\r\nELSE trend_slope_normalize\r\nEND) AS trend_slope_score_unit,\r\nround(100 * 0.25 * moving_avg_normalize) as moving_avg_score_unit,\r\nround(100 * 0.2 * \r\nCASE \r\nWHEN trend_slope_normalize IS NOT NULL THEN 0\r\nELSE recency\r\nEND) AS recency_score_unit\r\n FROM norm\r\n) n\r\nWHERE n.error_source_uid = es.uid",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$B6524E03F4EA2D4D2CA980AD5E177B",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.87, unit: "ms", raw: 11866550 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 22.98, unit: "ms", raw: 22984300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21D6A06CE674A6AD424F03074DDDAF64",
            spanId: "10E78C6ECD89B91E",
            startTime: "2023-03-06T09:07:00.026308Z",
            duration: { value: 22.98, unit: "ms", raw: 22984300 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.174659Z",
          p50: { value: 11.87, unit: "ms", raw: 11866550 },
          p95: { value: 22.98, unit: "ms", raw: 22984300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "C69DE909E30AEF52398B89079C5764",
            displayName:
              "\r\n            UPDATE code_objects co1\r\n            SET score = round(co2.score)\r\n            FROM(\r\n            select co.uid, avg(es.score) as score\r\n            from code_objects as co\r\n            inner join errors_source as es\r\n            on es.code_object_uid = co.uid\r\n            group by co.uid\r\n            ) co2\r\n            WHERE co2.uid = co1.uid",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$C69DE909E30AEF52398B89079C5764",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.41, unit: "ms", raw: 5414450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.38, unit: "ms", raw: 10376600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "21D6A06CE674A6AD424F03074DDDAF64",
            spanId: "DCC4195ED14F5921",
            startTime: "2023-03-06T09:07:00.049359Z",
            duration: { value: 10.38, unit: "ms", raw: 10376600 }
          },
          firstDataSeenTime: "2023-03-02T10:21:04.352499Z",
          p50: { value: 5.41, unit: "ms", raw: 5414450 },
          p95: { value: 10.38, unit: "ms", raw: 10376600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "CF279ACA1C59C26F6ECF9BD86DB26E",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                route AS Route,\r\n                span AS Span,\r\n                service AS Service,\r\n                root_location AS RootLocation,\r\n                span_code_object_id AS SpanCodeObjectId,\r\n                code_object_id AS CodeObjectId,\r\n                usage_score AS UsageScore,\r\n                max_calls_1m AS MaxCallsIn1Min,\r\n                slow_spans AS SlowSpansJson,\r\n                highly_occuring_spans AS HighlyOccuringJson,\r\n                endpoints_median AS AllRequestsP50,\r\n                endpoints_median_of_medians AS AllEndpointsMean,\r\n                endpoints_p75 AS AllRequestsP75,\r\n                median AS Duration,\r\n                zscore as ZScore\r\n            FROM endpoints \r\n            WHERE account_id = @accountId",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$CF279ACA1C59C26F6ECF9BD86DB26E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2, unit: "ms", raw: 1998400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2, unit: "ms", raw: 1998400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "D5243213124E08D0",
            startTime: "2023-03-06T09:06:31.681454Z",
            duration: { value: 2, unit: "ms", raw: 1998400 }
          },
          firstDataSeenTime: "2023-03-06T09:10:01.747862Z",
          p50: { value: 2, unit: "ms", raw: 1998400 },
          p95: { value: 2, unit: "ms", raw: 1998400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "D1B2F60E206CA4ACD4E4A6FE8C810D",
            displayName:
              "\r\n            SELECT\r\n                environment AS Environment,\r\n                code_object_id AS CodeObjectId,\r\n                instrumentation_library AS InstrumentationLibrary,\r\n                span AS Span,\r\n                duration_percentiles AS DurationPercentilesJson,\r\n                slow_endpoints AS SlowEndpointsJson,\r\n                high_trace_occurences AS HighTraceOccurencesJson,\r\n                periodic_percentiles AS PeriodicPercentilesJson,\r\n                span_role AS SpanRole,\r\n                span_classification AS SpanClassification,\r\n                kind AS Kind,\r\n                original_name AS SpanOriginalName,\r\n                span_code_object_id AS SpanCodeObjectId,\r\n                display_name AS DisplayName\r\n            FROM spans \r\n            WHERE account_id = @accountId \r\n             \r\n            ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$D1B2F60E206CA4ACD4E4A6FE8C810D",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 9.08, unit: "ms", raw: 9081000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 9.08, unit: "ms", raw: 9081000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "D208D859454824CC",
            startTime: "2023-03-06T09:06:31.746261Z",
            duration: { value: 9.08, unit: "ms", raw: 9081000 }
          },
          firstDataSeenTime: "2023-03-06T09:10:01.936368Z",
          p50: { value: 9.08, unit: "ms", raw: 9081000 },
          p95: { value: 9.08, unit: "ms", raw: 9081000 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "ECE54D00D1BB7F89F390D99DD23B99",
            displayName:
              "\r\n            SELECT\r\n                'Span' AS Type,\r\n                environment AS Environment,\r\n                instrumentation_library AS InstrumentationLibrary,\r\n                created_at AS FirstRecordedTime,\r\n                updated_at AS LastRecordedTime,\r\n                span AS Name,\r\n                span AS GroupName,\r\n\r\n                CASE\r\n                    WHEN code_object_id is not null\r\n                    THEN CONCAT('method:',code_object_id)\r\n                    ELSE span_code_object_id\r\n                END AS CodeObjectId\r\n            FROM spans\r\n            WHERE account_id = @accountId\r\n            AND  (span_code_object_id = ANY (@spanCodeObjectIds)) ",
            instrumentationLibrary: "Npgsql",
            spanCodeObjectId: "span:Npgsql$_$ECE54D00D1BB7F89F390D99DD23B99",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "Digma.Scheduler",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.8, unit: "ms", raw: 6795600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 6.8, unit: "ms", raw: 6795600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0A587208EA9BFCD41DECE1D18DD1E68F",
            spanId: "884CE69B5B4C09AE",
            startTime: "2023-03-06T09:06:36.394961Z",
            duration: { value: 6.8, unit: "ms", raw: 6795600 }
          },
          firstDataSeenTime: "2023-03-06T09:10:03.141716Z",
          p50: { value: 6.8, unit: "ms", raw: 6795600 },
          p95: { value: 6.8, unit: "ms", raw: 6795600 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "Digma.Scheduler"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "topic1 send",
            displayName: "topic1 send",
            instrumentationLibrary: "io.opentelemetry.kafka-clients-0.11",
            spanCodeObjectId:
              "span:io.opentelemetry.kafka-clients-0.11$_$topic1 send",
            methodCodeObjectId: "",
            kind: "Producer",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "KafkaSample01WIthAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 60.14, unit: "ms", raw: 60139500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 189.14, unit: "ms", raw: 189135100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T15:45:01.737771Z",
          p50: { value: 60.14, unit: "ms", raw: 60139500 },
          p95: { value: 189.14, unit: "ms", raw: 189135100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "topic1 process",
            displayName: "topic1 process",
            instrumentationLibrary: "io.opentelemetry.spring-kafka-2.7",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-kafka-2.7$_$topic1 process",
            methodCodeObjectId: "com.example.Application$Xyz$_$listen",
            kind: "Consumer",
            codeObjectId: "com.example.Application$Xyz$_$listen"
          },
          assetType: "CodeLocation",
          serviceName: "KafkaSample01WIthAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 8.04, unit: "ms", raw: 8036950 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 15.09, unit: "ms", raw: 15091500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T15:45:01.867837Z",
          p50: { value: 8.04, unit: "ms", raw: 8036950 },
          p95: { value: 15.09, unit: "ms", raw: 15091500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "#topic#topic1#cg#DigmaUnknownGroup",
            displayName: "#topic#topic1#cg#DigmaUnknownGroup",
            instrumentationLibrary: "io.opentelemetry.spring-kafka-2.7",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-kafka-2.7$_$#topic#topic1#cg#DigmaUnknownGroup",
            methodCodeObjectId: "com.example.Application$_$listen",
            kind: "Consumer",
            codeObjectId: "com.example.Application$_$listen"
          },
          assetType: "CodeLocation",
          serviceName: "KafkaSample01WIthAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 789.7, unit: "μs", raw: 789700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 789.7, unit: "μs", raw: 789700 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-09T16:24:02.616936Z",
          p50: { value: 789.7, unit: "μs", raw: 789700 },
          p95: { value: 789.7, unit: "μs", raw: 789700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "#topic#topic1#cg#fooGroup",
            displayName: "#topic#topic1#cg#fooGroup",
            instrumentationLibrary: "io.opentelemetry.spring-kafka-2.7",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-kafka-2.7$_$#topic#topic1#cg#fooGroup",
            methodCodeObjectId: "com.example.Application$_$listen",
            kind: "Consumer",
            codeObjectId: "com.example.Application$_$listen"
          },
          assetType: "CodeLocation",
          serviceName: "KafkaSample01WIthAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 789.7, unit: "μs", raw: 789700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 789.7, unit: "μs", raw: 789700 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-12T10:51:02.053697Z",
          p50: { value: 789.7, unit: "μs", raw: 789700 },
          p95: { value: 789.7, unit: "μs", raw: 789700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "#topic#topic1#cg#fooGroup-0-C",
            displayName: "#topic#topic1#cg#fooGroup-0-C",
            instrumentationLibrary: "io.opentelemetry.spring-kafka-2.7",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-kafka-2.7$_$#topic#topic1#cg#fooGroup-0-C",
            methodCodeObjectId: "com.example.Application$_$listen",
            kind: "Consumer",
            codeObjectId: "com.example.Application$_$listen"
          },
          assetType: "CodeLocation",
          serviceName: "KafkaSample01WIthAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 789.7, unit: "μs", raw: 789700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 789.7, unit: "μs", raw: 789700 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-12T10:29:01.898633Z",
          p50: { value: 789.7, unit: "μs", raw: 789700 },
          p95: { value: 789.7, unit: "μs", raw: 789700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Entry",
            name: "HTTP GET /send/foo/{what}",
            displayName: "HTTP GET /send/foo/{what}",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /send/foo/{what}",
            methodCodeObjectId: "com.example.Controller$_$sendFoo",
            kind: "Server",
            codeObjectId: "com.example.Controller$_$sendFoo"
          },
          assetType: "CodeLocation",
          serviceName: "KafkaSample01WIthAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 143.83, unit: "ms", raw: 143830400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 518.79, unit: "ms", raw: 518791100 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-05T15:45:02.399282Z",
          p50: { value: 143.83, unit: "ms", raw: 143830400 },
          p95: { value: 518.79, unit: "ms", raw: 518791100 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "KafkaSample01WIthAgent"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SELECT",
            displayName: "SELECT",
            instrumentationLibrary: "io.opentelemetry.hibernate-6.0",
            spanCodeObjectId: "span:io.opentelemetry.hibernate-6.0$_$SELECT",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.66, unit: "ms", raw: 1659000 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 87.09,
                unit: "ms",
                raw: 87085879.9999999
              }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "FCB0A7B512CF10FD",
            startTime: "2023-03-02T06:52:51.065707Z",
            duration: { value: 389.4, unit: "μs", raw: 389400 }
          },
          firstDataSeenTime: "2023-02-16T08:27:07.646746Z",
          p50: { value: 1.66, unit: "ms", raw: 1659000 },
          p95: { value: 87.09, unit: "ms", raw: 87085879.9999999 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SELECT org.springframework.samples.petclinic.owner.PetType",
            displayName:
              "SELECT org.springframework.samples.petclinic.owner.PetType",
            instrumentationLibrary: "io.opentelemetry.hibernate-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.hibernate-6.0$_$SELECT org.springframework.samples.petclinic.owner.PetType",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 335.4, unit: "μs", raw: 335400 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 1.05,
                unit: "ms",
                raw: 1045044.9999999984
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D5FDB2CD950C02FB8D321F8A5F140DA8",
            spanId: "BC05E158E7559BEE",
            startTime: "2023-02-23T10:14:42.751188Z",
            duration: { value: 591.7, unit: "μs", raw: 591700 }
          },
          firstDataSeenTime: "2023-02-23T10:15:04.911335Z",
          p50: { value: 335.4, unit: "μs", raw: 335400 },
          p95: { value: 1.05, unit: "ms", raw: 1045044.9999999984 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SELECT org.springframework.samples.petclinic.vet.Vet",
            displayName: "SELECT org.springframework.samples.petclinic.vet.Vet",
            instrumentationLibrary: "io.opentelemetry.hibernate-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.hibernate-6.0$_$SELECT org.springframework.samples.petclinic.vet.Vet",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 129.88, unit: "ms", raw: 129877200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 160.52, unit: "ms", raw: 160517700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "BC680B295E7DC96D7F8B89846DFFA8FD",
            spanId: "8928AA04D981338E",
            startTime: "2023-02-20T14:35:52.803562Z",
            duration: { value: 7.71, unit: "ms", raw: 7712400 }
          },
          firstDataSeenTime: "2023-02-16T08:27:05.116106Z",
          p50: { value: 129.88, unit: "ms", raw: 129877200 },
          p95: { value: 160.52, unit: "ms", raw: 160517700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Session.merge org.springframework.samples.petclinic.owner.Owner",
            displayName:
              "Session.merge org.springframework.samples.petclinic.owner.Owner",
            instrumentationLibrary: "io.opentelemetry.hibernate-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.hibernate-6.0$_$Session.merge org.springframework.samples.petclinic.owner.Owner",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 16.49, unit: "ms", raw: 16490400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 17.55, unit: "ms", raw: 17547900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "7C010267FE7E9D263390167B0A1F4AA1",
            spanId: "B39FF52F48FDDC49",
            startTime: "2023-03-02T06:52:50.989732Z",
            duration: { value: 17.55, unit: "ms", raw: 17547900 }
          },
          firstDataSeenTime: "2023-02-16T08:30:02.577909Z",
          p50: { value: 16.49, unit: "ms", raw: 16490400 },
          p95: { value: 17.55, unit: "ms", raw: 17547900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Transaction.commit",
            displayName: "Transaction.commit",
            instrumentationLibrary: "io.opentelemetry.hibernate-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.hibernate-6.0$_$Transaction.commit",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 71.3, unit: "μs", raw: 71300 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 1.06,
                unit: "ms",
                raw: 1056009.9999999986
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "BB13078D69A3F227",
            startTime: "2023-03-02T06:52:51.066233Z",
            duration: { value: 63.6, unit: "μs", raw: 63600 }
          },
          firstDataSeenTime: "2023-02-16T08:27:08.020362Z",
          p50: { value: 71.3, unit: "μs", raw: 71300 },
          p95: { value: 1.06, unit: "ms", raw: 1056009.9999999986 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render owners/createOrUpdateOwnerForm",
            displayName: "Render owners/createOrUpdateOwnerForm",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render owners/createOrUpdateOwnerForm",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 9.55, unit: "ms", raw: 9550600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 32.58, unit: "ms", raw: 32582050 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "03CE65EF63A651A61E89F3EDB44656C2",
            spanId: "77CF62E58D03E653",
            startTime: "2023-03-02T06:52:48.368232Z",
            duration: { value: 36.09, unit: "ms", raw: 36090300 }
          },
          firstDataSeenTime: "2023-01-24T13:39:00.881162Z",
          p50: { value: 9.55, unit: "ms", raw: 9550600 },
          p95: { value: 32.58, unit: "ms", raw: 32582050 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render owners/findOwners",
            displayName: "Render owners/findOwners",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render owners/findOwners",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 40.31, unit: "ms", raw: 40308900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 41.01, unit: "ms", raw: 41010000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "C39F6F7729289BF23E0B65CA90ED9B09",
            spanId: "BF7545161C094E96",
            startTime: "2023-03-06T07:09:05.333981Z",
            duration: { value: 40.31, unit: "ms", raw: 40308900 }
          },
          firstDataSeenTime: "2023-01-24T13:39:00.90232Z",
          p50: { value: 40.31, unit: "ms", raw: 40308900 },
          p95: { value: 41.01, unit: "ms", raw: 41010000 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render owners/ownerDetails",
            displayName: "Render owners/ownerDetails",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render owners/ownerDetails",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.25, unit: "ms", raw: 11245550 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 44.94,
                unit: "ms",
                raw: 44937919.99999998
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "E6E7A6ED5912BB67",
            startTime: "2023-03-02T06:52:51.066439Z",
            duration: { value: 9.91, unit: "ms", raw: 9913200 }
          },
          firstDataSeenTime: "2023-01-24T13:39:01.116065Z",
          p50: { value: 11.25, unit: "ms", raw: 11245550 },
          p95: { value: 44.94, unit: "ms", raw: 44937919.99999998 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render owners/ownersList",
            displayName: "Render owners/ownersList",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render owners/ownersList",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 9.23, unit: "ms", raw: 9225450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 50.8, unit: "ms", raw: 50796700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B2093C47D01BB5C913A643A336C24A64",
            spanId: "71230F627641D1F6",
            startTime: "2023-03-02T06:52:45.828074Z",
            duration: { value: 50.8, unit: "ms", raw: 50796700 }
          },
          firstDataSeenTime: "2023-01-24T13:39:01.101174Z",
          p50: { value: 9.23, unit: "ms", raw: 9225450 },
          p95: { value: 50.8, unit: "ms", raw: 50796700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render pets/createOrUpdatePetForm",
            displayName: "Render pets/createOrUpdatePetForm",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render pets/createOrUpdatePetForm",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.56, unit: "ms", raw: 11561300 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 27.47,
                unit: "ms",
                raw: 27465599.999999985
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "8AF91511A96875A5F6BCE32FA4324B73",
            spanId: "2D17414177E2209D",
            startTime: "2023-02-23T10:14:36.341913Z",
            duration: { value: 41.22, unit: "ms", raw: 41217700 }
          },
          firstDataSeenTime: "2023-02-13T16:18:03.454824Z",
          p50: { value: 11.56, unit: "ms", raw: 11561300 },
          p95: { value: 27.47, unit: "ms", raw: 27465599.999999985 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render redirect:/owners/{ownerId}",
            displayName: "Render redirect:/owners/{ownerId}",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render redirect:/owners/{ownerId}",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 4.26, unit: "ms", raw: 4257300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 4.97, unit: "ms", raw: 4970200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "7C010267FE7E9D263390167B0A1F4AA1",
            spanId: "22E0FE07AA426167",
            startTime: "2023-03-02T06:52:51.051061Z",
            duration: { value: 4.97, unit: "ms", raw: 4970200 }
          },
          firstDataSeenTime: "2023-02-13T16:12:02.269138Z",
          p50: { value: 4.26, unit: "ms", raw: 4257300 },
          p95: { value: 4.97, unit: "ms", raw: 4970200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render vets/vetList",
            displayName: "Render vets/vetList",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render vets/vetList",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.52, unit: "ms", raw: 5515000 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 100.22,
                unit: "ms",
                raw: 100219619.9999995
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "05052E542A4F9E7CE6102E09F4B3C4DC",
            spanId: "C012D2F49DCE046D",
            startTime: "2023-02-20T14:35:53.490551Z",
            duration: { value: 11.08, unit: "ms", raw: 11079700 }
          },
          firstDataSeenTime: "2023-01-24T13:39:00.898225Z",
          p50: { value: 5.52, unit: "ms", raw: 5515000 },
          p95: { value: 100.22, unit: "ms", raw: 100219619.9999995 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Render welcome",
            displayName: "Render welcome",
            instrumentationLibrary: "io.opentelemetry.spring-webmvc-6.0",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-webmvc-6.0$_$Render welcome",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 671.76, unit: "ms", raw: 671763700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 761.45, unit: "ms", raw: 761447400 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "5BDFCF4BCC9139130DFD08CC85EA82DE",
            spanId: "83F0DD44ACE06F64",
            startTime: "2023-03-06T07:09:03.267517Z",
            duration: { value: 761.45, unit: "ms", raw: 761447400 }
          },
          firstDataSeenTime: "2023-01-24T13:39:01.123709Z",
          p50: { value: 671.76, unit: "ms", raw: 671763700 },
          p95: { value: 761.45, unit: "ms", raw: 761447400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "db_access_01",
            displayName: "db_access_01",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$db_access_01",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 128.5, unit: "μs", raw: 128500 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 4.02,
                unit: "ms",
                raw: 4020759.9999999823
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "0FAAB60F4980872067BB36B2D69F503A",
            spanId: "56BFC2DFC0434B62",
            startTime: "2023-02-20T14:36:00.344282Z",
            duration: { value: 216.1, unit: "μs", raw: 216100 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.76053Z",
          p50: { value: 128.5, unit: "μs", raw: 128500 },
          p95: { value: 4.02, unit: "ms", raw: 4020759.9999999823 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "going-to-record-error",
            displayName: "going-to-record-error",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId:
              "span:SampleInsightsController$_$going-to-record-error",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 48.65, unit: "μs", raw: 48650 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 1.57,
                unit: "ms",
                raw: 1569929.9999999986
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "1CFEDB75B387574EAE232C524AA267F4",
            spanId: "63F5C5F1B58CC34B",
            startTime: "2023-02-20T14:36:03.451748Z",
            duration: { value: 54, unit: "μs", raw: 54000 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.695122Z",
          p50: { value: 48.65, unit: "μs", raw: 48650 },
          p95: { value: 1.57, unit: "ms", raw: 1569929.9999999986 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SampleInsightsController.method1",
            displayName: "SampleInsightsController.method1",
            instrumentationLibrary:
              "io.opentelemetry.opentelemetry-instrumentation-annotations-1.16",
            spanCodeObjectId:
              "span:io.opentelemetry.opentelemetry-instrumentation-annotations-1.16$_$SampleInsightsController.method1",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$method1",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$method1"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 64.35, unit: "μs", raw: 64350 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 203.89,
                unit: "μs",
                raw: 203889.99999999983
              }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0273AF35662680846C73EEDE3D651423",
            spanId: "2F7C58D83B5CF878",
            startTime: "2023-02-20T14:36:00.32847Z",
            duration: { value: 65.9, unit: "μs", raw: 65900 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.242759Z",
          p50: { value: 64.35, unit: "μs", raw: 64350 },
          p95: { value: 203.89, unit: "μs", raw: 203889.99999999983 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SampleInsightsController.method2",
            displayName: "SampleInsightsController.method2",
            instrumentationLibrary:
              "io.opentelemetry.opentelemetry-instrumentation-annotations-1.16",
            spanCodeObjectId:
              "span:io.opentelemetry.opentelemetry-instrumentation-annotations-1.16$_$SampleInsightsController.method2",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$method2",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$method2"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 56.05, unit: "μs", raw: 56050 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 148.17,
                unit: "μs",
                raw: 148169.99999999977
              }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0273AF35662680846C73EEDE3D651423",
            spanId: "F68FF4032B996726",
            startTime: "2023-02-20T14:36:00.328477Z",
            duration: { value: 56.4, unit: "μs", raw: 56400 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.282686Z",
          p50: { value: 56.05, unit: "μs", raw: 56050 },
          p95: { value: 148.17, unit: "μs", raw: 148169.99999999977 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SampleInsightsController.method3",
            displayName: "SampleInsightsController.method3",
            instrumentationLibrary:
              "io.opentelemetry.opentelemetry-instrumentation-annotations-1.16",
            spanCodeObjectId:
              "span:io.opentelemetry.opentelemetry-instrumentation-annotations-1.16$_$SampleInsightsController.method3",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$method3",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$method3"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 44.65, unit: "μs", raw: 44650 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 73.8,
                unit: "μs",
                raw: 73799.99999999999
              }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0273AF35662680846C73EEDE3D651423",
            spanId: "7894F10BF65DCE01",
            startTime: "2023-02-20T14:36:00.328482Z",
            duration: { value: 43.8, unit: "μs", raw: 43800 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.61367Z",
          p50: { value: 44.65, unit: "μs", raw: 44650 },
          p95: { value: 73.8, unit: "μs", raw: 73799.99999999999 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SpanBottleneck 1",
            displayName: "SpanBottleneck 1",
            instrumentationLibrary:
              "io.opentelemetry.opentelemetry-instrumentation-annotations-1.16",
            spanCodeObjectId:
              "span:io.opentelemetry.opentelemetry-instrumentation-annotations-1.16$_$SpanBottleneck 1",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$doWorkForBottleneck1",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$doWorkForBottleneck1"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 206.27, unit: "ms", raw: 206266600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 214.53, unit: "ms", raw: 214528400 }
            }
          ],
          insights: [
            {
              type: "SpanEndpointBottleneck",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "569C32E71F060D0B9A697DC949477267",
            spanId: "E47F08400354F72E",
            startTime: "2023-03-02T06:52:39.234185Z",
            duration: { value: 201.15, unit: "ms", raw: 201147400 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.159989Z",
          p50: { value: 206.27, unit: "ms", raw: 206266600 },
          p95: { value: 214.53, unit: "ms", raw: 214528400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SpanBottleneck 2",
            displayName: "SpanBottleneck 2",
            instrumentationLibrary:
              "io.opentelemetry.opentelemetry-instrumentation-annotations-1.16",
            spanCodeObjectId:
              "span:io.opentelemetry.opentelemetry-instrumentation-annotations-1.16$_$SpanBottleneck 2",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$doWorkForBottleneck2",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$doWorkForBottleneck2"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 61.01, unit: "ms", raw: 61009800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 61.8, unit: "ms", raw: 61798600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "569C32E71F060D0B9A697DC949477267",
            spanId: "137372C1612F1B96",
            startTime: "2023-03-02T06:52:39.435416Z",
            duration: { value: 51.87, unit: "ms", raw: 51868600 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.15981Z",
          p50: { value: 61.01, unit: "ms", raw: 61009800 },
          p95: { value: 61.8, unit: "ms", raw: 61798600 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ResponseFacade.sendError",
            displayName: "ResponseFacade.sendError",
            instrumentationLibrary: "io.opentelemetry.servlet-5.0",
            spanCodeObjectId:
              "span:io.opentelemetry.servlet-5.0$_$ResponseFacade.sendError",
            methodCodeObjectId:
              "org.apache.catalina.connector.ResponseFacade$_$sendError",
            kind: "Internal",
            codeObjectId:
              "org.apache.catalina.connector.ResponseFacade$_$sendError"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 31.7, unit: "μs", raw: 31700 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 402.5,
                unit: "μs",
                raw: 402499.99999999977
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "66387CBAA878D22CDA3CA5B238530430",
            spanId: "C4694F732C05207B",
            startTime: "2023-03-06T07:09:05.389702Z",
            duration: { value: 120.2, unit: "μs", raw: 120200 }
          },
          firstDataSeenTime: "2023-02-13T15:39:04.427209Z",
          p50: { value: 31.7, unit: "μs", raw: 31700 },
          p95: { value: 402.5, unit: "μs", raw: 402499.99999999977 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "ResponseFacade.sendRedirect",
            displayName: "ResponseFacade.sendRedirect",
            instrumentationLibrary: "io.opentelemetry.servlet-5.0",
            spanCodeObjectId:
              "span:io.opentelemetry.servlet-5.0$_$ResponseFacade.sendRedirect",
            methodCodeObjectId:
              "org.apache.catalina.connector.ResponseFacade$_$sendRedirect",
            kind: "Internal",
            codeObjectId:
              "org.apache.catalina.connector.ResponseFacade$_$sendRedirect"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 103.2, unit: "μs", raw: 103200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 149.2, unit: "μs", raw: 149200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "7C010267FE7E9D263390167B0A1F4AA1",
            spanId: "83144806E3483F9F",
            startTime: "2023-03-02T06:52:51.055961Z",
            duration: { value: 57.2, unit: "μs", raw: 57200 }
          },
          firstDataSeenTime: "2023-02-13T16:12:02.376466Z",
          p50: { value: 103.2, unit: "μs", raw: 103200 },
          p95: { value: 149.2, unit: "μs", raw: 149200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "OwnerRepository.findById",
            displayName: "OwnerRepository.findById",
            instrumentationLibrary: "io.opentelemetry.spring-data-1.8",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-data-1.8$_$OwnerRepository.findById",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$findById",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$findById"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.39, unit: "ms", raw: 2389700 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 21.73,
                unit: "ms",
                raw: 21725019.999999993
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "DF28AB3A048C0109",
            startTime: "2023-03-02T06:52:51.065477Z",
            duration: { value: 840.2, unit: "μs", raw: 840200 }
          },
          firstDataSeenTime: "2023-02-13T07:07:23.533519Z",
          p50: { value: 2.39, unit: "ms", raw: 2389700 },
          p95: { value: 21.73, unit: "ms", raw: 21725019.999999993 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "OwnerRepository.findByLastName",
            displayName: "OwnerRepository.findByLastName",
            instrumentationLibrary: "io.opentelemetry.spring-data-1.8",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-data-1.8$_$OwnerRepository.findByLastName",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$findByLastName",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$findByLastName"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.67, unit: "ms", raw: 2674850 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 306.8,
                unit: "ms",
                raw: 306803699.9999999
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B2093C47D01BB5C913A643A336C24A64",
            spanId: "8733E84EF81F9AA5",
            startTime: "2023-03-02T06:52:45.499093Z",
            duration: { value: 328.4, unit: "ms", raw: 328398400 }
          },
          firstDataSeenTime: "2023-02-13T07:07:23.072651Z",
          p50: { value: 2.67, unit: "ms", raw: 2674850 },
          p95: { value: 306.8, unit: "ms", raw: 306803699.9999999 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "OwnerRepository.findPetTypes",
            displayName: "OwnerRepository.findPetTypes",
            instrumentationLibrary: "io.opentelemetry.spring-data-1.8",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-data-1.8$_$OwnerRepository.findPetTypes",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$findPetTypes",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$findPetTypes"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 612.8, unit: "μs", raw: 612800 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 2.14,
                unit: "ms",
                raw: 2137289.999999998
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D5FDB2CD950C02FB8D321F8A5F140DA8",
            spanId: "FA8A6A6C9E1E27F3",
            startTime: "2023-02-23T10:14:42.750884Z",
            duration: { value: 1.2, unit: "ms", raw: 1203700 }
          },
          firstDataSeenTime: "2023-02-13T16:19:01.235432Z",
          p50: { value: 612.8, unit: "μs", raw: 612800 },
          p95: { value: 2.14, unit: "ms", raw: 2137289.999999998 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "OwnerRepository.save",
            displayName: "OwnerRepository.save",
            instrumentationLibrary: "io.opentelemetry.spring-data-1.8",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-data-1.8$_$OwnerRepository.save",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$save",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerRepository$_$save"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 69.9, unit: "ms", raw: 69903200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 83.2, unit: "ms", raw: 83200300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "7C010267FE7E9D263390167B0A1F4AA1",
            spanId: "B60B6B0C2FD1182F",
            startTime: "2023-03-02T06:52:50.967736Z",
            duration: { value: 83.2, unit: "ms", raw: 83200300 }
          },
          firstDataSeenTime: "2023-02-13T16:12:02.113591Z",
          p50: { value: 69.9, unit: "ms", raw: 69903200 },
          p95: { value: 83.2, unit: "ms", raw: 83200300 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "VetRepository.findAll",
            displayName: "VetRepository.findAll",
            instrumentationLibrary: "io.opentelemetry.spring-data-1.8",
            spanCodeObjectId:
              "span:io.opentelemetry.spring-data-1.8$_$VetRepository.findAll",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.vet.VetRepository$_$findAll",
            kind: "Internal",
            codeObjectId:
              "org.springframework.samples.petclinic.vet.VetRepository$_$findAll"
          },
          assetType: "CodeLocation",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 204.42, unit: "ms", raw: 204420400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 333.16, unit: "ms", raw: 333157700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "BC680B295E7DC96D7F8B89846DFFA8FD",
            spanId: "0CEE4ECEC62EDAA0",
            startTime: "2023-02-20T14:35:52.612479Z",
            duration: { value: 204.42, unit: "ms", raw: 204420400 }
          },
          firstDataSeenTime: "2023-02-13T07:07:22.377472Z",
          p50: { value: 204.42, unit: "ms", raw: 204420400 },
          p95: { value: 333.16, unit: "ms", raw: 333157700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "007DF874E45C1E05F134AE1043DB03",
            displayName:
              "CREATE TABLE owners ( id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, first_name VARCHAR(?), last_name VARCHAR_IGNORECASE(?), address VARCHAR(?), city VARCHAR(?), telephone VARCHAR(?) )",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$007DF874E45C1E05F134AE1043DB03",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 520.4, unit: "μs", raw: 520400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 846.1, unit: "μs", raw: 846100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "92F1508C1998C2C5B4898E9958739E6C",
            spanId: "0B6AAF0ED9D6F951",
            startTime: "2023-03-06T07:08:46.060077Z",
            duration: { value: 846.1, unit: "μs", raw: 846100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.351904Z",
          p50: { value: 520.4, unit: "μs", raw: 520400 },
          p95: { value: 846.1, unit: "μs", raw: 846100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "05C9C7B89B57A0AE9B6A0E90CB3946",
            displayName: "DROP TABLE types IF EXISTS",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$05C9C7B89B57A0AE9B6A0E90CB3946",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 60.5, unit: "μs", raw: 60500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 64.7, unit: "μs", raw: 64700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "F9319E12668007A66639388F2187578A",
            spanId: "996AB9193CC5D4B6",
            startTime: "2023-03-06T07:08:46.017076Z",
            duration: { value: 60.5, unit: "μs", raw: 60500 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.461837Z",
          p50: { value: 60.5, unit: "μs", raw: 60500 },
          p95: { value: 64.7, unit: "μs", raw: 64700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "08142BF8A14BC6F67DEAE586A9ACA0",
            displayName: "CREATE INDEX owners_last_name ON owners (last_name)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$08142BF8A14BC6F67DEAE586A9ACA0",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 379.9, unit: "μs", raw: 379900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 395.1, unit: "μs", raw: 395100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6E7C225E73A61362BF6FC2AEF3510F5B",
            spanId: "15DFCCDA6FB6961B",
            startTime: "2023-03-06T07:08:46.061073Z",
            duration: { value: 395.1, unit: "μs", raw: 395100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.298036Z",
          p50: { value: 379.9, unit: "μs", raw: 379900 },
          p95: { value: 395.1, unit: "μs", raw: 395100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "0D787B79CE351D79DBF49560C82B25",
            displayName: "INSERT INTO vet_specialties VALUES (?, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$0D787B79CE351D79DBF49560C82B25",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 560.6, unit: "μs", raw: 560600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 965.4, unit: "μs", raw: 965400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B59E5514EA6D8ED520318F6E8D0C7245",
            spanId: "37EB5AC06E4C0B3D",
            startTime: "2023-03-06T07:08:46.084074Z",
            duration: { value: 167.8, unit: "μs", raw: 167800 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.422556Z",
          p50: { value: 560.6, unit: "μs", raw: 560600 },
          p95: { value: 965.4, unit: "μs", raw: 965400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "205617BE47BC6B8E5717B7438B9D90",
            displayName: "INSERT INTO vets VALUES (default, ?, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$205617BE47BC6B8E5717B7438B9D90",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 274.6, unit: "μs", raw: 274600 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 6.66,
                unit: "ms",
                raw: 6657069.999999998
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "5F4469C46EACBBF35A8CF2E2F77ED6D4",
            spanId: "BC2D80E62BF21F25",
            startTime: "2023-03-06T07:08:46.078073Z",
            duration: { value: 163.9, unit: "μs", raw: 163900 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.31195Z",
          p50: { value: 274.6, unit: "μs", raw: 274600 },
          p95: { value: 6.66, unit: "ms", raw: 6657069.999999998 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "23BB873294C340159BEF76CCAD2C1F",
            displayName:
              "select v1_0.pet_id,v1_0.id,v1_0.visit_date,v1_0.description from visits v1_0 where v1_0.pet_id=? order by v1_0.visit_date asc",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$23BB873294C340159BEF76CCAD2C1F",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 74.55, unit: "μs", raw: 74550 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 135.48,
                unit: "μs",
                raw: 135479.99999999988
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "636B1445A97917C5",
            startTime: "2023-03-02T06:52:51.064224Z",
            duration: { value: 55.1, unit: "μs", raw: 55100 }
          },
          firstDataSeenTime: "2023-02-16T08:27:07.376175Z",
          p50: { value: 74.55, unit: "μs", raw: 74550 },
          p95: { value: 135.48, unit: "μs", raw: 135479.99999999988 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "27B744BF68FEE5695939D1DBA212A2",
            displayName: "DROP TABLE specialties IF EXISTS",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$27B744BF68FEE5695939D1DBA212A2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 70.6, unit: "μs", raw: 70600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 248.8, unit: "μs", raw: 248800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "9A36FEFA2BA48584BD7AF35E6BC2DE99",
            spanId: "1BAC438C33062A0D",
            startTime: "2023-03-06T07:08:46.016074Z",
            duration: { value: 248.8, unit: "μs", raw: 248800 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.307346Z",
          p50: { value: 70.6, unit: "μs", raw: 70600 },
          p95: { value: 248.8, unit: "μs", raw: 248800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "291068DCA6EDE70AF59A8F83F6A9C1",
            displayName:
              "select p1_0.id,p1_0.name from types p1_0 order by p1_0.name",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$291068DCA6EDE70AF59A8F83F6A9C1",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 44.8, unit: "μs", raw: 44800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 140.15, unit: "μs", raw: 140150 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D5FDB2CD950C02FB8D321F8A5F140DA8",
            spanId: "97E5799E804E919E",
            startTime: "2023-02-23T10:14:42.751421Z",
            duration: { value: 104.2, unit: "μs", raw: 104200 }
          },
          firstDataSeenTime: "2023-02-23T10:15:05.006513Z",
          p50: { value: 44.8, unit: "μs", raw: 44800 },
          p95: { value: 140.15, unit: "μs", raw: 140150 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "2CCE8923ACB8F631BD062C515BDD98",
            displayName:
              "insert into visits (id, visit_date, description) values (default, ?, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$2CCE8923ACB8F631BD062C515BDD98",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 767, unit: "μs", raw: 767000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.39, unit: "ms", raw: 1386100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-13T16:19:01.446266Z",
          p50: { value: 767, unit: "μs", raw: 767000 },
          p95: { value: 1.39, unit: "ms", raw: 1386100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "2D536BBE7C9932AC5924078C3F0FC1",
            displayName:
              "ALTER TABLE pets ADD CONSTRAINT fk_pets_types FOREIGN KEY (type_id) REFERENCES types (id)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$2D536BBE7C9932AC5924078C3F0FC1",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.11, unit: "ms", raw: 1114800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.72, unit: "ms", raw: 1722400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "F5F814DC6C5FD797B90C51CA78464C43",
            spanId: "534DBD8C222D5F80",
            startTime: "2023-03-06T07:08:46.064074Z",
            duration: { value: 685.7, unit: "μs", raw: 685700 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.426997Z",
          p50: { value: 1.11, unit: "ms", raw: 1114800 },
          p95: { value: 1.72, unit: "ms", raw: 1722400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "363A0BFA8B0625F085E77C3EDD9449",
            displayName: "INSERT INTO pets VALUES (default, ?, ?, ?, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$363A0BFA8B0625F085E77C3EDD9449",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 217.5, unit: "μs", raw: 217500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.17, unit: "ms", raw: 1167800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D90B895B8ABFD56682F8C2609B8E6D1F",
            spanId: "66D5A5FBED07C859",
            startTime: "2023-03-06T07:08:46.093076Z",
            duration: { value: 186.1, unit: "μs", raw: 186100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.378566Z",
          p50: { value: 217.5, unit: "μs", raw: 217500 },
          p95: { value: 1.17, unit: "ms", raw: 1167800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "36B5A71D6911744EBF573284988A34",
            displayName:
              "CREATE TABLE pets ( id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, name VARCHAR(?), birth_date DATE, type_id INTEGER NOT NULL, owner_id INTEGER )",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$36B5A71D6911744EBF573284988A34",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 476.4, unit: "μs", raw: 476400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 919.7, unit: "μs", raw: 919700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "143335705623EC33519AB3855CE5FB2A",
            spanId: "206B7A0674D61BC6",
            startTime: "2023-03-06T07:08:46.062076Z",
            duration: { value: 476.4, unit: "μs", raw: 476400 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.406044Z",
          p50: { value: 476.4, unit: "μs", raw: 476400 },
          p95: { value: 919.7, unit: "μs", raw: 919700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "389726A59377146136DEF85D0182CD",
            displayName:
              "select count(distinct o1_0.id) from owners o1_0 left join pets p1_0 on o1_0.id=p1_0.owner_id where o1_0.last_name like ?",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$389726A59377146136DEF85D0182CD",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.55, unit: "ms", raw: 3547200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.95, unit: "ms", raw: 3952200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B2093C47D01BB5C913A643A336C24A64",
            spanId: "55FF0BB74FD3748F",
            startTime: "2023-03-02T06:52:45.816375Z",
            duration: { value: 3.95, unit: "ms", raw: 3952200 }
          },
          firstDataSeenTime: "2023-02-16T08:30:02.044561Z",
          p50: { value: 3.55, unit: "ms", raw: 3547200 },
          p95: { value: 3.95, unit: "ms", raw: 3952200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "46C26F0AC3E485A85A7F0632790BA9",
            displayName:
              "ALTER TABLE visits ADD CONSTRAINT fk_visits_pets FOREIGN KEY (pet_id) REFERENCES pets (id)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$46C26F0AC3E485A85A7F0632790BA9",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 990.4, unit: "μs", raw: 990400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.4, unit: "ms", raw: 1403600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "69F5E9ED061540C07E5E3B0773F547E0",
            spanId: "359132435FA64E04",
            startTime: "2023-03-06T07:08:46.067074Z",
            duration: { value: 954.7, unit: "μs", raw: 954700 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.347503Z",
          p50: { value: 990.4, unit: "μs", raw: 990400 },
          p95: { value: 1.4, unit: "ms", raw: 1403600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "50813ED571A52C71EA9F7CE2645461",
            displayName:
              "select p1_0.id,p1_0.name from types p1_0 where p1_0.id=?",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$50813ED571A52C71EA9F7CE2645461",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 68.35, unit: "μs", raw: 68350 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 148.33,
                unit: "μs",
                raw: 148329.99999999974
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "94BC8C78EDBCA90B",
            startTime: "2023-03-02T06:52:51.063838Z",
            duration: { value: 78, unit: "μs", raw: 78000 }
          },
          firstDataSeenTime: "2023-02-16T08:27:07.685381Z",
          p50: { value: 68.35, unit: "μs", raw: 68350 },
          p95: { value: 148.33, unit: "μs", raw: 148329.99999999974 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "5804D4D47053ADB62108A988293D05",
            displayName: "INSERT INTO owners VALUES (default, ?, ?, ?, ?, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$5804D4D47053ADB62108A988293D05",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 177.85, unit: "μs", raw: 177850 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 2.25,
                unit: "ms",
                raw: 2254929.999999999
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "664867663698D14962901B9689F7E0D8",
            spanId: "94FE7B8F151C66A8",
            startTime: "2023-03-06T07:08:46.089076Z",
            duration: { value: 145.5, unit: "μs", raw: 145500 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.343022Z",
          p50: { value: 177.85, unit: "μs", raw: 177850 },
          p95: { value: 2.25, unit: "ms", raw: 2254929.999999999 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "5AB74A81BBC5FEB8B2BE3FA6C1C3A4",
            displayName: "INSERT INTO visits VALUES (default, ?, ?, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$5AB74A81BBC5FEB8B2BE3FA6C1C3A4",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 226.7, unit: "μs", raw: 226700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 951.4, unit: "μs", raw: 951400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D74A0997EB85A1E11FCD90B4AAF0B43C",
            spanId: "EBD38853EDE4B561",
            startTime: "2023-03-06T07:08:46.094073Z",
            duration: { value: 163.1, unit: "μs", raw: 163100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.323157Z",
          p50: { value: 226.7, unit: "μs", raw: 226700 },
          p95: { value: 951.4, unit: "μs", raw: 951400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "5B18C1BE801CD1EF48B1C1394614FD",
            displayName: "DROP TABLE vet_specialties IF EXISTS",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$5B18C1BE801CD1EF48B1C1394614FD",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.31, unit: "ms", raw: 6309800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 7.14, unit: "ms", raw: 7136100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "5C6A361755AD09AE5481FE40D49E33C0",
            spanId: "542C0D1A072EC918",
            startTime: "2023-03-06T07:08:46.006073Z",
            duration: { value: 7.14, unit: "ms", raw: 7136100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.33436Z",
          p50: { value: 6.31, unit: "ms", raw: 6309800 },
          p95: { value: 7.14, unit: "ms", raw: 7136100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "69D3A2688A8AAC078FCB6B86DD5A4A",
            displayName: "CREATE INDEX types_name ON types (name)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$69D3A2688A8AAC078FCB6B86DD5A4A",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 246.7, unit: "μs", raw: 246700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 327.3, unit: "μs", raw: 327300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "A6780AEEC5040A3362A0D7C9441403FB",
            spanId: "DA07656BDB8CEE93",
            startTime: "2023-03-06T07:08:46.060077Z",
            duration: { value: 327.3, unit: "μs", raw: 327300 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.288951Z",
          p50: { value: 246.7, unit: "μs", raw: 246700 },
          p95: { value: 327.3, unit: "μs", raw: 327300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "7063B60DD8CF8A6A0AE1092C6AE37E",
            displayName: "CREATE INDEX specialties_name ON specialties (name)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$7063B60DD8CF8A6A0AE1092C6AE37E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 517.7, unit: "μs", raw: 517700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 854.1, unit: "μs", raw: 854100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "AAD3ADF3778CFADD98AAED0A4276CAD2",
            spanId: "645505182EE91A3D",
            startTime: "2023-03-06T07:08:46.038074Z",
            duration: { value: 240.2, unit: "μs", raw: 240200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.45398Z",
          p50: { value: 517.7, unit: "μs", raw: 517700 },
          p95: { value: 854.1, unit: "μs", raw: 854100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "73313261F19BD6932208147950C8CF",
            displayName:
              "CREATE TABLE specialties ( id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, name VARCHAR(?) )",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$73313261F19BD6932208147950C8CF",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 879.4, unit: "μs", raw: 879400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 916.7, unit: "μs", raw: 916700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "CC60A9929C3EB6EDC951AAB5C43E9D34",
            spanId: "C5A06B3FA306F9C8",
            startTime: "2023-03-06T07:08:46.037074Z",
            duration: { value: 521.8, unit: "μs", raw: 521800 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.374204Z",
          p50: { value: 879.4, unit: "μs", raw: 879400 },
          p95: { value: 916.7, unit: "μs", raw: 916700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "73338606A844036D29416E874DA53C",
            displayName:
              "update owners set address=?, city=?, first_name=?, last_name=?, telephone=? where id=?",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$73338606A844036D29416E874DA53C",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 439, unit: "μs", raw: 439000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 439, unit: "μs", raw: 439000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "7C010267FE7E9D263390167B0A1F4AA1",
            spanId: "C8640B2C5F9CAE4A",
            startTime: "2023-03-02T06:52:51.047154Z",
            duration: { value: 439, unit: "μs", raw: 439000 }
          },
          firstDataSeenTime: "2023-02-16T08:30:02.831764Z",
          p50: { value: 439, unit: "μs", raw: 439000 },
          p95: { value: 439, unit: "μs", raw: 439000 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "7A53C322AB0F9FEEC4FC475C278D8B",
            displayName: "update visits set pet_id=? where id=?",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$7A53C322AB0F9FEEC4FC475C278D8B",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 232.6, unit: "μs", raw: 232600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 304.2, unit: "μs", raw: 304200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-13T16:19:01.504902Z",
          p50: { value: 232.6, unit: "μs", raw: 232600 },
          p95: { value: 304.2, unit: "μs", raw: 304200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "7EF530AFFD5307F51F13832C8610D1",
            displayName:
              "ALTER TABLE vet_specialties ADD CONSTRAINT fk_vet_specialties_vets FOREIGN KEY (vet_id) REFERENCES vets (id)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$7EF530AFFD5307F51F13832C8610D1",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 28.62, unit: "ms", raw: 28617100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 28.65, unit: "ms", raw: 28653300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "486E0185CBD818918F0CAFC8BD3DAA5D",
            spanId: "2DB07A0C717683DC",
            startTime: "2023-03-06T07:08:46.038074Z",
            duration: { value: 19.4, unit: "ms", raw: 19399200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.356781Z",
          p50: { value: 28.62, unit: "ms", raw: 28617100 },
          p95: { value: 28.65, unit: "ms", raw: 28653300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "894402EE80A9B71F195AA68BF9EC7C",
            displayName: "INSERT INTO specialties VALUES (default, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$894402EE80A9B71F195AA68BF9EC7C",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 223.4, unit: "μs", raw: 223400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.28, unit: "ms", raw: 1282600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "340C315683067DD059ED17F19ABB49DB",
            spanId: "4FF595BDD27CDDF1",
            startTime: "2023-03-06T07:08:46.080074Z",
            duration: { value: 1.28, unit: "ms", raw: 1282600 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.400934Z",
          p50: { value: 223.4, unit: "μs", raw: 223400 },
          p95: { value: 1.28, unit: "ms", raw: 1282600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "90D9EEA03C5CB723081CD5BE6048A5",
            displayName: "CREATE INDEX vets_last_name ON vets (last_name)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$90D9EEA03C5CB723081CD5BE6048A5",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.85, unit: "ms", raw: 1850500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.34, unit: "ms", raw: 2335400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "81D1F408A2F241B25AFF0E442F2E874F",
            spanId: "83DE452B713EE89A",
            startTime: "2023-03-06T07:08:46.035077Z",
            duration: { value: 2.34, unit: "ms", raw: 2335400 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.276227Z",
          p50: { value: 1.85, unit: "ms", raw: 1850500 },
          p95: { value: 2.34, unit: "ms", raw: 2335400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "951AF8D6E54DD2BD2251A748E035DF",
            displayName:
              "select o1_0.id,o1_0.address,o1_0.city,o1_0.first_name,o1_0.last_name,p1_0.owner_id,p1_0.id,p1_0.birth_date,p1_0.name,p1_0.type_id,o1_0.telephone from owners o1_0 left join pets p1_0 on o1_0.id=p1_0.owner_id where o1_0.id=? order by p1_0.name",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$951AF8D6E54DD2BD2251A748E035DF",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 143.15, unit: "μs", raw: 143150 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 271.26,
                unit: "μs",
                raw: 271260.00000000006
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "96654BE0388D0B84",
            startTime: "2023-03-02T06:52:51.065894Z",
            duration: { value: 73, unit: "μs", raw: 73000 }
          },
          firstDataSeenTime: "2023-02-16T08:27:07.633004Z",
          p50: { value: 143.15, unit: "μs", raw: 143150 },
          p95: { value: 271.26, unit: "μs", raw: 271260.00000000006 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "9BA89848B25025A9B23E8DA70A0A53",
            displayName:
              "ALTER TABLE pets ADD CONSTRAINT fk_pets_owners FOREIGN KEY (owner_id) REFERENCES owners (id)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$9BA89848B25025A9B23E8DA70A0A53",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.31, unit: "ms", raw: 1306700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.09, unit: "ms", raw: 2086700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "50E12641047CF375C3631D3F4E5BE0A7",
            spanId: "164450A91B71A07C",
            startTime: "2023-03-06T07:08:46.062076Z",
            duration: { value: 973.5, unit: "μs", raw: 973500 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.410684Z",
          p50: { value: 1.31, unit: "ms", raw: 1306700 },
          p95: { value: 2.09, unit: "ms", raw: 2086700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "9F2BEB6800D920DAF4DD00A23C2DA5",
            displayName:
              "select s1_0.vet_id,s1_1.id,s1_1.name from vet_specialties s1_0 join specialties s1_1 on s1_1.id=s1_0.specialty_id where s1_0.vet_id=?",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$9F2BEB6800D920DAF4DD00A23C2DA5",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 197.6, unit: "μs", raw: 197600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 352.7, unit: "μs", raw: 352700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "BC680B295E7DC96D7F8B89846DFFA8FD",
            spanId: "4F7CE0483B355380",
            startTime: "2023-02-20T14:35:52.79932Z",
            duration: { value: 66.1, unit: "μs", raw: 66100 }
          },
          firstDataSeenTime: "2023-02-16T08:27:05.694814Z",
          p50: { value: 197.6, unit: "μs", raw: 197600 },
          p95: { value: 352.7, unit: "μs", raw: 352700 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "9FA5EE4CBE7B619CC989600EB7B783",
            displayName:
              "select distinct o1_0.id,o1_0.address,o1_0.city,o1_0.first_name,o1_0.last_name,o1_0.telephone from owners o1_0 left join pets p1_0 on o1_0.id=p1_0.owner_id where o1_0.last_name like ? offset ? rows fetch first ? rows only",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$9FA5EE4CBE7B619CC989600EB7B783",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 468.45, unit: "μs", raw: 468450 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 11.54,
                unit: "ms",
                raw: 11540199.999999994
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B2093C47D01BB5C913A643A336C24A64",
            spanId: "D061B0BE46A3C5A5",
            startTime: "2023-03-02T06:52:45.725563Z",
            duration: { value: 12.81, unit: "ms", raw: 12812100 }
          },
          firstDataSeenTime: "2023-02-16T08:27:06.830343Z",
          p50: { value: 468.45, unit: "μs", raw: 468450 },
          p95: { value: 11.54, unit: "ms", raw: 11540199.999999994 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "A4C400C0AB3166AD976C5720D83FE7",
            displayName:
              "CREATE TABLE visits ( id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, pet_id INTEGER, visit_date DATE, description VARCHAR(?) )",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$A4C400C0AB3166AD976C5720D83FE7",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.92, unit: "ms", raw: 1923200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.18, unit: "ms", raw: 2178100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "394E97A8065F4AEF7821A9AB53BD7851",
            spanId: "F7FF501C5C2569DB",
            startTime: "2023-03-06T07:08:46.065076Z",
            duration: { value: 1.92, unit: "ms", raw: 1923200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.365212Z",
          p50: { value: 1.92, unit: "ms", raw: 1923200 },
          p95: { value: 2.18, unit: "ms", raw: 2178100 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "AB6C324253C8B40DDB0F1EC3EA2C0A",
            displayName: "INSERT INTO types VALUES (default, ?)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$AB6C324253C8B40DDB0F1EC3EA2C0A",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 209.9, unit: "μs", raw: 209900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 564.9, unit: "μs", raw: 564900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "869F1C396CF916C411848355C97CAB34",
            spanId: "FC609C1660F28107",
            startTime: "2023-03-06T07:08:46.085074Z",
            duration: { value: 138.1, unit: "μs", raw: 138100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.396619Z",
          p50: { value: 209.9, unit: "μs", raw: 209900 },
          p95: { value: 564.9, unit: "μs", raw: 564900 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "AE7998EC6F495A4E12246828759D8E",
            displayName:
              "select p1_0.owner_id,p1_0.id,p1_0.birth_date,p1_0.name,t1_0.id,t1_0.name,v1_0.pet_id,v1_0.id,v1_0.visit_date,v1_0.description from pets p1_0 left join types t1_0 on t1_0.id=p1_0.type_id left join visits v1_0 on p1_0.id=v1_0.pet_id where p1_0.owner_id=? order by v1_0.visit_date asc,p1_0.name",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$AE7998EC6F495A4E12246828759D8E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 135.75, unit: "μs", raw: 135750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 211.6, unit: "μs", raw: 211600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B2093C47D01BB5C913A643A336C24A64",
            spanId: "EF315AB38D41C402",
            startTime: "2023-03-02T06:52:45.804784Z",
            duration: { value: 95.7, unit: "μs", raw: 95700 }
          },
          firstDataSeenTime: "2023-02-16T08:27:06.374428Z",
          p50: { value: 135.75, unit: "μs", raw: 135750 },
          p95: { value: 211.6, unit: "μs", raw: 211600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "AEA1A86AB3817FE9E0A0B6069C1DEA",
            displayName:
              "ALTER TABLE vet_specialties ADD CONSTRAINT fk_vet_specialties_specialties FOREIGN KEY (specialty_id) REFERENCES specialties (id)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$AEA1A86AB3817FE9E0A0B6069C1DEA",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.04, unit: "ms", raw: 1041400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.19, unit: "ms", raw: 1187000 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "85C1DAE6E7380830F51520DAF16B05D0",
            spanId: "8577DF3122BDD6E4",
            startTime: "2023-03-06T07:08:46.058078Z",
            duration: { value: 1.19, unit: "ms", raw: 1187000 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.302213Z",
          p50: { value: 1.04, unit: "ms", raw: 1041400 },
          p95: { value: 1.19, unit: "ms", raw: 1187000 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B364D64DDE25A98AF8348B22035D14",
            displayName: "DROP TABLE visits IF EXISTS",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$B364D64DDE25A98AF8348B22035D14",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 58.3, unit: "μs", raw: 58300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 118.4, unit: "μs", raw: 118400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B87CCE27BDFCAFDB29E71AABA17ECAAE",
            spanId: "772AFDC743EBCE2B",
            startTime: "2023-03-06T07:08:46.016074Z",
            duration: { value: 118.4, unit: "μs", raw: 118400 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.284684Z",
          p50: { value: 58.3, unit: "μs", raw: 58300 },
          p95: { value: 118.4, unit: "μs", raw: 118400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "B4A7182CF2CF3E2A43CE66A047FE7F",
            displayName:
              "select v1_0.id,v1_0.first_name,v1_0.last_name from vets v1_0 offset ? rows fetch first ? rows only",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$B4A7182CF2CF3E2A43CE66A047FE7F",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.13, unit: "ms", raw: 5126000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 12.15, unit: "ms", raw: 12148600 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "BC680B295E7DC96D7F8B89846DFFA8FD",
            spanId: "533BBEF45FB99AC3",
            startTime: "2023-02-20T14:35:52.751535Z",
            duration: { value: 5.1, unit: "ms", raw: 5097300 }
          },
          firstDataSeenTime: "2023-02-16T08:27:05.679272Z",
          p50: { value: 5.13, unit: "ms", raw: 5126000 },
          p95: { value: 12.15, unit: "ms", raw: 12148600 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "CAF570C57328062538B7BCD3C0FA05",
            displayName: "select count(v1_0.id) from vets v1_0",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$CAF570C57328062538B7BCD3C0FA05",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 153.25, unit: "μs", raw: 153250 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 219.4, unit: "μs", raw: 219400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "BC680B295E7DC96D7F8B89846DFFA8FD",
            spanId: "D4EC95EEB8CB2884",
            startTime: "2023-02-20T14:35:52.810975Z",
            duration: { value: 131.1, unit: "μs", raw: 131100 }
          },
          firstDataSeenTime: "2023-02-16T08:27:05.868021Z",
          p50: { value: 153.25, unit: "μs", raw: 153250 },
          p95: { value: 219.4, unit: "μs", raw: 219400 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "CE14CF96B7825D7804C871644FA5E2",
            displayName: "CREATE INDEX visits_pet_id ON visits (pet_id)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$CE14CF96B7825D7804C871644FA5E2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 324.8, unit: "μs", raw: 324800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 400.3, unit: "μs", raw: 400300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B01B561A68EA8B94DF51A7423AAC5550",
            spanId: "CAE670EE6BAF7386",
            startTime: "2023-03-06T07:08:46.068073Z",
            duration: { value: 285.2, unit: "μs", raw: 285200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.44784Z",
          p50: { value: 324.8, unit: "μs", raw: 324800 },
          p95: { value: 400.3, unit: "μs", raw: 400300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "CEFA05385BB45F44396C33201F9A4E",
            displayName: "CREATE INDEX pets_name ON pets (name)",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$CEFA05385BB45F44396C33201F9A4E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 280.3, unit: "μs", raw: 280300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 448.2, unit: "μs", raw: 448200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "1EAEC5DC2AF71D08517FB8230C7DE44E",
            spanId: "84612268E5AAE932",
            startTime: "2023-03-06T07:08:46.064074Z",
            duration: { value: 223.8, unit: "μs", raw: 223800 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.318361Z",
          p50: { value: 280.3, unit: "μs", raw: 280300 },
          p95: { value: 448.2, unit: "μs", raw: 448200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "CF8E4B064DF22031B2D419571F4B18",
            displayName: "DROP TABLE vets IF EXISTS",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$CF8E4B064DF22031B2D419571F4B18",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 153.2, unit: "μs", raw: 153200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 195.3, unit: "μs", raw: 195300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "26C3D3AC7383D7A73ECFCB4514197BF9",
            spanId: "1E6FFA3534755036",
            startTime: "2023-03-06T07:08:46.015074Z",
            duration: { value: 195.3, unit: "μs", raw: 195300 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.369657Z",
          p50: { value: 153.2, unit: "μs", raw: 153200 },
          p95: { value: 195.3, unit: "μs", raw: 195300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "D5012324920CCB84DA0BEA319E1DDC",
            displayName: "DROP TABLE owners IF EXISTS",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$D5012324920CCB84DA0BEA319E1DDC",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 87.2, unit: "μs", raw: 87200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 140.3, unit: "μs", raw: 140300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "867FFCCD8640EC2C55DC570ABB7096D9",
            spanId: "41C4B876047CBCCB",
            startTime: "2023-03-06T07:08:46.017076Z",
            duration: { value: 140.3, unit: "μs", raw: 140300 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.416719Z",
          p50: { value: 87.2, unit: "μs", raw: 87200 },
          p95: { value: 140.3, unit: "μs", raw: 140300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "D8A7C43229DB0444288DF077567EC3",
            displayName:
              "CREATE TABLE vets ( id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, first_name VARCHAR(?), last_name VARCHAR(?) )",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$D8A7C43229DB0444288DF077567EC3",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 17.4, unit: "ms", raw: 17397100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 17.42, unit: "ms", raw: 17420800 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "7455BECE110609772E4FB0E38A9DCB49",
            spanId: "D69F1168BEF04B3F",
            startTime: "2023-03-06T07:08:46.017076Z",
            duration: { value: 17.4, unit: "ms", raw: 17397100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.330046Z",
          p50: { value: 17.4, unit: "ms", raw: 17397100 },
          p95: { value: 17.42, unit: "ms", raw: 17420800 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "D956E32AFCF40E2473BDD37083D7C2",
            displayName:
              "CREATE TABLE vet_specialties ( vet_id INTEGER NOT NULL, specialty_id INTEGER NOT NULL )",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$D956E32AFCF40E2473BDD37083D7C2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 474, unit: "μs", raw: 474000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 643.3, unit: "μs", raw: 643300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "B3B0D5B5FD899C498A8AF347753028E3",
            spanId: "09D8FDB264A601B7",
            startTime: "2023-03-06T07:08:46.038074Z",
            duration: { value: 227.6, unit: "μs", raw: 227600 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.386387Z",
          p50: { value: 474, unit: "μs", raw: 474000 },
          p95: { value: 643.3, unit: "μs", raw: 643300 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "E3ECB78419CD703AB3D5732430ED0E",
            displayName:
              "CREATE TABLE types ( id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, name VARCHAR(?) )",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$E3ECB78419CD703AB3D5732430ED0E",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 576.6, unit: "μs", raw: 576600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 701.2, unit: "μs", raw: 701200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "96B8D78075A561955B62A1CA63F943D1",
            spanId: "D4706FB31C3A2225",
            startTime: "2023-03-06T07:08:46.059078Z",
            duration: { value: 701.2, unit: "μs", raw: 701200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.392308Z",
          p50: { value: 576.6, unit: "μs", raw: 576600 },
          p95: { value: 701.2, unit: "μs", raw: 701200 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "EB78B880C1E050C5884CE3A153F72A",
            displayName:
              "update pets set birth_date=?, name=?, type_id=? where id=?",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$EB78B880C1E050C5884CE3A153F72A",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 324.85, unit: "μs", raw: 324850 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 417.9, unit: "μs", raw: 417900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "D5FDB2CD950C02FB8D321F8A5F140DA8",
            spanId: "E3F9E1D46EF6D9C8",
            startTime: "2023-02-23T10:14:42.80608Z",
            duration: { value: 417.9, unit: "μs", raw: 417900 }
          },
          firstDataSeenTime: "2023-02-23T10:15:05.211791Z",
          p50: { value: 324.85, unit: "μs", raw: 324850 },
          p95: { value: 417.9, unit: "μs", raw: 417900 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "ECA737040FACCB53A072B5A1B0AA50",
            displayName: "DROP TABLE pets IF EXISTS",
            instrumentationLibrary: "io.opentelemetry.jdbc",
            spanCodeObjectId:
              "span:io.opentelemetry.jdbc$_$ECA737040FACCB53A072B5A1B0AA50",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 93.3, unit: "μs", raw: 93300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 105.5, unit: "μs", raw: 105500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "F83B96532F23FB288FF8636491D1F072",
            spanId: "54DB4BE86E3F4C09",
            startTime: "2023-03-06T07:08:46.016074Z",
            duration: { value: 105.5, unit: "μs", raw: 105500 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.267346Z",
          p50: { value: 93.3, unit: "μs", raw: 93300 },
          p95: { value: 105.5, unit: "μs", raw: 105500 }
        },
        {
          span: {
            classification: "DatabaseClient",
            role: "Internal",
            name: "20B89DBD2F38BF8AD50269EDE088D2",
            displayName: "select * from users where id = :id",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId:
              "span:SampleInsightsController$_$20B89DBD2F38BF8AD50269EDE088D2",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "DatabaseQueries",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 650, unit: "ns", raw: 650 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 111.83,
                unit: "μs",
                raw: 111829.99999999971
              }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "789B4D6769D5C94EA56D05FD9A741780",
            spanId: "0960EE6F8EBBF76F",
            startTime: "2023-02-20T14:36:00.348156Z",
            duration: { value: 200, unit: "ns", raw: 200 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.969084Z",
          p50: { value: 650, unit: "ns", raw: 650 },
          p95: { value: 111.83, unit: "μs", raw: 111829.99999999971 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST /owners/{ownerId}/edit",
            displayName: "HTTP POST /owners/{ownerId}/edit",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP POST /owners/{ownerId}/edit",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$processUpdateOwnerForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$processUpdateOwnerForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST /owners/{ownerId}/edit",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 141.18, unit: "ms", raw: 141178400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 141.18, unit: "ms", raw: 141178400 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "7C010267FE7E9D263390167B0A1F4AA1",
            spanId: "39AE0AA2B5591FFF",
            startTime: "2023-03-02T06:52:50.916629Z",
            duration: { value: 141.18, unit: "ms", raw: 141178400 }
          },
          firstDataSeenTime: "2023-02-13T16:12:02.145526Z",
          p50: { value: 141.18, unit: "ms", raw: 141178400 },
          p95: { value: 141.18, unit: "ms", raw: 141178400 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST /owners/{ownerId}/pets/{petId}/edit",
            displayName: "HTTP POST /owners/{ownerId}/pets/{petId}/edit",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP POST /owners/{ownerId}/pets/{petId}/edit",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.PetController$_$processUpdateForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.PetController$_$processUpdateForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST /owners/{ownerId}/pets/{petId}/edit",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 46.52, unit: "ms", raw: 46517400 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 77.29, unit: "ms", raw: 77292100 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "D5FDB2CD950C02FB8D321F8A5F140DA8",
            spanId: "822ED8AA4F3178BD",
            startTime: "2023-02-23T10:14:42.737818Z",
            duration: { value: 77.29, unit: "ms", raw: 77292100 }
          },
          firstDataSeenTime: "2023-02-13T16:19:01.5181Z",
          p50: { value: 46.52, unit: "ms", raw: 46517400 },
          p95: { value: 77.29, unit: "ms", raw: 77292100 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/ErrorRecordedOnLocalRootSpan",
            displayName:
              "HTTP GET /SampleInsights/ErrorRecordedOnLocalRootSpan",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/ErrorRecordedOnLocalRootSpan",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorRecordedOnLocalRootSpan",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorRecordedOnLocalRootSpan"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/ErrorRecordedOnLocalRootSpan",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 804.65, unit: "μs", raw: 804649.5 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 62.47,
                unit: "ms",
                raw: 62466300.59999996
              }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "3142058FA4A9494F082AE685002B0EA7",
            spanId: "833B31BB84D62E80",
            startTime: "2023-02-20T14:36:03.480951Z",
            duration: { value: 1.28, unit: "ms", raw: 1285000 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.102392Z",
          p50: { value: 804.65, unit: "μs", raw: 804649.5 },
          p95: { value: 62.47, unit: "ms", raw: 62466300.59999996 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /owners/find",
            displayName: "HTTP GET /owners/find",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /owners/find",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$initFindForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$initFindForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /owners/find",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 52.33, unit: "ms", raw: 52330900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 54.17, unit: "ms", raw: 54167400 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "C39F6F7729289BF23E0B65CA90ED9B09",
            spanId: "9A92782D2E7FF6EF",
            startTime: "2023-03-06T07:09:05.321161Z",
            duration: { value: 54.17, unit: "ms", raw: 54167400 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.477505Z",
          p50: { value: 52.33, unit: "ms", raw: 52330900 },
          p95: { value: 54.17, unit: "ms", raw: 54167400 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/SlowEndpoint",
            displayName: "HTTP GET /SampleInsights/SlowEndpoint",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/SlowEndpoint",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genSlowEndpoint",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genSlowEndpoint"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/SlowEndpoint",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.51, unit: "sec", raw: 2505480500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.52, unit: "sec", raw: 2519560270 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "19BAED3FEE6AA1102BC35E2E146EA532",
            spanId: "7FDABAA07A6A53E7",
            startTime: "2023-02-20T14:35:54.730619Z",
            duration: { value: 2.51, unit: "sec", raw: 2514413800 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.108127Z",
          p50: { value: 2.51, unit: "sec", raw: 2505480500 },
          p95: { value: 2.52, unit: "sec", raw: 2519560270 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/req-map-get",
            displayName: "HTTP GET /SampleInsights/req-map-get",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/req-map-get",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$reqMapOfGet",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$reqMapOfGet"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/req-map-get",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 588.35, unit: "μs", raw: 588350 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 1.72,
                unit: "ms",
                raw: 1722029.9999999977
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "AB355E5A614509A71145AC8364B1C859",
            spanId: "AA0D3F91D9FDE8F0",
            startTime: "2023-02-20T14:36:03.446642Z",
            duration: { value: 806.4, unit: "μs", raw: 806400 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.123385Z",
          p50: { value: 588.35, unit: "μs", raw: 588350 },
          p95: { value: 1.72, unit: "ms", raw: 1722029.9999999977 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /owners",
            displayName: "HTTP GET /owners",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /owners",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$processFindForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$processFindForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /owners",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 11.9, unit: "ms", raw: 11898400 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 383.2,
                unit: "ms",
                raw: 383195119.9999999
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "HTTP GET /owners",
                subtitle: "1 spans",
                description: "63% SELECT 281.67 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "B2093C47D01BB5C913A643A336C24A64",
            spanId: "D38E1021C267B160",
            startTime: "2023-03-02T06:52:45.471737Z",
            duration: { value: 412.79, unit: "ms", raw: 412787500 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.062257Z",
          p50: { value: 11.9, unit: "ms", raw: 11898400 },
          p95: { value: 383.2, unit: "ms", raw: 383195119.9999999 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /owners/{ownerId}/pets/{petId}/edit",
            displayName: "HTTP GET /owners/{ownerId}/pets/{petId}/edit",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /owners/{ownerId}/pets/{petId}/edit",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.PetController$_$initUpdateForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.PetController$_$initUpdateForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /owners/{ownerId}/pets/{petId}/edit",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 47.82, unit: "ms", raw: 47817250 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 56.85, unit: "ms", raw: 56849800 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "8AF91511A96875A5F6BCE32FA4324B73",
            spanId: "3CE01E8A040476B8",
            startTime: "2023-02-23T10:14:36.32717Z",
            duration: { value: 56.85, unit: "ms", raw: 56849800 }
          },
          firstDataSeenTime: "2023-02-13T16:18:03.467188Z",
          p50: { value: 47.82, unit: "ms", raw: 47817250 },
          p95: { value: 56.85, unit: "ms", raw: 56849800 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /",
            displayName: "HTTP GET /",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId: "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.system.WelcomeController$_$welcome",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.system.WelcomeController$_$welcome"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 677.26, unit: "ms", raw: 677255100 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 936.5, unit: "ms", raw: 936497100 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "HTTP GET /",
                subtitle: "1 spans",
                description: "81% Render welcome 761.45 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "5BDFCF4BCC9139130DFD08CC85EA82DE",
            spanId: "FB17057214869573",
            startTime: "2023-03-06T07:09:03.102161Z",
            duration: { value: 936.5, unit: "ms", raw: 936497100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.507901Z",
          p50: { value: 677.26, unit: "ms", raw: 677255100 },
          p95: { value: 936.5, unit: "ms", raw: 936497100 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/ErrorRecordedOnCurrentSpan",
            displayName: "HTTP GET /SampleInsights/ErrorRecordedOnCurrentSpan",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/ErrorRecordedOnCurrentSpan",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorRecordedOnCurrentSpan",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorRecordedOnCurrentSpan"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/ErrorRecordedOnCurrentSpan",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 701.45, unit: "μs", raw: 701450 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 4.58,
                unit: "ms",
                raw: 4582079.999999991
              }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "F671EEF7BFBED18EE384DBD330143211",
            spanId: "3BB5955B7C84B2B7",
            startTime: "2023-02-20T14:36:03.485038Z",
            duration: { value: 923.2, unit: "μs", raw: 923200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.096769Z",
          p50: { value: 701.45, unit: "μs", raw: 701450 },
          p95: { value: 4.58, unit: "ms", raw: 4582079.999999991 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /owners/new",
            displayName: "HTTP GET /owners/new",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /owners/new",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$initCreationForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$initCreationForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /owners/new",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 9.94, unit: "ms", raw: 9937600 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 21.62,
                unit: "ms",
                raw: 21623769.99999999
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "4B52C59A13E4621D22D6B70F0B698D96",
            spanId: "4C3328A6E5813B1E",
            startTime: "2023-02-20T14:35:54.525464Z",
            duration: { value: 12.93, unit: "ms", raw: 12932800 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.053708Z",
          p50: { value: 9.94, unit: "ms", raw: 9937600 },
          p95: { value: 21.62, unit: "ms", raw: 21623769.99999999 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/HighUsage",
            displayName: "HTTP GET /SampleInsights/HighUsage",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/HighUsage",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genHighUsage",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genHighUsage"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/HighUsage",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: {
                value: 6.79,
                unit: "ms",
                raw: 6792058.163265306
              }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 14.97,
                unit: "ms",
                raw: 14973722.222222222
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "7D8D1D0DA6CB3ABC39D16A067AF98AE1",
            spanId: "8274DCA914D84C39",
            startTime: "2023-02-20T14:36:03.437033Z",
            duration: { value: 7.5, unit: "ms", raw: 7500000 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.1051Z",
          p50: { value: 6.79, unit: "ms", raw: 6792058.163265306 },
          p95: { value: 14.97, unit: "ms", raw: 14973722.222222222 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /owners/{ownerId}/edit",
            displayName: "HTTP GET /owners/{ownerId}/edit",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /owners/{ownerId}/edit",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$initUpdateOwnerForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$initUpdateOwnerForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /owners/{ownerId}/edit",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 14.14, unit: "ms", raw: 14136200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 44.87, unit: "ms", raw: 44870600 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "03CE65EF63A651A61E89F3EDB44656C2",
            spanId: "5EFD9F19A5EB2634",
            startTime: "2023-03-02T06:52:48.360624Z",
            duration: { value: 44.87, unit: "ms", raw: 44870600 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.059306Z",
          p50: { value: 14.14, unit: "ms", raw: 14136200 },
          p95: { value: 44.87, unit: "ms", raw: 44870600 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /**",
            displayName: "HTTP GET /**",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /**",
            methodCodeObjectId: "",
            kind: "Server",
            codeObjectId: ""
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /**",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.65, unit: "ms", raw: 7645400 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 24.47,
                unit: "ms",
                raw: 24465239.999999985
              }
            }
          ],
          insights: [
            {
              type: "HighUsage",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "51CC24368E541B6A9FD48E2BE4FC6CEC",
            spanId: "14E7E2574683D678",
            startTime: "2023-03-06T07:09:04.223413Z",
            duration: { value: 6.92, unit: "ms", raw: 6924100 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.36101Z",
          p50: { value: 7.65, unit: "ms", raw: 7645400 },
          p95: { value: 24.47, unit: "ms", raw: 24465239.999999985 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /oups",
            displayName: "HTTP GET /oups",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /oups",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.system.CrashController$_$triggerException",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.system.CrashController$_$triggerException"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /oups",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.52, unit: "ms", raw: 2523200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 114.38, unit: "ms", raw: 114379700 }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "087B7B4CE106D02E7453CEA3E3855F03",
            spanId: "12A86FAD48227509",
            startTime: "2023-02-20T14:35:53.600212Z",
            duration: { value: 7, unit: "ms", raw: 6997200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.504808Z",
          p50: { value: 2.52, unit: "ms", raw: 2523200 },
          p95: { value: 114.38, unit: "ms", raw: 114379700 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/ErrorRecordedOnDeeplyNestedSpan",
            displayName:
              "HTTP GET /SampleInsights/ErrorRecordedOnDeeplyNestedSpan",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/ErrorRecordedOnDeeplyNestedSpan",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorRecordedOnDeeplyNestedSpan",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorRecordedOnDeeplyNestedSpan"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/ErrorRecordedOnDeeplyNestedSpan",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 682.8, unit: "μs", raw: 682800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 3.21, unit: "ms", raw: 3209580 }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "1CFEDB75B387574EAE232C524AA267F4",
            spanId: "5A26264FEB8D0F66",
            startTime: "2023-02-20T14:36:03.451148Z",
            duration: { value: 1.42, unit: "ms", raw: 1417800 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.099625Z",
          p50: { value: 682.8, unit: "μs", raw: 682800 },
          p95: { value: 3.21, unit: "ms", raw: 3209580 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /owners/{ownerId}/pets/new",
            displayName: "HTTP GET /owners/{ownerId}/pets/new",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /owners/{ownerId}/pets/new",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.PetController$_$initCreationForm",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.PetController$_$initCreationForm"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /owners/{ownerId}/pets/new",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 15.04, unit: "ms", raw: 15043200 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 35.33,
                unit: "ms",
                raw: 35326464.999999985
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "E2FADF838BAF41AEE4BBFC133C569514",
            spanId: "E3DB46AEC1402456",
            startTime: "2023-02-20T14:35:54.710022Z",
            duration: { value: 18.66, unit: "ms", raw: 18661300 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.085429Z",
          p50: { value: 15.04, unit: "ms", raw: 15043200 },
          p95: { value: 35.33, unit: "ms", raw: 35326464.999999985 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /owners/{ownerId}",
            displayName: "HTTP GET /owners/{ownerId}",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /owners/{ownerId}",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$showOwner",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.owner.OwnerController$_$showOwner"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /owners/{ownerId}",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 14.46, unit: "ms", raw: 14457650 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 91.36,
                unit: "ms",
                raw: 91361589.99999966
              }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "4157F2594E3DF16559400A1851673470",
            spanId: "BF2AF8B713C5C6C3",
            startTime: "2023-03-02T06:52:51.060623Z",
            duration: { value: 16.33, unit: "ms", raw: 16327900 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.481472Z",
          p50: { value: 14.46, unit: "ms", raw: 14457650 },
          p95: { value: 91.36, unit: "ms", raw: 91361589.99999966 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /vets.html",
            displayName: "HTTP GET /vets.html",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /vets.html",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.vet.VetController$_$showVetList",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.vet.VetController$_$showVetList"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /vets.html",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.3, unit: "ms", raw: 7301200 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 366.53,
                unit: "ms",
                raw: 366527764.9999994
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "05052E542A4F9E7CE6102E09F4B3C4DC",
            spanId: "CACD23F5E73BE0D5",
            startTime: "2023-02-20T14:35:53.489013Z",
            duration: { value: 13.35, unit: "ms", raw: 13354200 }
          },
          firstDataSeenTime: "2023-01-23T09:20:00.517122Z",
          p50: { value: 7.3, unit: "ms", raw: 7301200 },
          p95: { value: 366.53, unit: "ms", raw: 366527764.9999994 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/NPlusOneWithInternalSpan",
            displayName: "HTTP GET /SampleInsights/NPlusOneWithInternalSpan",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/NPlusOneWithInternalSpan",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genNPlusOneWithInternalSpan",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genNPlusOneWithInternalSpan"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/NPlusOneWithInternalSpan",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 883.3, unit: "μs", raw: 883300 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 9.39,
                unit: "ms",
                raw: 9394959.999999994
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0FAAB60F4980872067BB36B2D69F503A",
            spanId: "60254D71383D86A7",
            startTime: "2023-02-20T14:36:00.3436Z",
            duration: { value: 1.86, unit: "ms", raw: 1855400 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.692941Z",
          p50: { value: 883.3, unit: "μs", raw: 883300 },
          p95: { value: 9.39, unit: "ms", raw: 9394959.999999994 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/NPlusOneWithoutInternalSpan",
            displayName: "HTTP GET /SampleInsights/NPlusOneWithoutInternalSpan",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/NPlusOneWithoutInternalSpan",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genNPlusOneWithoutInternalSpan",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genNPlusOneWithoutInternalSpan"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/NPlusOneWithoutInternalSpan",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 857.55, unit: "μs", raw: 857550 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 3.57,
                unit: "ms",
                raw: 3570849.9999999986
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "789B4D6769D5C94EA56D05FD9A741780",
            spanId: "8384796641434686",
            startTime: "2023-02-20T14:36:00.347117Z",
            duration: { value: 2.11, unit: "ms", raw: 2107000 }
          },
          firstDataSeenTime: "2023-02-13T07:07:24.742146Z",
          p50: { value: 857.55, unit: "μs", raw: 857550 },
          p95: { value: 3.57, unit: "ms", raw: 3570849.9999999986 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/SpanBottleneck",
            displayName: "HTTP GET /SampleInsights/SpanBottleneck",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/SpanBottleneck",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genSpanBottleneck",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genSpanBottleneck"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/SpanBottleneck",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 280.72, unit: "ms", raw: 280722000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 420.08, unit: "ms", raw: 420082400 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowestSpans",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "HTTP GET /SampleInsights/SpanBottleneck",
                subtitle: "1 spans",
                description: "47% SpanBottleneck 1 201.15 ms"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "569C32E71F060D0B9A697DC949477267",
            spanId: "EEA559A66E8EA9D6",
            startTime: "2023-03-02T06:52:39.091449Z",
            duration: { value: 420.08, unit: "ms", raw: 420082400 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.111147Z",
          p50: { value: 280.72, unit: "ms", raw: 280722000 },
          p95: { value: 420.08, unit: "ms", raw: 420082400 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /webjars/**",
            displayName: "HTTP GET /webjars/**",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /webjars/**",
            methodCodeObjectId: "",
            kind: "Server",
            codeObjectId: ""
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET /webjars/**",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 6.93, unit: "ms", raw: 6931950 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 123.43, unit: "ms", raw: 123432550 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "66387CBAA878D22CDA3CA5B238530430",
            spanId: "C02742B9DF70B3A6",
            startTime: "2023-03-06T07:09:05.387669Z",
            duration: { value: 6.27, unit: "ms", raw: 6268100 }
          },
          firstDataSeenTime: "2023-02-13T15:39:04.199269Z",
          p50: { value: 6.93, unit: "ms", raw: 6931950 },
          p95: { value: 123.43, unit: "ms", raw: 123432550 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET /SampleInsights/ErrorHotspot",
            displayName: "HTTP GET /SampleInsights/ErrorHotspot",
            instrumentationLibrary: "io.opentelemetry.tomcat-10.0",
            spanCodeObjectId:
              "span:io.opentelemetry.tomcat-10.0$_$HTTP GET /SampleInsights/ErrorHotspot",
            methodCodeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorHotspot",
            kind: "Server",
            codeObjectId:
              "org.springframework.samples.petclinic.sample.SampleInsightsController$_$genErrorHotspot"
          },
          assetType: "Endpoint",
          serviceName: "PetClinicWithAgent",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET /SampleInsights/ErrorHotspot",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.83, unit: "ms", raw: 2826500 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 7.9,
                unit: "ms",
                raw: 7898669.999999981
              }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "0273AF35662680846C73EEDE3D651423",
            spanId: "7E2C25793431C2B5",
            startTime: "2023-02-20T14:36:00.327515Z",
            duration: { value: 4.39, unit: "ms", raw: 4395000 }
          },
          firstDataSeenTime: "2023-01-23T09:20:43.093924Z",
          p50: { value: 2.83, unit: "ms", raw: 2826500 },
          p95: { value: 7.9, unit: "ms", raw: 7898669.999999981 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "PetClinicWithAgent"
    },
    {
      itemType: "SpanAssets",
      assetEntries: [
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Creating record of transaction",
            displayName: "Creating record of transaction",
            instrumentationLibrary: "MoneyTransferDomainService",
            spanCodeObjectId:
              "span:MoneyTransferDomainService$_$Creating record of transaction",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 570.9, unit: "μs", raw: 570900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 6.5, unit: "ms", raw: 6501425 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.286359Z",
          p50: { value: 570.9, unit: "μs", raw: 570900 },
          p95: { value: 6.5, unit: "ms", raw: 6501425 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Peristing balance transfer",
            displayName: "Peristing balance transfer",
            instrumentationLibrary: "MoneyTransferDomainService",
            spanCodeObjectId:
              "span:MoneyTransferDomainService$_$Peristing balance transfer",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 243, unit: "μs", raw: 243000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 678.4, unit: "μs", raw: 678400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.178033Z",
          p50: { value: 243, unit: "μs", raw: 243000 },
          p95: { value: 678.4, unit: "μs", raw: 678400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Validating account funds",
            displayName: "Validating account funds",
            instrumentationLibrary: "MoneyTransferDomainService",
            spanCodeObjectId:
              "span:MoneyTransferDomainService$_$Validating account funds",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.01, unit: "sec", raw: 2009838800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2017490900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.126546Z",
          p50: { value: 2.01, unit: "sec", raw: 2009838800 },
          p95: { value: 2.02, unit: "sec", raw: 2017490900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Anonymous activity",
            displayName: "Anonymous activity",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId:
              "span:SampleInsightsController$_$Anonymous activity",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 15.53, unit: "ms", raw: 15529300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.12, unit: "ms", raw: 16121900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.102491Z",
          p50: { value: 15.53, unit: "ms", raw: 15529300 },
          p95: { value: 16.12, unit: "ms", raw: 16121900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Connecting",
            displayName: "Connecting",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$Connecting",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.01, unit: "sec", raw: 2007120425 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2020723150 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "194B2D0908EF7C88A540857CA78D5917",
            spanId: "5EB9AF8BBF47697E",
            startTime: "2023-02-20T13:57:34.244211Z",
            duration: { value: 2.01, unit: "sec", raw: 2011152100 }
          },
          firstDataSeenTime: "2023-02-19T10:09:01.943783Z",
          p50: { value: 2.01, unit: "sec", raw: 2007120425 },
          p95: { value: 2.02, unit: "sec", raw: 2020723150 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "DelayAsync",
            displayName: "DelayAsync",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$DelayAsync",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: {
                value: 126.09,
                unit: "ms",
                raw: 126089455.55555554
              }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2016706045 }
            }
          ],
          insights: [
            {
              type: "SpanScaling",
              importance: 2,
              shortDisplayInfo: {
                title: "Scaling Issue Found",
                targetDisplayName: "",
                subtitle: "",
                description:
                  "Constant performance degradation by 81.32 ms per execution"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CA6220BBC8E1EE93D22CCDBE7E292FFB",
            spanId: "385D7F41397B6A9C",
            startTime: "2023-02-20T13:57:36.161694Z",
            duration: { value: 123.82, unit: "ms", raw: 123816000 }
          },
          firstDataSeenTime: "2023-02-19T10:09:01.949901Z",
          p50: { value: 126.09, unit: "ms", raw: 126089455.55555554 },
          p95: { value: 2.02, unit: "sec", raw: 2016706045 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Error",
            displayName: "Error",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$Error",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 12.95, unit: "ms", raw: 12948600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 28.03, unit: "ms", raw: 28033500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "A57300E73644F37CE3A50FF79007038D",
            spanId: "472D89B7119B4F68",
            startTime: "2023-02-20T13:57:53.788764Z",
            duration: { value: 12.73, unit: "ms", raw: 12733200 }
          },
          firstDataSeenTime: "2023-01-30T15:03:00.975346Z",
          p50: { value: 12.95, unit: "ms", raw: 12948600 },
          p95: { value: 28.03, unit: "ms", raw: 28033500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Local func activity",
            displayName: "Local func activity",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId:
              "span:SampleInsightsController$_$Local func activity",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 15.57, unit: "ms", raw: 15565700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.26, unit: "ms", raw: 16264400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:00.980959Z",
          p50: { value: 15.57, unit: "ms", raw: 15565700 },
          p95: { value: 16.26, unit: "ms", raw: 16264400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Rethrow1",
            displayName: "Rethrow1",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$Rethrow1",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 20.17, unit: "ms", raw: 20171650 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 22.53, unit: "ms", raw: 22527400 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-01-30T15:03:00.887091Z",
          p50: { value: 20.17, unit: "ms", raw: 20171650 },
          p95: { value: 22.53, unit: "ms", raw: 22527400 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Rethrow2",
            displayName: "Rethrow2",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$Rethrow2",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 38.92, unit: "ms", raw: 38919900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 38.92, unit: "ms", raw: 38919900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-01-30T15:03:00.834746Z",
          p50: { value: 38.92, unit: "ms", raw: 38919900 },
          p95: { value: 38.92, unit: "ms", raw: 38919900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SpanBottleneck 1",
            displayName: "SpanBottleneck 1",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId:
              "span:SampleInsightsController$_$SpanBottleneck 1",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 321.03, unit: "ms", raw: 321028800 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 325.85, unit: "ms", raw: 325847100 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:01.864282Z",
          p50: { value: 321.03, unit: "ms", raw: 321028800 },
          p95: { value: 325.85, unit: "ms", raw: 325847100 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "SpanBottleneck 2",
            displayName: "SpanBottleneck 2",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId:
              "span:SampleInsightsController$_$SpanBottleneck 2",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 109.14, unit: "ms", raw: 109141000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 110.9, unit: "ms", raw: 110900900 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:01.864353Z",
          p50: { value: 109.14, unit: "ms", raw: 109141000 },
          p95: { value: 110.9, unit: "ms", raw: 110900900 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Spans",
            displayName: "Spans",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$Spans",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 45.1, unit: "ms", raw: 45100700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 46.77, unit: "ms", raw: 46772200 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:00.993126Z",
          p50: { value: 45.1, unit: "ms", raw: 45100700 },
          p95: { value: 46.77, unit: "ms", raw: 46772200 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "WaitForLock",
            displayName: "WaitForLock",
            instrumentationLibrary: "SampleInsightsController",
            spanCodeObjectId: "span:SampleInsightsController$_$WaitForLock",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 1.76, unit: "sec", raw: 1761872662.5 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 7.64,
                unit: "sec",
                raw: 7637549339.999999
              }
            }
          ],
          insights: [
            {
              type: "SpanScaling",
              importance: 2,
              shortDisplayInfo: {
                title: "Scaling Issue Found",
                targetDisplayName: "",
                subtitle: "",
                description:
                  "Significant performance degradation at 12 executions/second"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "CA6220BBC8E1EE93D22CCDBE7E292FFB",
            spanId: "379BCB7118677687",
            startTime: "2023-02-20T13:57:34.117611Z",
            duration: { value: 2.17, unit: "sec", raw: 2167912400 }
          },
          firstDataSeenTime: "2023-02-19T10:09:01.942579Z",
          p50: { value: 1.76, unit: "sec", raw: 1761872662.5 },
          p95: { value: 7.64, unit: "sec", raw: 7637549339.999999 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Rethrow2",
            displayName: "Rethrow2",
            instrumentationLibrary: "SampleInsightsService",
            spanCodeObjectId: "span:SampleInsightsService$_$Rethrow2",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 47.9, unit: "μs", raw: 47900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 122.7, unit: "μs", raw: 122700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-01-30T15:03:00.815194Z",
          p50: { value: 47.9, unit: "μs", raw: 47900 },
          p95: { value: 122.7, unit: "μs", raw: 122700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "Process transfer",
            displayName: "Process transfer",
            instrumentationLibrary: "TransferController",
            spanCodeObjectId: "span:TransferController$_$Process transfer",
            methodCodeObjectId: "",
            kind: "Internal",
            codeObjectId: ""
          },
          assetType: "Other",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.18, unit: "ms", raw: 2177500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2017442700 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.435594Z",
          p50: { value: 2.18, unit: "ms", raw: 2177500 },
          p95: { value: 2.02, unit: "sec", raw: 2017442700 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "CheckCreditProvider",
            displayName: "CheckCreditProvider",
            instrumentationLibrary:
              "Sample.MoneyTransfer.API.Domain.Services.CreditProviderService",
            spanCodeObjectId:
              "span:Sample.MoneyTransfer.API.Domain.Services.CreditProviderService$_$CheckCreditProvider",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Domain.Services.CreditProviderService$_$CheckCreditProvider(Int64)",
            kind: "Internal",
            codeObjectId:
              "Sample.MoneyTransfer.API.Domain.Services.CreditProviderService$_$CheckCreditProvider(Int64)"
          },
          assetType: "CodeLocation",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.01, unit: "sec", raw: 2009876900 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2017514500 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.242579Z",
          p50: { value: 2.01, unit: "sec", raw: 2009876900 },
          p95: { value: 2.02, unit: "sec", raw: 2017514500 }
        },
        {
          span: {
            classification: "Unknown",
            role: "Internal",
            name: "TransferFunds",
            displayName: "TransferFunds",
            instrumentationLibrary:
              "Sample.MoneyTransfer.API.Domain.Services.MoneyTransferDomainService",
            spanCodeObjectId:
              "span:Sample.MoneyTransfer.API.Domain.Services.MoneyTransferDomainService$_$TransferFunds",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Domain.Services.MoneyTransferDomainService$_$TransferFunds(Int64,Int64,Int32)",
            kind: "Internal",
            codeObjectId:
              "Sample.MoneyTransfer.API.Domain.Services.MoneyTransferDomainService$_$TransferFunds(Int64,Int64,Int32)"
          },
          assetType: "CodeLocation",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 2.12, unit: "ms", raw: 2121450 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2017416450 }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.366903Z",
          p50: { value: 2.12, unit: "ms", raw: 2121450 },
          p95: { value: 2.02, unit: "sec", raw: 2017416450 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/Rethrow1",
            displayName: "HTTP GET SampleInsights/Rethrow1",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/Rethrow1",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Rethrow1",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Rethrow1"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/Rethrow1",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 24.46, unit: "ms", raw: 24457300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 29.24, unit: "ms", raw: 29240600 }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-01-30T15:03:01.162579Z",
          p50: { value: 24.46, unit: "ms", raw: 24457300 },
          p95: { value: 29.24, unit: "ms", raw: 29240600 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET Account/{id}",
            displayName: "HTTP GET Account/{id}",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET Account/{id}",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.AccountController$_$GetAccount(Int64)",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.AccountController$_$GetAccount(Int64)"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET Account/{id}",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 780.2, unit: "μs", raw: 780200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 1.29, unit: "ms", raw: 1286650 }
            }
          ],
          insights: [
            {
              type: "HighUsage",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.435835Z",
          p50: { value: 780.2, unit: "μs", raw: 780200 },
          p95: { value: 1.29, unit: "ms", raw: 1286650 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/SlowEndpoint",
            displayName: "HTTP GET SampleInsights/SlowEndpoint",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/SlowEndpoint",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$SlowEndpoint(Int32)",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$SlowEndpoint(Int32)"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/SlowEndpoint",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 5.01, unit: "sec", raw: 5012819300 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 5.03, unit: "sec", raw: 5026211000 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowEndpoint",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "HTTP GET SampleInsights/SlowEndpoint",
                subtitle: "",
                description: "Median duration 5.01 sec"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "B49E016AC111A21861093EBEF7BAE3A7",
            spanId: "FD43C2F18FF03B93",
            startTime: "2023-02-20T13:57:58.821577Z",
            duration: { value: 5, unit: "sec", raw: 5002874600 }
          },
          firstDataSeenTime: "2023-01-30T15:02:01.328935Z",
          p50: { value: 5.01, unit: "sec", raw: 5012819300 },
          p95: { value: 5.03, unit: "sec", raw: 5026211000 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/OverloadingA2",
            displayName: "HTTP GET SampleInsights/OverloadingA2",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/OverloadingA2",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$MethodOverloadingA(String,Int32[])",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$MethodOverloadingA(String,Int32[])"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/OverloadingA2",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 14.97, unit: "ms", raw: 14966900 }
            },
            {
              percentile: 0.95,
              currentDuration: {
                value: 30.34,
                unit: "ms",
                raw: 30343799.999999996
              }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:01.864295Z",
          p50: { value: 14.97, unit: "ms", raw: 14966900 },
          p95: { value: 30.34, unit: "ms", raw: 30343799.999999996 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/OverloadingA1",
            displayName: "HTTP GET SampleInsights/OverloadingA1",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/OverloadingA1",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$MethodOverloadingA(String)",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$MethodOverloadingA(String)"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/OverloadingA1",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 15.19, unit: "ms", raw: 15187850 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 29.6, unit: "ms", raw: 29603000 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:02.08591Z",
          p50: { value: 15.19, unit: "ms", raw: 15187850 },
          p95: { value: 29.6, unit: "ms", raw: 29603000 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/Error",
            displayName: "HTTP GET SampleInsights/Error",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/Error",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Error",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Error"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET SampleInsights/Error",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 15.71, unit: "ms", raw: 15711500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 32.87, unit: "ms", raw: 32867600 }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "A57300E73644F37CE3A50FF79007038D",
            spanId: "3CA7618DFB003C76",
            startTime: "2023-02-20T13:57:53.788606Z",
            duration: { value: 15.71, unit: "ms", raw: 15713600 }
          },
          firstDataSeenTime: "2023-01-30T15:03:01.151682Z",
          p50: { value: 15.71, unit: "ms", raw: 15711500 },
          p95: { value: 32.87, unit: "ms", raw: 32867600 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST Account",
            displayName: "HTTP POST Account",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP POST Account",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.AccountController$_$CreateAccount(NewAccountRequest)",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.AccountController$_$CreateAccount(NewAccountRequest)"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP POST Account",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 792.6, unit: "μs", raw: 792600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 10.54, unit: "ms", raw: 10540050 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.443259Z",
          p50: { value: 792.6, unit: "μs", raw: 792600 },
          p95: { value: 10.54, unit: "ms", raw: 10540050 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/HighUsage",
            displayName: "HTTP GET SampleInsights/HighUsage",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/HighUsage",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$HighUsage",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$HighUsage"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/HighUsage",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 46.35, unit: "ms", raw: 46354500 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 61.1, unit: "ms", raw: 61097185 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:01.671646Z",
          p50: { value: 46.35, unit: "ms", raw: 46354500 },
          p95: { value: 61.1, unit: "ms", raw: 61097185 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/LowUsage",
            displayName: "HTTP GET SampleInsights/LowUsage",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/LowUsage",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$LowUsage",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$LowUsage"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/LowUsage",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 14.97, unit: "ms", raw: 14971350 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 15.61, unit: "ms", raw: 15605200 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:02.024743Z",
          p50: { value: 14.97, unit: "ms", raw: 14971350 },
          p95: { value: 15.61, unit: "ms", raw: 15605200 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/Spans",
            displayName: "HTTP GET SampleInsights/Spans",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/Spans",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Spans",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Spans"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId: "endpoint:epHTTP:HTTP GET SampleInsights/Spans",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 46.68, unit: "ms", raw: 46681200 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 47.37, unit: "ms", raw: 47365800 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:00.953394Z",
          p50: { value: 46.68, unit: "ms", raw: 46681200 },
          p95: { value: 47.37, unit: "ms", raw: 47365800 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/Rethrow2",
            displayName: "HTTP GET SampleInsights/Rethrow2",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/Rethrow2",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Rethrow2",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Rethrow2"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/Rethrow2",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 73.52, unit: "ms", raw: 73524000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 73.52, unit: "ms", raw: 73524000 }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-01-30T15:03:01.166162Z",
          p50: { value: 73.52, unit: "ms", raw: 73524000 },
          p95: { value: 73.52, unit: "ms", raw: 73524000 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/NormalUsage",
            displayName: "HTTP GET SampleInsights/NormalUsage",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/NormalUsage",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$NormalUsage",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$NormalUsage"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/NormalUsage",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 14.92, unit: "ms", raw: 14918700 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 15.97, unit: "ms", raw: 15974650 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:01.896491Z",
          p50: { value: 14.92, unit: "ms", raw: 14918700 },
          p95: { value: 15.97, unit: "ms", raw: 15974650 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/OverloadingA3",
            displayName: "HTTP GET SampleInsights/OverloadingA3",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/OverloadingA3",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$MethodOverloadingA(String,String,Int64)",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$MethodOverloadingA(String,String,Int64)"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/OverloadingA3",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 28.82, unit: "ms", raw: 28824750 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 31.35, unit: "ms", raw: 31351350 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:01.67165Z",
          p50: { value: 28.82, unit: "ms", raw: 28824750 },
          p95: { value: 31.35, unit: "ms", raw: 31351350 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP POST Transfer/TransferFunds",
            displayName: "HTTP POST Transfer/TransferFunds",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP POST Transfer/TransferFunds",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.TransferController$_$TransferFunds(TransferRequest)",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.TransferController$_$TransferFunds(TransferRequest)"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP POST Transfer/TransferFunds",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 7.87, unit: "ms", raw: 7865150 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 2.02, unit: "sec", raw: 2018922600 }
            }
          ],
          insights: [
            {
              type: "Errors",
              importance: 5,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "HotSpot",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:11:01.294513Z",
          p50: { value: 7.87, unit: "ms", raw: 7865150 },
          p95: { value: 2.02, unit: "sec", raw: 2018922600 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/SpanBottleneck",
            displayName: "HTTP GET SampleInsights/SpanBottleneck",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/SpanBottleneck",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$SpanBottleneck",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$SpanBottleneck"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/SpanBottleneck",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 324.52, unit: "ms", raw: 324522600 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 326.94, unit: "ms", raw: 326938400 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "NA",
            spanId: "NA",
            startTime: "2022-03-20T13:24:27.484562Z",
            duration: { value: -1, unit: "ns", raw: -1 }
          },
          firstDataSeenTime: "2023-02-19T10:10:01.613482Z",
          p50: { value: 324.52, unit: "ms", raw: 324522600 },
          p95: { value: 326.94, unit: "ms", raw: 326938400 }
        },
        {
          span: {
            classification: "Endpoint",
            role: "Entry",
            name: "HTTP GET SampleInsights/lock/{milisec}",
            displayName: "HTTP GET SampleInsights/lock/{milisec}",
            instrumentationLibrary: "OpenTelemetry.Instrumentation.AspNetCore",
            spanCodeObjectId:
              "span:OpenTelemetry.Instrumentation.AspNetCore$_$HTTP GET SampleInsights/lock/{milisec}",
            methodCodeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Lock(Double)",
            kind: "Server",
            codeObjectId:
              "Sample.MoneyTransfer.API.Controllers.SampleInsightsController$_$Lock(Double)"
          },
          assetType: "Endpoint",
          serviceName: "Sample.MoneyTransfer.API",
          endpointCodeObjectId:
            "endpoint:epHTTP:HTTP GET SampleInsights/lock/{milisec}",
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 3.77, unit: "sec", raw: 3769889937.5 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 9.65, unit: "sec", raw: 9651066040 }
            }
          ],
          insights: [
            {
              type: "LowUsage",
              importance: 6,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "",
                subtitle: "",
                description: ""
              }
            },
            {
              type: "SlowEndpoint",
              importance: 2,
              shortDisplayInfo: {
                title: "",
                targetDisplayName: "HTTP GET SampleInsights/lock/{milisec}",
                subtitle: "",
                description: "Median duration 3.5 sec"
              }
            },
            {
              type: "SpanScaling",
              importance: 2,
              shortDisplayInfo: {
                title: "Scaling Issue Found",
                targetDisplayName: "",
                subtitle: "",
                description:
                  "Significant performance degradation at 12 executions/second"
              }
            }
          ],
          lastSpanInstanceInfo: {
            traceId: "194B2D0908EF7C88A540857CA78D5917",
            spanId: "B8D514C611045722",
            startTime: "2023-02-20T13:57:34.243978Z",
            duration: { value: 5.09, unit: "sec", raw: 5086083300 }
          },
          firstDataSeenTime: "2023-02-19T10:09:01.942575Z",
          p50: { value: 3.77, unit: "sec", raw: 3769889937.5 },
          p95: { value: 9.65, unit: "sec", raw: 9651066040 }
        },
        {
          span: {
            classification: "EndpointClient",
            role: "Unknown",
            name: "GET PetClinicWithAgent /",
            displayName: "GET",
            instrumentationLibrary: "io.opentelemetry.okhttp-3.0",
            spanCodeObjectId:
              "span:io.opentelemetry.okhttp-3.0$_$GET PetClinicWithAgent /",
            methodCodeObjectId: "",
            kind: "Client",
            codeObjectId: ""
          },
          assetType: "EndpointClient",
          serviceName: "ClientTesterOfPetClinic",
          endpointCodeObjectId: null,
          durationPercentiles: [
            {
              percentile: 0.5,
              currentDuration: { value: 10.55, unit: "ms", raw: 10549000 }
            },
            {
              percentile: 0.95,
              currentDuration: { value: 16.34, unit: "ms", raw: 16340300 }
            }
          ],
          insights: [],
          lastSpanInstanceInfo: {
            traceId: "6FFAEE308F746E0982B60FF8DF656E8F",
            spanId: "FCCF0B135AE9DA98",
            startTime: "2023-03-06T09:27:44.196598Z",
            duration: { value: 8.42, unit: "ms", raw: 8421700 }
          },
          firstDataSeenTime: "2023-03-06T07:48:02.057359Z",
          p50: { value: 10.55, unit: "ms", raw: 10549000 },
          p95: { value: 16.34, unit: "ms", raw: 16340300 }
        }
      ],
      accountId: "00000000-0000-0000-0000-000000000000",
      environment: "BOB-LAPTOP[LOCAL]",
      serviceName: "Sample.MoneyTransfer.API"
    }
  ]
};
