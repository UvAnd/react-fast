import { API_BASE, IMG_BASE } from "../constants/constants";
import { IDSwapiOptions, IPerson, IStarship } from "../interfaces/interfaces";
import { IPlanet } from "../interfaces/interfaces";

export const useGetResource = async (url: string) => {
  const res = await fetch(`${API_BASE}${url}`);

  if(!res.ok) {
    throw new Error(`Could not  fetch ${url} to ${res.status}`);
  }

  return await res.json();
}

export const useGetAllPeople = async () => {
  const res = await useGetResource(`/people/`);
  return res.results.map(useTransformPerson);
}

export const useGetPerson = async (id: number | null) => {
  const person = await useGetResource(`/people/${id}/`);
  return useTransformPerson(person);
}

export const useGetAllPlanets = async () => {
  const res = await useGetResource(`/planets/`);
  return res.results.map(useTransformPlanet);
}

export const useGetPlanet = async (id: number) => {
  const planet = await useGetResource(`/planets/${id}/`);
  return useTransformPlanet(planet);
}

export const useGetAllStarships = async () => {
  const res = await useGetResource(`/starships/`);
  return res.results.map(useTransformStarship);
}

export const useGetStarship = async (id: number) => {
  const starship = await useGetResource(`/starships/${id}/`);
  return useTransformStarship(starship);
}

// TODO: Check how create Dynamic object
const useExtractId = (item: any)=> {
  const idRegExp = /\/([0-9]*)\/$/;
  return item.url.match(idRegExp)[1];
}

const useTransformPerson = (person: IPerson): IPerson => {
  return {
    id: useExtractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birthYear,
    eyeColor: person.eyeColor
  }
}

// TODO: Property 'rotation_period' does not exist on type 'IPlanet'.
const useTransformPlanet = (planet: IDSwapiOptions<string>): IPlanet => {
  return {
    id: useExtractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  }
}

const useTransformStarship = (starship: IStarship): IStarship => {
  return {
    id: useExtractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity
  }
}

export const useGetPersonImg = (id: number)=> {
  return `${IMG_BASE}/characters/${id}.jpg`;
}

export const useGetStarshipImg = (id: number)=> {
  return `${IMG_BASE}/starships/${id}.jpg`;
}

export const useGetPlanetImg = (id: number)=> {
  return `${IMG_BASE}/planets/${id}.jpg`;
}

export const swapiServiceHooks = {
  useGetPerson,
  useGetPlanet,
  useGetStarship,
  useTransformPerson,
  useTransformPlanet,
  useTransformStarship,
  useGetPersonImg,
  useGetStarshipImg,
  useGetPlanetImg,
};