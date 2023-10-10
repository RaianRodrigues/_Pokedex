import {
    Box,
    Badge,
    Image,
    HStack,
    VStack,
    Heading,
    Flex,
    Center,
  } from '@chakra-ui/react';
  
  import { Pokemon } from '@renderer/types/types';
  
  const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
    return (
      <HStack
        bg="rgba(255, 255, 255, 0.15)" // Cor de fundo com opacidade
        backdropFilter="blur(10px)" // Desfoque
        w="20rem"
        h="8rem"
        spacing={0}
        borderRadius="10px"
        overflow="hidden" // Para lidar com o desfoque corretamente
      >
        <Box
          bg="rgba(0, 0, 0, 0.2)" // Cor de fundo da parte esquerda com opacidade
          w="5%"
          h="100%"
          borderTopLeftRadius="10px"
          borderEndStartRadius="10px"
        />
  
        <VStack h="100%" w="45%" justifyContent="space-around">
          <Heading size="md" textAlign="center" w="100%">
            {pokemon.name}
          </Heading>
  
          <Flex flexDir="row" gap="10px" justifyContent="center">
            {pokemon.types.map((type) => (
              <Badge
                key={type}
                variant="outline"
                colorScheme="teal"
                w="4rem"
                textAlign="center"
                p="2px"
                borderRadius="5px"
              >
                {type}
              </Badge>
            ))}
          </Flex>
        </VStack>
  
        <Center w="50%" h="100%">
          <Image src={pokemon.image} alt={pokemon.name} />
        </Center>
      </HStack>
    );
  };
  
  export default PokemonCard;
  