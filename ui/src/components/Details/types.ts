import { INSIGHT_TYPES } from "../App/types";

export interface DetailsProps {
  onBackButtonClick: () => void;
  groupId: string;
  itemId: string;
  items: {
    id: string;
    label: string;
    insights: INSIGHT_TYPES[];
  }[];
}
