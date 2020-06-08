import pokemonSerrializer from './pokemon';

describe('Helpers details name', () => {
  it('should be defined', () => {
    expect(pokemonSerrializer).toBeDefined();
  });

  it('should render pokemon serialize object', () => {
    const results = [{
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/22',
    }];

    const pokemons = pokemonSerrializer(results);

    expect(pokemons).toMatchObject([{
      id: 22,
      name: 'pikachu',
    }]);
  });
});
