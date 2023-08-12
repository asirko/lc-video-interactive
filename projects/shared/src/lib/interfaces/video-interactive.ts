export interface VideoInteractive {
  src: string;
  name: string;
  id: number;
  interactions: Interaction[];
}

export enum InteractionType {
  LINK = 'link',
  BUTTON = 'button',
  TEXT = 'text',
  IMAGE = 'image',
}

export interface Interaction {
  type: InteractionType;
  startTime: number;
}

export interface InteractionLink extends Interaction {
  type: InteractionType.LINK;
  link: string;
  name: string;
}

export interface InteractionButton extends Interaction {
  type: InteractionType.BUTTON;
  endTime: number;
  name: string;
  goTo: number;
}

export interface InteractionText extends Interaction {
  type: InteractionType.TEXT;
  startTime: number;
  endTime: number;
  name: string;
  text: string;
  x: number;
  y: number;
  width: number;
}

export interface InteractionImage extends Interaction {
  type: InteractionType.IMAGE;
  startTime: number;
  endTime: number;
  name: string;
  src: string;
  x: number;
  y: number;
  width: number;
}
