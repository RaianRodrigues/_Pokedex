import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

import { Pokemon } from '@renderer/types/types';

export function usePokemonByType() {

	const [selectedType, setSelectedType] = useState('');

	const { data: typesData } = useQuery<string[]>(['pokemonTypes'], async () => {

		const response = await axios.get('https://pokeapi.co/api/v2/type/');

		const types = response.data.results.map((type: { name: string }) => type.name);

		return types;

	});

	const fetchPokemonByType = async (selectedType: string) => {

		try {

			const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`);

			const pokemonList = response.data.pokemon;

			const formattedPokemonList: Pokemon[] = await Promise.all(

				pokemonList.map(async (pokemonData: any) => {

					const pokemonResponse = await axios.get(pokemonData.pokemon.url);

					const { name } = pokemonData.pokemon;

					const { sprites, types, weight, stats } = pokemonResponse.data;

					const image = sprites.front_default;

					const attack = stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat || 0;

					const defense = stats.find((stat: any) => stat.stat.name === 'defense')?.base_stat || 0;

					const speed = stats.find((stat: any) => stat.stat.name === 'speed')?.base_stat || 0;

					const specialAttack = stats.find((stat: any) => stat.stat.name === 'special-attack')?.base_stat || 0;

					const specialDefense = stats.find((stat: any) => stat.stat.name === 'special-defense')?.base_stat || 0;

					return {

						name,

						image,

						types: types.map((type: { type: { name: string } }) => type.type.name),

						weight,

						stats: {

							attack,

							defense,

							speed,

							specialAttack,

							specialDefense,

						},

					};

				})

			);

			return formattedPokemonList;

		} catch (error) {

			throw new Error('Failed to fetch Pokémon by type.');

		}

	};

	const { data: pokemonList, isLoading: typesDataLoading } = useQuery<Pokemon[]>(

		['selectedType', selectedType],

		() => fetchPokemonByType(selectedType),

		{ enabled: !!selectedType }

	);

	const handleTypeSelect = (newType: string) => {

		setSelectedType(newType);

	};

	const isLoadingPokemonList = selectedType && typesDataLoading;

	return { selectedType, typesData, pokemonList, handleTypeSelect, isLoadingPokemonList };

}