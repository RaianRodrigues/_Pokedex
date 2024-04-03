import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

import { Pokemon } from '@renderer/types/types';

export function usePokemonGrid() {

	const { data: pokemonList = [], isLoading } = useQuery<Pokemon[]>(

		['pokemonList'],

		async () => {

			const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');

			const { results } = response.data;

			const pokemonPromises = results.map(async ({ url }) => {

				const { data: pokemonData } = await axios.get(url);

				const name = pokemonData.name;

				const image = pokemonData.sprites.front_default;

				const types = pokemonData.types.map((type: { type: { name: string; }; }) => type.type.name);

				const weight = pokemonData.weight;

				const stats = {

					attack: pokemonData.stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat || 0,

					defense: pokemonData.stats.find((stat: any) => stat.stat.name === 'defense')?.base_stat || 0,

					speed: pokemonData.stats.find((stat: any) => stat.stat.name === 'speed')?.base_stat || 0,

					specialAttack: pokemonData.stats.find((stat: any) => stat.stat.name === 'special-attack')?.base_stat || 0,

					specialDefense: pokemonData.stats.find((stat: any) => stat.stat.name === 'special-defense')?.base_stat || 0,

				};

				const pokemon: Pokemon = {

					name,

					image,

					types,

					weight,

					stats,

				};

				return pokemon;

			});

			return Promise.all(pokemonPromises);

		}

	);

	return { pokemonList, isLoading };

}