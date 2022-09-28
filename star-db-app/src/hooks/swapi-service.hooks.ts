import { API_BASE } from "../constants/constants";

export const useGetResource = async (url: any) => {
  const res = await fetch(`${API_BASE}${url}`);

  if(!res.ok) {
    throw new Error(`Could not  fetch ${url} to ${res.status}`);
  }

  return await res.json();
}

export const useGetAllPeople = async () => {
  const res = await useGetResource(`/people/`);
  return res.results;
}

export const useGetPerson = async (id: number) => {
  const person = await useGetResource(`/people/${id}/`);
  return person;
}

export const useGetAllPlanets = async () => {
  const res = await useGetResource(`/planets/`);
  return res.results;
}

export const useGetPlanet = async (id: number) => {
  const planet = await useGetResource(`/planets/${id}/`);
  return {planet, id};
}

export const useGetAllStarships = async () => {
  const res = await useGetResource(`/starships/`);
  return res.results;
}

export const useGetStarship = async (id: number) => {
  const starship = await useGetResource(`/starships/${id}/`);
  return starship;
}