import React from 'react';

import { Select, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';

import PokemonCard from './PokemonCard';

import { usePokemonByType } from '../hooks/usePokemonByType';

const PokemonTypes: React.FC = () => {

    const { selectedType, typesData, handleTypeSelect, isLoadingPokemonList, pokemonList } = usePokemonByType();

    return (

        <Flex direction="column" align="center" justify="center" p={"10px"}>

            <Select

                value={selectedType}

                onChange={(e) => handleTypeSelect(e.target.value)}

                bg={"rgb(31, 29, 46)"}

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