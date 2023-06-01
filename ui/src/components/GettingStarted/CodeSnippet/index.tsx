import FileCopyIcon from "@mui/icons-material/FileCopy";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Tooltip from "@mui/material/Tooltip";
import copy from "copy-to-clipboard";
import { useState } from "react";
import * as s from "./styles";
import { CodeSnippetProps } from "./types";

export const CodeSnippet = (props: CodeSnippetProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleCopyButtonClick = () => {
    copy(props.text);
    setIsTooltipVisible(true);
  };

  const handleTooltipClose = () => {
    setIsTooltipVisible(false);
  };

  return (
    <s.Container>
      <s.Code
        variant={"outlined"}
        value={props.text}
        multiline={props.multiline}
        minRows={1}
        maxRows={12}
        inputProps={{
          readOnly: true,
        }}
      />
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          title={"Copied"}
          disableFocusListener
          disableHoverListener
          onClose={handleTooltipClose}
          open={isTooltipVisible}
        >
          {props.multiline ? (
            <s.FloatingCopyButton onClick={handleCopyButtonClick}>
              <FileCopyIcon />
            </s.FloatingCopyButton>
          ) : (
            <s.CopyButton onClick={handleCopyButtonClick}>
              <FileCopyIcon />
            </s.CopyButton>
          )}
        </Tooltip>
      </ClickAwayListener>
    </s.Container>
  );
};
