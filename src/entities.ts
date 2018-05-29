import { injectable, inject } from "inversify";
import "reflect-metadata";
import {Weapon, ThrowableWeapon, Warrior, BindedWeapon} from "./interfaces";
import { TYPES } from "./types";

@injectable()
class Katana implements Weapon {
    public hit() {
        return "katana cut";
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "shuriken hit";
    }
}

@injectable()
class Ninja implements Warrior {
    @inject(TYPES.Weapon) private katana : Weapon;
    @inject(TYPES.ThrowableWeapon) private shuriken : ThrowableWeapon;
    @inject(TYPES.BindedWeapon) private bindedKatana : BindedWeapon<Katana>;

    public fight() {
        return Ninja.superFight() + ' '  + this.katana.hit();
    }

    public sneak() {
        return this.shuriken.throw();
    }

    public bindHit() {
        return this.bindedKatana.bindHit();
    }

    private static superFight() : string {
        return "super slash!";
    }
}

@injectable()
class BindedKatana<T extends Weapon> implements BindedWeapon<T> {
    @inject(TYPES.Weapon) private weapon : T;

    bindHit() : string {
        return "Binded " + this.weapon.hit();
    }
}


export { Katana, Shuriken, Ninja, BindedKatana };
