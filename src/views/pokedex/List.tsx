import React, {
  useContext,
  useRef,
} from 'react';

import context from '../../store';

import Pokemon, {
  PokemonInterface
} from 'components/Pokemon';

import 'views/pokedex/styles.scss';

const PokedexList = () => {
  const list = useRef(null);
  const { states } = useContext(context);

  const handleScroll = () => {
    // // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    // //   console.log('bottom');
    // // }

    // const { offsetHeight, scrollHeight }:any = list.current;

    // console.log(list.current)

    // console.log(offsetHeight);

    // console.log(scrollHeight)

    // // if (list && list.current) {
    // //   console.log();
    // // }

    console.log(document.body.offsetHeight);
  };

  return (
    <ul
      onScroll={handleScroll}
      className="list-unstyled pokedex-list"
      ref={list}
    >
      {states.pokemon.list.map((pokemon: PokemonInterface) => (
        <li key={pokemon.id}>
          <Pokemon
            id={pokemon.id}
            name={pokemon.name}
            sprites={pokemon.sprites}
            types={pokemon.types}
            loading={states.pokemon.loading}
          />
        </li>
      ))}
    </ul>
  );
};

export default PokedexList;
