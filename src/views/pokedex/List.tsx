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

  return (
    <ul
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
