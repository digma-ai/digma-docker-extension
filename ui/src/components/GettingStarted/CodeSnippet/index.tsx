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
        minRows={1}
        maxRows={12}
        inputProps={{
          readOnly: true,
        }}
      />
      {props.multiline ? (
        <s.FloatingCopyButton onClick={handleCopyButtonClick}>
          <FileCopyIcon />
        </s.FloatingCopyButton>
      ) : (
        <s.CopyButton onClick={handleCopyButtonClick}>
          <FileCopyIcon />
        </s.CopyButton>
      )}
    </s.Container>
  );
};
