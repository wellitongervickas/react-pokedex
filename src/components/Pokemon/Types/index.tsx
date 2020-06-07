import React from 'react';

import 'components/Pokemon/Types/styles.scss';

interface PokemonTypeInterface {
  name: string,
}

export interface PokemonTypesInterface {
  type: PokemonTypeInterface,
}

const PokemonTypes = ({ type }: PokemonTypesInterface) => (
  <span className={`pokemon-types pokemon-types-${type.name}`}>{type.name}</span>
);

export default PokemonTypes;
