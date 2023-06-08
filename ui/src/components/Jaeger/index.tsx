import IconButton from "@mui/material/IconButton";
import { CrossIcon } from "../common/icons/CrossIcon";
import * as s from "./styles";
import { JaegerProps } from "./types";

export const Jaeger = (props: JaegerProps) => {
  const handleJaegerCloseButtonClick = () => {
    props.onClose();
  };

  const traces = props.traces.map((x) => ({
    ...x,
    id: x.id.toLocaleLowerCase(),
  }));

  const title = traces
    ? traces.length > 1
      ? `Comparing: A sample ${traces[0].id} trace with a ${traces[1].id} trace`
      : `${traces[0].name || `Trace ${traces[0].id}`}`
    : "";

  const jaegerQueryUrl = "http://localhost:8080";

  const url =
    traces.length > 1
      ? `${jaegerQueryUrl}/trace/${traces[0].id}...${traces[1].id}?cohort=${traces[0].id}&cohort=${traces[1].id}`
      : `${jaegerQueryUrl}/trace/${traces[0].id}`;

  return (
    <s.Container>
      <s.Header>
        <s.Title title={title}>{title}</s.Title>
        <IconButton onClick={handleJaegerCloseButtonClick}>
          <CrossIcon size={16} color={"#9b9b9b"} />
        </IconButton>
      </s.Header>
      <s.Iframe src={url} />
    </s.Container>
  );
};
