import React, { useState } from 'react';

import PokemonGrid from './PokemonGrid';

import PokemonSearch from './PokemonSearch';

import PokeMenu from './PokeMenu';

import GettingStarted from './GettingStarted';

const Content: React.FC = () => {

  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const handleMenuItemClick = (content: string) => {

    setSelectedContent(content);

  };

  return (

    <>

      {selectedContent !== null && <PokeMenu onMenuItemClick={handleMenuItemClick} />}

      {selectedContent === 'pokemonGrid' ? <PokemonGrid /> : null}

      {selectedContent === 'pokemonSearch' ? <PokemonSearch /> : null}

      {selectedContent === null ? <GettingStarted onGettingStartedClick={() => handleMenuItemClick('pokemonGrid')} /> : null}

    </>

  );

};

export default Content;