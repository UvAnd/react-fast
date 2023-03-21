import { API_BASE, IMG_BASE } from 'constants/constants';
import { IDSwapiOptions, IPerson, IStarship, IPlanet } from 'interfaces/interfaces';

// TODO: Check how create Dynamic object
export const getResource = async (url: string): Promise<any> => {
  const res = await fetch(`${API_BASE}${url}`);

  if (!res.ok) {
    throw new Error(`Could not  fetch ${url} to ${res.status}`);
  }

  const result = await res.json();

  return result;
};

// TODO: Check how create Dynamic object
const extractId = (item: any): number => {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
};

const transformPerson = (person: IPerson): IPerson => {
  return {
    ...person,
    id: extractId(person),
  };
};

// TODO: Property 'rotation_period' does not exist on type 'IPlanet'.
const transformPlanet = (planet: IDSwapiOptions<string>): IPlanet => {
  return {
    id: extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  };
};

const transformStarship = (starship: IStarship): IStarship => {
  return {
    ...starship,
    id: extractId(starship),
  };
};

export const getAllPeople = async (): Promise<IPerson[]> => {
  const res = await getResource(`/people/`);
  return res.results.map(transformPerson);
};

export const getPerson = async (id: number | null): Promise<IPerson> => {
  const person = await getResource(`/people/${id}/`);
  return transformPerson(person);
};

export const getAllPlanets = async (): Promise<IPlanet[]> => {
  const res = await getResource(`/planets/`);
  return res.results.map(transformPlanet);
};

export const getPlanet = async (id: number): Promise<IPlanet> => {
  const planet = await getResource(`/planets/${id}/`);
  return transformPlanet(planet);
};

export const getAllStarships = async (): Promise<IStarship[]> => {
  const res = await getResource(`/starships/`);
  return res.results.map(transformStarship);
};

export const getStarship = async (id: number): Promise<IStarship> => {
  const starship = await getResource(`/starships/${id}/`);
  return transformStarship(starship);
};

export const getPersonImg = (id: number): string => {
  return `${IMG_BASE}/characters/${id}.jpg`;
};

export const getStarshipImg = (id: number): string => {
  return `${IMG_BASE}/starships/${id}.jpg`;
};

export const getPlanetImg = (id: number): string => {
  return `${IMG_BASE}/planets/${id}.jpg`;
};

export const swapiServiceUtils = {
  getPerson,
  getPlanet,
  getStarship,
  transformPerson,
  transformPlanet,
  transformStarship,
  getPersonImg,
  getStarshipImg,
  getPlanetImg,
};
