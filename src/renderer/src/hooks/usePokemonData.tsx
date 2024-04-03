import { useState } from 'react';

import axios from 'axios';

import { Pokemon } from '@renderer/types/types';

export function usePokemonData() {

  const [isLoading, setIsLoading] = useState(false);

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const searchPokemon = async (pokemonName: string) => {

    setIsLoading(true);

    try {

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

      const newPokemon: Pokemon = {

        name: data.name,

        image: data.sprites.front_default,

        types: data.types.map((type: { type: { name: string } }) => type.type.name),

        weight: data.weight,

        stats: {

          attack: data.stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat || 0,

          defense: data.stats.find((stat: any) => stat.stat.name === 'defense')?.base_stat || 0,

          speed: data.stats.find((stat: any) => stat.stat.name === 'speed')?.base_stat || 0,

          specialAttack: data.stats.find((stat: any) => stat.stat.name === 'special-attack')?.base_stat || 0,

          specialDefense: data.stats.find((stat: any) => stat.stat.name === 'special-defense')?.base_stat || 0,

        },

      };

      setPokemon(newPokemon);

    } catch (error) {

      console.error('Error while fetching Pokémon:', error);

    }

    setIsLoading(false);

  };

  return { isLoading, pokemon, searchPokemon };

}