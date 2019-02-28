import React from 'react';
import { connect } from 'react-redux';

import { nextPage, prevPage } from '../../actions';

const Pagination = ({ pageNum, totalPage, getNextPage, getPrevPage }) => (
  <div className="pagination">
    <button onClick={getPrevPage}>Prev</button>{' '}
    <span>
      {pageNum} / {Math.ceil(totalPage / 10)}
    </span>{' '}
    <button onClick={getNextPage}>Next</button>
  </div>
);

const mapStateToProps = ({ pageNum }) => ({
  pageNum
});

const mapDispatchToProps = dispatch => ({
  getNextPage: () => dispatch(nextPage),
  getPrevPage: () => dispatch(prevPage)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
