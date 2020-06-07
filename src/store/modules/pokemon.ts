import moduleGenerator from "store/module-generator";

export interface PokemonModuleFiltersInterface {
  offset: number,
  limit: number,
}

export interface PokemonModuleInterface {
  list: any[],
  read: any,
  filters: PokemonModuleFiltersInterface,
}

export default moduleGenerator();
