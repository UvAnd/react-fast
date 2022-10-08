import React, { Component, useEffect, useState } from 'react';
import { useGetPerson } from '../../hooks/swapi-service.hooks';
import { IPerson } from '../../interfaces/interfaces';
import Spinner from '../spinner';

import './person-details.css';
interface IPersonDetailsProps {
  selectedPerson: number | null;
}

const PersonDetails = ({selectedPerson}: IPersonDetailsProps): JSX.Element => {

  const [person, setPerson] = useState<IPerson | null>(null);
  const [isLoadin, setIsLoadin] = useState<boolean>(false);
  const getPerson = useGetPerson;

  useEffect(() => {
    updatePerson();

    console.log(person);
  }, [selectedPerson]);

  const updatePerson = () => {
    const personId = selectedPerson;
    if (!personId) { return; }

    setIsLoadin(true);
    getPerson(personId).then((personItem) => {
      setPerson(personItem);
      setIsLoadin(false);
    })
  }


  if (!person) {
    return <span>Select a person from a list</span>
  }

  if (isLoadin) {
    return <Spinner></Spinner>
  }

  const {  id,
    name,
    gender,
    birthYear,
    eyeColor} = person;

  return (
    <div className="person-details card">
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  alt=''/>

      <div className="card-body">
        <h4>{name}</h4>
        <h6>{selectedPerson}</h6>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PersonDetails;
