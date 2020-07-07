import { PLayer } from "./player";

export interface Guild {
  faction: string;
  membercount: number;
  roster: PLayer[];
}
