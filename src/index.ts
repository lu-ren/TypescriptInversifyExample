import { container } from "./inversify.config";
import { TYPES } from "./types";
import { Warrior } from "./interfaces";

const ninja  = container.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());
console.log(ninja.bindHit());
