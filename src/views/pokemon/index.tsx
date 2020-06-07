import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react';

import { useParams } from 'react-router-dom';

import 'views/pokemon/styles.scss';

import client from 'api/client';
import context from 'store';

import Header from 'components/Header';
import Widget from 'components/Widget';
import PokemonBox from 'components/Pokemon';
import Tabs from 'components/Pokemon/Tabs';

import Loading from 'components/Loading';

const Pokemon = () => {
  const { states, setStore } = useContext(context);
  const [loading, setLoading] = useState('Loading details...');
  const { id } = useParams();

  const details = states.pokemon.read;
  const showDetails = states.pokemon.read && !loading.length;

  const handleGetPokemon = useCallback(async () => {
    setStore('pokemon/loading', true);

    await client.get(`pokemon/${id}`)
      .then((r: any) => {
        setStore('pokemon/read', r);
        setStore('pokemon/loading', false);

        setLoading('');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStore('pokemon/read', {});
    handleGetPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      setStore('pokemon/read', {});
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setStore]);

  return (
    <main>
      <Header />
      <Loading label={loading} open={!loading.length} />
      {showDetails && (
        <>
          <div className="pokemon-intro">
            <PokemonBox
              loading={states.pokemon.loading}
              name={details.name}
              sprites={details.sprites}
              types={details.types}
              id={details.id}
            />
          </div>
          <div className="pokemon-details">
            <div className="pokemon-details-exp">
              {details.base_experience}
            </div>
            <Widget>
              <Tabs
                height={states.pokemon.read.height}
                species={states.pokemon.read.species}
                weight={states.pokemon.read.weight}
                abilities={states.pokemon.read.abilities}
                stats={states.pokemon.read.stats}
                forms={states.pokemon.read.forms}
              />
            </Widget>
          </div>
        </>
      )}
    </main>
  );
};

export default Pokemon;
