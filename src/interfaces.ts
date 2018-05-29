export interface Warrior {
   fight() : string;
   sneak() : string;
   bindHit() : string;
}

export interface Weapon {
   hit() : string;
}

export interface ThrowableWeapon {
    throw() : string;
}

//Generic interface example
export interface BindedWeapon<T> {
    bindHit() : string;
}