import { useTheme } from "@mui/material";
import * as s from "./styles";
import { AssetTypeListItemProps } from "./types";

export const AssetTypeListItem = (props: AssetTypeListItemProps) => {
  const theme = useTheme();

  const handleAssetTypeClick = () => {
    props.onAssetTypeClick(props.id);
  };

  return (
    <s.ListItem>
      <s.AssetType onClick={handleAssetTypeClick}>
        {props.icon && (
          <props.icon
            size={16}
            color={
              props.isSelected
                ? theme.palette.primary.main
                : theme.palette.text.primary
            }
          />
        )}
        <s.Label isSelected={props.isSelected}>
          {props.label || props.id}
        </s.Label>
        <s.EntryCount>({props.entryCount})</s.EntryCount>
      </s.AssetType>
    </s.ListItem>
  );
};
