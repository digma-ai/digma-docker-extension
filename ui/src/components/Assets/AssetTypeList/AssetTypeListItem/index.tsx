import { useTheme } from "@mui/material";
import * as s from "./styles";
import { AssetTypeListItemProps } from "./types";

export const AssetTypeListItem = (props: AssetTypeListItemProps) => {
  const theme = useTheme();
  return (
    <s.Container>
      {props.icon && (
        <props.icon
          size={20}
          color={
            props.isSelected && theme.palette.mode === "light"
              ? theme.palette.primary.main
              : theme.palette.text.primary
          }
        />
      )}
      {props.label || props.id}
      <s.EntryCount isSelected={props.isSelected}>
        ({props.entryCount})
      </s.EntryCount>
    </s.Container>
  );
};
