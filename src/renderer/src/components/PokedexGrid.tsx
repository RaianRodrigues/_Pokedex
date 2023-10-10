import { useQuery } from '@tanstack/react-query';

import axios from 'axios';

import { SimpleGrid, Spinner } from '@chakra-ui/react';

import { Pokemon } from '@renderer/types/types';

import PokemonCard from './PokemonCard';

// import Layout from './Layout';

const getPokemonList = async () => {

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=99');

    const results = response.data.results;

    const pokemonPromises = results.map(async (result: any) => {

        const pokemonResponse = await axios.get(result.url);

        const pokemonData = pokemonResponse.data;

        const pokemon: Pokemon = {

            name: pokemonData.name,

            image: pokemonData.sprites.front_default,

            types: pokemonData.types.map((type: any) => type.type.name),

            weight: pokemonData.weight,

            stats: {

                attack: pokemonData.stats[1].base_stat,

                defense: pokemonData.stats[2].base_stat,

                speed: pokemonData.stats[5].base_stat,

                specialAttack: pokemonData.stats[3].base_stat,

                specialDefense: pokemonData.stats[4].base_stat,

            },

        };

        return pokemon;

    });

    return Promise.all(pokemonPromises);

};

const PokedexGrid: React.FC = () => {

    const { data: pokemonList = [], isLoading } = useQuery(['pokemonList'], getPokemonList);

    return (

        <>

            {isLoading ? ( // Exibir o spinner enquanto a requisição está em andamento

                <Spinner

                    size="xl"

                    position="absolute"

                    top="50%"

                    left="50%"

                    transform="translate(-50%, -50%)"

                    color='#fff'
                />

            ) : (

                <SimpleGrid columns={3} spacing={5} p={"20px"}>

                    {pokemonList.map((pokemon) => (

                        <PokemonCard key={pokemon.name} pokemon={pokemon} />

                    ))}

                </SimpleGrid>
            )}

        </>
    );

};

export default PokedexGrid;