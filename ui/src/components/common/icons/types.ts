export enum Direction {
  LEFT = "LEFT",
  UP = "UP",
  RIGHT = "RIGHT",
  DOWN = "DOWN",
}

export interface IconProps {
  color?: string;
  size?: number;
}

export interface RotatableIconProps extends IconProps {
  direction?: Direction;
}
