import React from 'react';
import { useParams } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';


const StarshipSingleDetails = (): JSX.Element => {
  const params = useParams();
  const idStarshipDetails =  Number(params.id);

  return (
    <StarshipDetails itemId={idStarshipDetails}></StarshipDetails>
  )
}

export default StarshipSingleDetails;
