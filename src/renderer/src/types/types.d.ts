export interface Pokemon {
    name: string;
    image: string;
    types: string[];
    weight: number;
    stats: {
        attack: number;
        defense: number;
        speed: number;
        specialAttack: number;
        specialDefense: number;
    };
}