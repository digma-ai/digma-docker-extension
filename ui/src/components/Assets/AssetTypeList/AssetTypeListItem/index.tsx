import { useTheme } from "@mui/material";
import * as s from "./styles";
import { AssetTypeListItemProps } from "./types";

export const AssetTypeListItem = (props: AssetTypeListItemProps) => {
  const theme = useTheme();
  const hasEntries = props.entryCount !== 0;

  return (
    <s.Container $isSelected={props.isSelected} $hasEntries={hasEntries}>
      {props.icon && (
        <props.icon
          size={20}
          color={
            props.isSelected
              ? theme.palette.mode === "light"
                ? theme.palette.primary.main
                : theme.palette.text.primary
              : hasEntries
              ? theme.palette.text.primary
              : "#b3b3b3"
          }
        />
      )}
      {props.label || props.id}
      <s.EntryCount $isSelected={props.isSelected} $hasEntries={hasEntries}>
        ({props.entryCount})
      </s.EntryCount>
    </s.Container>
  );
};
