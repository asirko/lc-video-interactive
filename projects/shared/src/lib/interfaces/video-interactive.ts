export interface VideoInteractive {
  src: string;
  name: string;
  id: number;
  duration: number;
  interactions: Interaction[];
}

export enum InteractionType {
  LINK = 'link',
  BUTTON = 'button',
  TEXT = 'text',
  IMAGE = 'image',
}

interface AbstractInteraction {
  type: InteractionType;
  startTime: number;
}

export type Interaction = InteractionLink | InteractionButton | InteractionText | InteractionImage;

export interface InteractionLink extends AbstractInteraction {
  type: InteractionType.LINK;
  link: string;
  name: string;
}

export interface InteractionButton extends AbstractInteraction {
  type: InteractionType.BUTTON;
  endTime: number;
  name: string;
  goTo: number;
}

export interface InteractionText extends AbstractInteraction {
  type: InteractionType.TEXT;
  startTime: number;
  endTime: number;
  name: string;
  text: string;
  x: number;
  y: number;
  width: number;
}

export interface InteractionImage extends AbstractInteraction {
  type: InteractionType.IMAGE;
  startTime: number;
  endTime: number;
  name: string;
  src: string;
  x: number;
  y: number;
  width: number;
}
