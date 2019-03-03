import React from 'react';
import { connect } from 'react-redux';

import { InnerWrapper, Overlay, CloseButton } from './styles';
import { togglePopUp } from '../../actions';

const PeopleDetails = ({
  name,
  height,
  birthY,
  gender,
  films,
  togglePopUp
}) => (
  <Overlay>
    <InnerWrapper>
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
      <CloseButton onClick={togglePopUp}>Close</CloseButton>
    </InnerWrapper>
  </Overlay>
);

const mapDispatchToProps = dispatch => ({
  togglePopUp: () => dispatch(togglePopUp)
});

export default connect(
  null,
  mapDispatchToProps
)(PeopleDetails);
