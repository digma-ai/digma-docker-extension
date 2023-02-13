import { INSIGHT_TYPES } from "./components/App/types";
import { CodeMarkerPinIcon } from "./components/common/icons/CodeMarkerPinIcon";
import { DatabaseIcon } from "./components/common/icons/DatabaseIcon";
import { EndpointIcon } from "./components/common/icons/EndpointIcon";
import { UserIcon } from "./components/common/icons/UserIcon";

export const data = {
  groups: [
    {
      id: "endpoints",
      label: "Endpoints",
      icon: EndpointIcon,
      items: [
        {
          id: "service1",
          label: "service 1",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
        {
          id: "service2",
          label: "service 2",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
        {
          id: "service3",
          label: "service 3",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
      ],
    },
    {
      id: "consumers",
      label: "Consumers",
      icon: UserIcon,
      items: [
        {
          id: "service1",
          label: "service 1",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
        {
          id: "service2",
          label: "service 2",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
        {
          id: "service3",
          label: "service 3",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
      ],
    },
    {
      id: "databaseQueries",
      label: "Database queries",
      icon: DatabaseIcon,
      items: [],
    },
    {
      id: "codeLocations",
      label: "Code locations",
      icon: CodeMarkerPinIcon,
      items: [
        {
          id: "service1",
          label: "service 1",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
        {
          id: "service2",
          label: "service 2",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
        {
          id: "service3",
          label: "service 3",
          items: [
            {
              id: "item1",
              label: "HTTP GET /Users/",
              insights: [
                INSIGHT_TYPES.HotSpot,
                INSIGHT_TYPES.SlowEndpoint,
                INSIGHT_TYPES.SpanScaling,
              ],
            },
            {
              id: "item2",
              label: "GRPC /Tests/",
              insights: [INSIGHT_TYPES.SlowEndpoint],
            },
            {
              id: "item3",
              label: "HTTP POST /Table/",
              insights: [INSIGHT_TYPES.HotSpot, INSIGHT_TYPES.SlowEndpoint],
            },
          ],
        },
      ],
    },
  ],
};
