

export const pokemonsIds = [1, 2, 30, 50, 60];


interface Pokemon {
    id: number;
    name: string;
    age: number
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: "bulbasaur",
    age: 28,
}

export const charmander: Pokemon = {
    id: 4,
    name: "charmander",
    age: 23,
}


export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur, charmander);


console.log(pokemons)