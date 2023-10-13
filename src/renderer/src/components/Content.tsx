import React, { useState, useEffect } from 'react';

import PokemonGrid from './PokemonGrid';

import PokemonSearch from './PokemonSearch';

import PokeMenu from './PokeMenu';

import { Heading } from '@chakra-ui/react';

const Content: React.FC = () => {

  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const handleMenuItemClick = (content: string) => {

    setSelectedContent(content);

  };

  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {

      if (e.ctrlKey && e.key === 'l' && selectedContent === null) {

        setSelectedContent('oi');
      }

    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {

      document.removeEventListener('keydown', handleKeyDown);

    };

  }, [selectedContent]);

  return (

    <>

      <PokeMenu onMenuItemClick={handleMenuItemClick} />

      {selectedContent === 'pokemonGrid' ? <PokemonGrid /> : null}

      {selectedContent === 'pokemonSearch' ? <PokemonSearch /> : null}

      {selectedContent === 'oi' ? <Heading position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color={"#fff"}>LEVI É GAY 💀</Heading> : null}

    </>

  );

};

export default Content;