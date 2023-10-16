import React from 'react';

import { Divider, Flex, IconButton } from '@chakra-ui/react';

import { TbPokeball } from 'react-icons/tb';

import { AiOutlineSearch } from 'react-icons/ai';

import { BiLeaf } from 'react-icons/bi';

interface PokeMenuProps {

    onMenuItemClick: (item: string) => void;

}

const PokeMenu: React.FC<PokeMenuProps> = ({ onMenuItemClick }) => {

    return (

        <Flex

            w="15rem"

            h="3.3rem"

            bg="rgba(24, 24, 24, 0.80)"

            backdropFilter="blur(5px) saturate(100%)"

            justifyContent="space-around"

            borderRadius="10px"

            alignItems="center"

            position="fixed"

            bottom="5"

            left="50%"

            transform="translateX(-50%)"

            zIndex="9999"

            boxShadow={"0 2px 4px rgba(180, 180, 180, 0.2)"}

        >

            <IconButton

                cursor={"pointer"}

                aria-label="Grid"

                p="20px"

                icon={<TbPokeball color="#fff" size="1.5rem" />}

                onClick={() => onMenuItemClick('pokemonGrid')}

                bg="#eb6f925A"

                _hover={{

                    bg: '#eb6f928A',

                    marginTop: "-5px",

                    boxShadow: "0 0 5px rgba(235, 111, 146, 0.2)"
                }}
            />

            <Divider
                orientation='vertical'
                bg={"#fff"}
                h={"3px"}
                w={"2px"}
            />

            <IconButton

                cursor={"pointer"}

                aria-label="Search"

                p="20px"

                icon={<AiOutlineSearch color="#fff" size="1.5rem" />}

                onClick={() => onMenuItemClick('pokemonSearch')}

                bg="#f6c1775A"

                _hover={{

                    bg: '#f6c1778A',

                    marginTop: "-5px",

                    boxShadow: "0 0 5px rgba(246, 193, 119, 0.2)"
                }}
            />

            <Divider
                orientation='vertical'
                bg={"#fff"}
                h={"3px"}
                w={"2px"}
            />

            <IconButton

                cursor={"pointer"}

                aria-label="Nature"

                p="20px"

                icon={<BiLeaf color="#fff" size="1.5rem" />}

                onClick={() => onMenuItemClick('pokemonNature')}

                bg="#9ccfd85A"

                _hover={{

                    bg: '#9ccfd88A',

                    marginTop: "-5px",

                    boxShadow: "0 0 5px rgba(156, 207, 216, 0.2)"

                }}
            />

        </Flex>

    );

};

export default PokeMenu;