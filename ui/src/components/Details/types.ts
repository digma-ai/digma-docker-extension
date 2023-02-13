import { INSIGHT_TYPES } from "../App/types";

export interface DetailsProps {
  onBackButtonClick: () => void;
  categoryId: string;
  items: {
    id: string;
    label: string;
    insights: INSIGHT_TYPES[];
  }[];
}
