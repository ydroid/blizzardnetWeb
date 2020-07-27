import { Player } from "./player";
import { Leader } from './leader';

export interface Guild {
  faction: string;
  membercount: string;
  roster: Player[];
  leader: Leader;
}
