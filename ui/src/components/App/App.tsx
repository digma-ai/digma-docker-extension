// import Button from '@mui/material/Button';
// import { createDockerDesktopClient } from '@docker/extension-api-client';
// import { CssBaseline, Stack, TextField, Typography } from '@mui/material';
import { useState } from "react";
import { data } from "../../data";
import { AssetsList } from "../AssetsList";
import { ScalesIcon } from "../common/icons/ScalesIcon";
import { SnailIcon } from "../common/icons/SnailIcon";
import { SpotIcon } from "../common/icons/SpotIcon";
import { Details } from "../Details";
import { GlobalStyle } from "./styles";
import { INSIGHT_TYPES } from "./types";

import { SubItem } from "../AssetsList/AssetsListItem/types";

// Note: This line relies on Docker Desktop's presence as a host application.
// If you're running this React app in a browser, it won't work properly.
// const client = createDockerDesktopClient();

// function useDockerDesktopClient() {
// return client;
// }

const getInsightInfo = (type: string): JSX.Element | undefined => {
  const insightInfoMap: Record<string, JSX.Element> = {
    [INSIGHT_TYPES.HotSpot]: <SpotIcon size={20} />,

    [INSIGHT_TYPES.SlowEndpoint]: <SnailIcon size={20} />,

    [INSIGHT_TYPES.SpanScaling]: <ScalesIcon size={20} />,

    [INSIGHT_TYPES.SpanScalingRootCause]: <ScalesIcon size={20} />,
  };

  return insightInfoMap[type];
};

export function App() {
  const [selectedItem, setSelectedItem] = useState<{
    groupId: string;
    item: SubItem;
  } | null>(null);
  // const [response, setResponse] = React.useState<string>();
  // const ddClient = useDockerDesktopClient();

  // const fetchAndDisplayResponse = async () => {
  //   const result = await ddClient.extension.vm?.service?.get('/hello');
  //   setResponse(JSON.stringify(result));
  // };

  const handleBackButtonClick = () => {
    setSelectedItem(null);
  };

  const handleSelect = (groupId: string, item: SubItem) => {
    setSelectedItem({
      groupId,
      item,
    });
  };

  return (
    <>
      {/* <Typography variant="h3">Docker extension demo</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        This is a basic page rendered with MUI, using Docker's theme. Read the
        MUI documentation to learn more. Using MUI in a conventional way and
        avoiding custom styling will help make sure your extension continues to
        look great as Docker's theme evolves.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Pressing the below button will trigger a request to the backend. Its
        response will appear in the textarea.
      </Typography>
      <Stack direction="row" alignItems="start" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" onClick={fetchAndDisplayResponse}>
          Call backend
        </Button>

        <TextField
          label="Backend response"
          sx={{ width: 480 }}
          disabled
          multiline
          variant="outlined"
          minRows={5}
          value={response ?? ''}
        />
      </Stack> */}
      {/* <CssBaseline /> */}
      <GlobalStyle />
      {selectedItem ? (
        <Details
          onBackButtonClick={handleBackButtonClick}
          groupId={selectedItem.groupId}
          itemId={selectedItem.item.id}
          items={selectedItem.item.items}
        />
      ) : (
        <AssetsList groups={data.groups} onSelect={handleSelect} />
      )}
    </>
  );
}
