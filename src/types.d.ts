import { CustomComponents, CustomEvents } from './lib';

interface IOnStartEvent {
  player: IEntityObject;
}

interface ICustomComponent {}

declare module 'tsrock' {
  export interface IEventMap {
    [CustomEvents.ON_START]: IOnStartEvent;
  }
  export interface IComponentMap {
    [CustomComponents.MY_COMPONENT]: ICustomComponent;
  }
}
