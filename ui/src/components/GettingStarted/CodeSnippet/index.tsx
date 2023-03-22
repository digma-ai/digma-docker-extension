import FileCopyIcon from "@mui/icons-material/FileCopy";
import copy from "copy-to-clipboard";
import * as s from "./styles";
import { CodeSnippetProps } from "./types";

export const CodeSnippet = (props: CodeSnippetProps) => {
  const handleCopyButtonClick = () => {
    copy(props.text);
  };

  return (
    <s.Container>
      <s.Code
        variant={"outlined"}
        value={props.text}
        multiline={props.multiline}
        minRows={12}
        maxRows={12}
        inputProps={{
          readOnly: true,
        }}
      />
      {props.multiline ? (
        <s.FloatingCopyButton
          variant={"contained"}
          onClick={handleCopyButtonClick}
        >
          <FileCopyIcon />
        </s.FloatingCopyButton>
      ) : (
        <s.CopyButton variant={"contained"} onClick={handleCopyButtonClick}>
          <FileCopyIcon />
        </s.CopyButton>
      )}
    </s.Container>
  );
};
