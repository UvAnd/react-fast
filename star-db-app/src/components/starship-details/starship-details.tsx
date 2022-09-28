import React from 'react';


const StarshipDetails = (): JSX.Element => {
  return (
    <div className="person-details card">
      <img className="person-image"
        src="https://starwars-visualguide.com/assets/img/characters/3.jpg"  alt=''/>

      <div className="card-body">
        <h4>PlanetDetails</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>male</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>43</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>red</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StarshipDetails;
