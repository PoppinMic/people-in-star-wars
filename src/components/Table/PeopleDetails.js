import React from 'react';

const PeopleDetails = ({ name, height, birthY, gender, films }) => (
  <div>
    <h2>People Details</h2>
    <p>
      <h3>Name:</h3> {name}
    </p>
    <p>
      <h3>height:</h3> {height}
    </p>
    <p>
      <h3>Birth Year:</h3> {birthY}
    </p>
    <p>
      <h3>Gender:</h3> {gender}
    </p>
    <p>
      <h3>Films appeared:</h3>{' '}
      {films.map(film => (
        <div>{film}</div>
      ))}
    </p>
  </div>
);

export default PeopleDetails;
