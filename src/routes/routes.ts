import Pokedex from 'views/pokedex';
import Pokemon from 'views/pokemon';

export default [{
  name: 'pokemon',
  path: '/pokemon/:id',
  component: Pokemon,
}, {
  name: 'pokedex',
  path: '/',
  component: Pokedex,
}, {
  name: 'pokedex-exactly',
  path: '/pokemon',
  component: Pokedex,
}];
