import React, { useState } from 'react';
import { Select, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Pokemon } from '@renderer/types/types';
import PokemonCard from './PokemonCard';


const fetchPokemonByType = async (selectedType: string) => {

    const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedType}`);

    const pokemonList = response.data.pokemon;

    const formattedPokemonList: Pokemon[] = await Promise.all(

        pokemonList.map(async (pokemonData: any) => {

            const pokemonResponse = await axios.get(pokemonData.pokemon.url);

            return {

                name: pokemonData.pokemon.name,

                image: pokemonResponse.data.sprites.front_default,

                types: pokemonResponse.data.types.map((type: any) => type.type.name),

                weight: pokemonResponse.data.weight,

                stats: {

                    attack: pokemonResponse.data.stats[1].base_stat,

                    defense: pokemonResponse.data.stats[2].base_stat,

                    speed: pokemonResponse.data.stats[5].base_stat,

                    specialAttack: pokemonResponse.data.stats[3].base_stat,

                    specialDefense: pokemonResponse.data.stats[4].base_stat,

                },

            };

        })

    );

    return formattedPokemonList;

};

const PokemonTypes = () => {

    const [selectedType, setSelectedType] = useState('');

    const { data: typesData } = useQuery<string[]>(

        ['pokemonTypes'],

        async () => {

            const response = await axios.get('https://pokeapi.co/api/v2/type/');

            return response.data.results.map((type: any) => type.name);

        }

    );

    const { data: pokemonList, isLoading: typesDataLoading } = useQuery<Pokemon[]>(

        ['selectedType', selectedType],

        () => fetchPokemonByType(selectedType), { enabled: !!selectedType, }

    );

    const handleTypeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {

        const newType = event.target.value;

        setSelectedType(newType);

    };

    const isLoadingPokemonList = selectedType && typesDataLoading;

    return (

        <Flex direction="column" align="center" justify="center" p={"10px"}>

            <Select
                value={selectedType}
                onChange={handleTypeSelect}
                bg={"rgb( 31, 29, 46)"}
                color={"#f6f6f6"}
                my={"10px"}
                _focus={{
                    background: "#f6f6f6",
                    color: "#000"
                }}
                cursor={"pointer"}
                w={"2xl"}
            >

                <option value="" hidden>Select a Pokémon type</option>

                {typesData?.map((type) => (

                    <option key={type} value={type}>

                        {type}

                    </option>

                ))}

            </Select>

            {isLoadingPokemonList ? (

                <Spinner

                    size="xl"

                    position="absolute"

                    top="50%"

                    left="50%"

                    transform="translate(-50%, -50%)"

                    color="#fff"
                />

            ) : (

                <>

                    {selectedType && (

                        <>

                            {pokemonList ? (

                                <SimpleGrid columns={4} spacing={5} p={"10px"}>

                                    {pokemonList.map((pokemon) => (

                                        <PokemonCard key={pokemon.name} pokemon={pokemon} />

                                    ))}

                                </SimpleGrid>

                            ) : (

                                <p>No Pokémon found for this type.</p>

                            )}

                        </>

                    )}

                </>

            )}

        </Flex>

    );

};

export default PokemonTypes;