import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { AssetEntry } from "../types";
import { AssetEntry as AssetEntryComponent } from "./AssetEntry";
import * as s from "./styles";
import { AssetListProps } from "./types";

const AssetListComponent = (
  props: AssetListProps,
  ref: ForwardedRef<HTMLUListElement>
) => {
  const handleAssetEntryClick = (asset: AssetEntry) => {
    props.onAssetEntryClick(asset);
  };

  const entriesRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (props.assetNavigateTo) {
      const ref = entriesRef.current[props.assetNavigateTo];
      if (ref && ref.parentElement) {
        const distanceToScroll = ref.offsetTop - ref.parentElement.offsetTop;
        ref.parentElement.scrollTo({
          top: distanceToScroll,
          behavior: "smooth"
        });
        props.onAssetNavigate();
      }
    }
  }, [props.assetNavigateTo, props.onAssetNavigate]);

  return (
    <s.List ref={ref}>
      {props.entries.map((entry) => {
        const id = `${entry.spanCodeObjectId}__${entry.services.join(",")}`;

        return (
          <AssetEntryComponent
            ref={(el) => {
              if (el) {
                entriesRef.current[id] = el;
              } else {
                delete entriesRef.current[id];
              }
            }}
            key={id}
            id={id}
            entry={entry}
            onClick={handleAssetEntryClick}
            sortingCriterion={props.sortingCriterion}
          />
        );
      })}
    </s.List>
  );
};

export const AssetList = forwardRef(AssetListComponent);
