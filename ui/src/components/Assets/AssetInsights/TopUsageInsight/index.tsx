import { roundTo } from "../../../../utils/roundTo";
import { AssetsData, ExtendedAssetEntry } from "../../types";
import { InsightCard } from "../InsightCard";
import { Pagination } from "../Pagination";
import { Link } from "../styles";
import * as s from "./styles";
import { TopUsageInsightProps } from "./types";

const findEndpointAsset = (
  assets: AssetsData,
  codeObjectId: string,
  serviceName: string
): ExtendedAssetEntry | undefined => {
  const asset = assets?.serviceAssetsEntries
    .find((x) => x.serviceName === serviceName)
    ?.assetEntries.find(
      (x) =>
        x.span.methodCodeObjectId === codeObjectId && x.assetType === "Endpoint"
    );

  return asset ? { ...asset, id: asset.span.spanCodeObjectId } : undefined;
};

export const TopUsageInsight = (props: TopUsageInsightProps) => {
  console.log("TopUsageInsight");
  console.log(props.insight);

  const handleServiceLinkClick = (asset: ExtendedAssetEntry) => {
    props.onAssetSelect(asset);
  };

  return (
    <InsightCard
      data={props.insight}
      content={
        <s.FlowList>
          <Pagination>
            {props.insight.flows.map((flow, i) => {
              // TODO: replace with lookup by spanCodeObjectId
              const firstServiceAsset = findEndpointAsset(
                props.assets,
                flow.firstService.codeObjectId,
                props.asset.serviceName
              );
              const firstServiceName = `${flow.firstService.service}:${flow.firstService.span}`;

              const lastServiceAsset =
                flow.lastService &&
                findEndpointAsset(
                  props.assets,
                  flow.lastService.codeObjectId,
                  flow.lastService.service
                );
              const lastServiceName = `${flow.lastService?.service}:${flow.lastService?.span}`;

              return (
                <s.Flow key={i}>
                  {roundTo(flow.percentage, 2)}%{" "}
                  {firstServiceAsset ? (
                    <Link
                      onClick={() => handleServiceLinkClick(firstServiceAsset)}
                    >
                      {firstServiceName}
                    </Link>
                  ) : (
                    firstServiceName
                  )}
                  {flow.intermediateSpan && <> -&gt; {flow.intermediateSpan}</>}
                  {flow.lastService ? (
                    lastServiceAsset ? (
                      <Link
                        onClick={() => handleServiceLinkClick(lastServiceAsset)}
                      >
                        {lastServiceName}
                      </Link>
                    ) : (
                      lastServiceName
                    )
                  ) : null}
                  {flow.lastServiceSpan && <> -&gt; {flow.lastServiceSpan}</>}
                </s.Flow>
              );
            })}
          </Pagination>
        </s.FlowList>
      }
    />
  );
};
