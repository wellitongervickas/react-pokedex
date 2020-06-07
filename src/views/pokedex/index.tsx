import React, {
  useState,
  useEffect,
  useContext,
  useCallback,

} from 'react';

import { debounce } from 'lodash';

import Loading from 'components/Loading';
import List from 'views/pokedex/List';

import client from 'api/client';
import context from 'store';

import pokemonSerrializer from 'helpers/serializers/pokemon';
import Header from 'components/Header';

const Pokedex = () => {
  const { states, setStore } = useContext(context);
  const [loadingText, setLoadingText] = useState('Loading pokemons...');

  const handleGetPokemons = useCallback(async (filters: any) => {
    setStore('pokemon/loading', true);

    await client.get('/pokemon', { params: filters }).then(async({ results }: any) => {
      const list = pokemonSerrializer(results);

      setLoadingText('Loading details...');

      const result = await Promise
        .all(list.map((pokemon) => client.get(`pokemon/${pokemon.id}`)))
        .then((r:any) => list.map((pokemon) => {
          setLoadingText('');
          const details = r.find((p: any) => p.id === pokemon.id);

          return {
            ...pokemon,
            sprites: details.sprites,
            types: details.types,
          }
        }));


      setStore('pokemon/loading', false);
      setStore('pokemon/list', states.pokemon.list.concat(result));
      setStore('pokemon/filters', filters);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = useCallback(debounce(() => {
    const scroll = document.body.getBoundingClientRect();
    const { offset, limit } = states.pokemon.filters;

    if (scroll.bottom <= window.innerHeight) {
      handleGetPokemons({
        offset: offset + 10,
        limit,
      });
    }
  }, 600), []);

  useEffect(() => {
    setStore('pokemon/list', []);
    handleGetPokemons({
      offset: 0,
      limit: 10,
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      setStore('pokemon/clear');
      window.removeEventListener('scroll', handleScroll);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setStore]);

  return (
    <main>
      <Header useNavigation={false} />
      <Loading label={loadingText} open={!!loadingText.length} />
      <List />
    </main>
  );
}

export default Pokedex;
