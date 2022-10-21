export interface IPerson {
  id: number;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
}

export interface IPlanet {
  id: number;
  name: string;
  population: string;
  rotationPeriod: string;
  diameter: string;
}

export interface IStarship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
}

export interface IDSwapiOptions<T> {
  [name: string]: T
}

export type TRenderChild = string | JSX.Element;
export type TItemDetails = IPerson | IPlanet | IStarship;
export type TItemDetailsArray = IPerson[] | IPlanet[] | IStarship[];