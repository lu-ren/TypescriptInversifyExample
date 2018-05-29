import { Container } from "inversify";
import { TYPES } from "./types";
import {Warrior, Weapon, ThrowableWeapon, BindedWeapon} from "./interfaces";
import {Ninja, Katana, Shuriken, BindedKatana} from "./entities";

const container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
container.bind<BindedWeapon<Katana>>(TYPES.BindedWeapon).to(BindedKatana);

export { container };