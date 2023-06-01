import { Duration } from "../../types";

export interface DurationChangeProps {
  currentDuration: Duration;
  previousDuration: Duration | null;
  changeTime: string | null;
  changeVerified: boolean | null;
}
