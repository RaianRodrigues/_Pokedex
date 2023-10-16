import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Center,
    Image,
    Text,
    VStack,
    UnorderedList,
    ListItem
} from '@chakra-ui/react';

import { Pokemon } from '@renderer/types/types';

const PokemonModal: React.FC<{

    pokemon: Pokemon;

    isOpen: boolean;

    onClose: () => void, cardBG?: string

}> = ({

    pokemon,

    isOpen,

    onClose,

}) => {

        return (

            <Modal isOpen={isOpen} onClose={onClose} size="sm">

                <ModalOverlay />

                <ModalContent

                    bg="rgba(36, 37, 42, 1)"

                    boxShadow="0px 0px 20px 10px rgba(36, 37, 42, 0.52)"

                    borderRadius="5px"

                >
                    <ModalCloseButton color="#fff" />

                    <ModalBody>

                        <Center flexDir="column">

                            <Image src={pokemon.image} alt={pokemon.name} />

                            <VStack align="start" spacing={2}>

                                <Text color="#fff">Nome: {pokemon.name}</Text>

                                <Text color="#fff">Peso: {pokemon.weight}</Text>

                                <Text color="#fff">Stats:</Text>

                                <UnorderedList>

                                    {Object.entries(pokemon.stats).map(([stat, value]) => (

                                        <ListItem key={stat} color="#fff" letterSpacing="1px">

                                            {stat.toUpperCase()}: {value}

                                        </ListItem>

                                    ))}

                                </UnorderedList>

                            </VStack>

                        </Center>

                    </ModalBody>

                </ModalContent>

            </Modal>

        );

    };

export default PokemonModal;