import React from 'react';

import { SimpleGrid, Spinner } from '@chakra-ui/react';

import PokemonCard from './PokemonCard';

import { usePokemonGrid } from '../hooks/usePokemonGrid';

const PokemonGrid: React.FC = () => {

    const { pokemonList, isLoading } = usePokemonGrid();

    return (

        <>

            {isLoading ? (

                <Spinner size="xl" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" />

            ) : (

                <SimpleGrid columns={4} spacing={5} p="20px">

                    {pokemonList.map((pokemon) => (

                        <PokemonCard key={pokemon.name} pokemon={pokemon} />

                    ))}

                </SimpleGrid>

            )}

        </>

    );

};

export default PokemonGrid;