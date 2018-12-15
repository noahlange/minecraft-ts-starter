import { Entity, on, Server } from 'tsrock';
import { CustomComponents } from '../lib/components';
import { CustomEvents } from '../lib/events';
import { IOnStartEvent } from '../types';

export default class CustomClient extends Server {
  public players: Entity[] = [];

  @on(CustomEvents.ON_START)
  public onStart(e: IOnStartEvent) {
    const player = this.entities.from(e.player);
    player.component.add(CustomComponents.MY_COMPONENT, {});
    this.players.push(player);
  }

  public initialize() {
    this.register.component(CustomComponents.MY_COMPONENT, {});
  }
}
