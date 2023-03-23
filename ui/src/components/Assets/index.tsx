import ExtensionIcon from "@mui/icons-material/Extension";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useMemo, useState } from "react";
import { groupBy } from "../../utils/groupBy";
import { StackIcon } from "../common/icons/StackIcon";
import { AssetList } from "./AssetList";
import { AssetTypeList } from "./AssetTypeList";
import * as s from "./styles";
import {
  AssetEntry,
  AssetsData,
  AssetsProps,
  ExtendedAssetEntry,
  GroupedAssetEntries,
} from "./types";

const groupEntries = (data: AssetsData): GroupedAssetEntries => {
  const assetEntries: ExtendedAssetEntry[] = data.serviceAssetsEntries
    .flat()
    .map((entry) =>
      entry.assetEntries.map((entry) => ({
        ...entry,
        id: entry.span.spanCodeObjectId,
      }))
    )
    .flat();

  const assetTypes = groupBy<ExtendedAssetEntry>(assetEntries, "assetType");

  const groupedAssetEntries: {
    [key: string]: { [key: string]: ExtendedAssetEntry[] };
  } = {};

  Object.keys(assetTypes).forEach((assetType) => {
    groupedAssetEntries[assetType] = groupBy<ExtendedAssetEntry>(
      assetTypes[assetType],
      "id"
    );
  });

  return groupedAssetEntries;
};

export const Assets = (props: AssetsProps) => {
  const [selectedAssetTypeId, setSelectedAssetTypeId] = useState<string | null>(
    null
  );
  const [data, setData] = useState<GroupedAssetEntries>();

  const theme = useTheme();

  useEffect(() => {
    if (!props.data) {
      return;
    }

    const groupedAssetEntries = groupEntries(props.data);
    setData(groupedAssetEntries);
  }, [props.data]);

  useEffect(() => {
    if (data && !selectedAssetTypeId) {
      setSelectedAssetTypeId("Endpoint");
    }
  }, [data]);

  const handleBackButtonClick = () => {
    setSelectedAssetTypeId(null);
  };

  const handleAssetTypeSelect = (assetTypeId: string) => {
    setSelectedAssetTypeId(assetTypeId);
  };

  const handleAssetLinkClick = (entry: AssetEntry) => {
    // TODO
  };

  const onGettingStartedButtonClick = () => {
    props.onGettingStartedButtonClick();
  };

  const handleEnvironmentLinkClick = (environment: string) => {
    props.onEnvironmentSelect(environment);
  };

  const renderContent = useMemo((): JSX.Element => {
    if (!data || props.environments.length === 0) {
      return (
        <s.NoDataContainer>
          <s.NoDataContent>
            <s.Circle>
              <StackIcon
                size={32}
                color={theme.palette.mode === "light" ? "#677285" : "#adbecb"}
              />
            </s.Circle>
            <s.NoDataTextContainer>
              <Typography variant="subtitle1">No Data</Typography>
              <s.NoDataText variant="body1">
                Please follow the instructions on the "Getting started" page to
                collect data from your containers. Then, just make some API
                calls or generate any activity to see the assets behavior on
                this page
              </s.NoDataText>
            </s.NoDataTextContainer>
            <s.GettingStartedButton
              onClick={onGettingStartedButtonClick}
              variant={"contained"}
              endIcon={
                <ExtensionIcon
                  sx={{
                    width: 16,
                    height: 16,
                  }}
                />
              }
            >
              Getting started
            </s.GettingStartedButton>
          </s.NoDataContent>
        </s.NoDataContainer>
      );
    }

    return (
      <>
        <s.EnvironmentsContainer>
          <Typography variant={"subtitle1"}>Environments</Typography>
          <s.EnvironmentsList>
            {props.environments.map((environment) => (
              <s.Link
                key={environment}
                onClick={() => handleEnvironmentLinkClick(environment)}
              >
                {environment}
              </s.Link>
            ))}
          </s.EnvironmentsList>
        </s.EnvironmentsContainer>
        <AssetTypeList
          selectedAssetTypeId={selectedAssetTypeId}
          data={data}
          onAssetTypeSelect={handleAssetTypeSelect}
        />
        {selectedAssetTypeId && data[selectedAssetTypeId] && (
          <AssetList
            onBackButtonClick={handleBackButtonClick}
            onAssetLinkClick={handleAssetLinkClick}
            assetTypeId={selectedAssetTypeId}
            entries={data[selectedAssetTypeId]}
          />
        )}
      </>
    );
  }, [data, props.environments, selectedAssetTypeId]);

  return (
    <s.Container>
      <s.Header>
        <Typography variant={"h4"} component={"h2"}>
          Assets
        </Typography>
      </s.Header>
      {renderContent}
    </s.Container>
  );
};
