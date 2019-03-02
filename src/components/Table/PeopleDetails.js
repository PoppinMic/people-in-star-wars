import React from 'react';

const PeopleDetails = ({ name, height, birthY, gender, films }) => (
  <div>
    <h2>People Details</h2>
    <div>
      <h3>Name:</h3> <span>{name}</span>
    </div>
    <div>
      <h3>height:</h3> <span>{height}</span>
    </div>
    <div>
      <h3>Birth Year:</h3> <span>{birthY}</span>
    </div>
    <div>
      <h3>Gender:</h3> <span>{gender}</span>
    </div>
    <div>
      <h3>Films appeared:</h3>{' '}
      {films.map(film => (
        <div key={film}>{film}</div>
      ))}
    </div>
  </div>
);

export default PeopleDetails;
