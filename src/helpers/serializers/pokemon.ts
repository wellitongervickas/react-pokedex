interface PokemonItemsInterface {
  type: string,
}

interface PokemonInterface {
  name: string,
  url: string,
}

const pokemonIdGenerator = (url: string) => Number(url.slice(url.indexOf('pokemon/')).split('/')[1])

const pokemonSerrializer = (results: PokemonInterface[]) => results.map((result) => ({
  id: pokemonIdGenerator(result.url),
  name: result.name,
}));

export default pokemonSerrializer;
