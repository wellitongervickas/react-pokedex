import React from 'react';

import {
  Link,
} from 'react-router-dom';

import { FaSpinner } from "react-icons/fa";

import PokemonTypes, {
  PokemonTypesInterface,
} from 'components/Pokemon/Types';

import 'components/Pokemon/styles.scss';

interface PokemonComponentInterface {
  loading: boolean,
}

interface PokemonSpritesInterface {
  front_default: string,
}

export interface PokemonInterface extends PokemonComponentInterface {
  id: number,
  name: string,
  sprites: PokemonSpritesInterface,
  types?: PokemonTypesInterface[],
}

const Pokemon = ({ id, name, types = [], sprites, loading }: PokemonInterface) => (
  <Link to={`/pokemon/${String(id)}`} className="pokemon" data-id={id}>
    <div className="pokemon-details">
      <h2 className="pokemon-title">{name}</h2>
      <div className="pokemon-types-list">
        {loading ? <FaSpinner className="spin" /> : types.map((t, i) => <PokemonTypes key={i} type={t.type} />)}
      </div>
    </div>
    <div className="pokemon-avatar">
      {loading ? <FaSpinner className="spin" /> : (
        <img
          src={sprites.front_default}
          alt={name}
          height="96"
          width="96"
        />
      )}
    </div>
  </Link>
);

export default Pokemon;
