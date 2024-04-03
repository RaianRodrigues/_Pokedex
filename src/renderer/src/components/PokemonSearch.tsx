import React, { useState } from 'react';

import { Input, Spinner, Center, Box, HStack, Heading, IconButton } from '@chakra-ui/react';

import { AiOutlineSearch } from 'react-icons/ai';

import { usePokemonData } from '../hooks/usePokemonData';

import PokemonCard from './PokemonCard';

const PokemonSearch: React.FC = () => {

    const [pokemonName, setPokemonName] = useState('');

    const { isLoading, pokemon, searchPokemon } = usePokemonData();

    return (

        <Center w={"100vw"} h={"100vh"} flexDir={"column"} gap={"50px"}>

            <Heading color={"#fff"}>Search for Pokémon by name or id:</Heading>

            <HStack>

                <Input

                    value={pokemonName}

                    onChange={(e) => setPokemonName(e.target.value)}

                    placeholder="Pokémon Name or ID"

                    color={"#fff"}

                    w={"15rem"}

                    h={"3rem"}

                />

                <IconButton

                    cursor={"pointer"}

                    aria-label="Search"

                    py="25px"

                    px="15px"

                    onClick={() => searchPokemon(pokemonName)}

                    icon={<AiOutlineSearch color="#fff" size="1.5rem" />}

                    colorScheme="teal"

                />

            </HStack>

            {isLoading ? (

                <Spinner />

            ) : pokemon ? (

                <Box p={"20px"}>

                    <PokemonCard pokemon={pokemon} />

                </Box>

            ) : null}

        </Center>

    );

};

export default PokemonSearch;