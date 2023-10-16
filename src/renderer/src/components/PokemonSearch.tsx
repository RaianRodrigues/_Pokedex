import React, { useState } from 'react';
import { Input, Button, Spinner, Center, Box, HStack, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { Pokemon } from '@renderer/types/types';
import PokemonCard from './PokemonCard';

const PokemonSearch: React.FC = () => {

    const [pokemonName, setpokemonName] = useState('');

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {

        setIsLoading(true);

        try {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

            const pokemonData = response.data;

            const newPokemon: Pokemon = {

                name: pokemonData.name,

                image: pokemonData.sprites.front_default,

                types: pokemonData.types.map((type: { type: { name: string } }) => type.type.name),

                weight: pokemonData.weight,

                stats: {

                    attack: pokemonData.stats[1].base_stat,

                    defense: pokemonData.stats[2].base_stat,

                    speed: pokemonData.stats[5].base_stat,

                    specialAttack: pokemonData.stats[3].base_stat,

                    specialDefense: pokemonData.stats[4].base_stat,

                },

            };

            setPokemon(newPokemon);

        } catch (error) {

            console.error('Erro ao buscar o Pokémon:', error);

        }

        setIsLoading(false);

    };

    return (

        <Center w={"100vw"} h={"100vh"} flexDir={"column"} gap={"50px"}>

            <Heading color={"#fff"}>Search for Pokémon by name or id:</Heading>

            <HStack>

                <Input

                    value={pokemonName}

                    onChange={(e) => setpokemonName(e.target.value)}

                    placeholder="Nome do Pokémon"

                    color={"#fff"}

                    w={"15rem"}

                    h={"3rem"}

                />

                <Button onClick={handleSearch} colorScheme="teal">

                    Pesquisar

                </Button>

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