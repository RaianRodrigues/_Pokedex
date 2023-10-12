import React, { useState } from 'react';

import { Badge, Image, HStack, VStack, Heading, Flex, Center } from '@chakra-ui/react';

import { Pokemon } from '@renderer/types/types';

import PokemonModal from './PokemonModal';

const typeColors = {

  normal: '#A8A878',

  fire: '#F08030',

  water: '#6890F0',

  grass: '#78C850',

  flying: '#A890F0',

  fighting: '#C03028',

  poison: '#A040A0',

  electric: '#F8D030',

  ground: '#E0C068',

  rock: '#B8A038',

  psychic: '#F85888',

  ice: '#98D8D8',

  bug: '#A8B820',

  ghost: '#705898',

  steel: '#B8B8D0',

  dragon: '#7038F8',

  dark: '#705848',

  fairy: '#EE99AC',

  Default: '#fff',
};

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {

  const type = pokemon.types[0] || 'Default';

  const pkmColor = typeColors[type] || typeColors.Default;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {

    setIsModalOpen(true);

  };

  const closeModal = () => {

    setIsModalOpen(false);

  };

  return (

    <HStack

      justifySelf={"center"}

      bg="rgba(124, 124, 124, 0.25)"

      backdropFilter="blur(5px) saturate(150%)"

      w="15rem"

      h="8rem"

      spacing={0}

      overflow="hidden"

      borderLeftWidth={"10px"}

      borderColor={pkmColor}

      borderRadius={"5px"}

      onClick={openModal}

    >

      <VStack h="100%" w="60%" justifyContent="space-around">

        <Heading size="sm" textAlign="center" w="100%" color={"#fff"}>

          {pokemon.name.toUpperCase()}

        </Heading>

        <Flex flexDir="row" gap="5px">

          {pokemon.types.map((type) => (

            <Badge

              key={type}

              variant="solid"

              bg={typeColors[type]} //{"transparent"}

              border="2px"

              borderColor={typeColors[type]}

              w="4rem"

              textAlign="center"

              fontSize="9px"

              letterSpacing="2px"

              p="2px"

              borderRadius="5px"

            >
              {type}

            </Badge>

          ))}

        </Flex>

      </VStack>

      <Center w="40%" h="100%">

        <Image src={pokemon.image} alt={pokemon.name} />

      </Center>

      <PokemonModal pokemon={pokemon} isOpen={isModalOpen} onClose={closeModal} cardBG={pkmColor} />

    </HStack>

  );

};

export default PokemonCard;