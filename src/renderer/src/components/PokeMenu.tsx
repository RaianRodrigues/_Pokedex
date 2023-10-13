import React from 'react';

import { Flex, IconButton } from '@chakra-ui/react';

import { TbPokeball } from 'react-icons/tb';

import { AiOutlineSearch } from 'react-icons/ai';

interface PokeMenuProps {

    onMenuItemClick: (item: string) => void;

}

const PokeMenu: React.FC<PokeMenuProps> = ({ onMenuItemClick }) => {

    return (

        <Flex

            w="15rem"

            h="3.3rem"

            bg="rgba(24, 24, 24, 0.80)"

            backdropFilter="blur(5px) saturate(150%)"

            justifyContent="space-around"

            borderRadius="10px"

            alignItems="center"

            position="fixed"

            bottom="5"

            left="50%"

            transform="translateX(-50%)"

            zIndex="9999"

            boxShadow={"0 5px 7px rgba(180, 180, 180, 0.2)"}

        >

            <IconButton

                aria-label="PokeIcon"

                p="20px"

                icon={<TbPokeball color="#fff" size="1.5rem" />}

                onClick={() => onMenuItemClick('pokemonGrid')}

                bg="#7777771A"

                _hover={{

                    bg: '#77777733',

                    color: '#fff',

                }}
            />
            <IconButton

                aria-label="Search"

                p="20px"

                icon={<AiOutlineSearch color="#fff" size="1.5rem" />}

                onClick={() => onMenuItemClick('pokemonSearch')}

                bg="#7777771A"

                _hover={{

                    bg: '#77777733',

                    color: '#fff',

                }}

            />

        </Flex>

    );

};

export default PokeMenu;