import { Client, Events, on } from 'tsrock';
import { CustomEvents } from '../lib/events';
import { IOnStartEvent } from '../types';

export default class CustomClient extends Client {
  @on(Events.CLIENT_ENTERED_WORLD)
  public onClientEnteredWorld(event: IOnStartEvent) {
    this.events.broadcast(CustomEvents.ON_START, event);
  }
}
