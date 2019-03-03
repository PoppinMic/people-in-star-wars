import React from 'react';
import { connect } from 'react-redux';

import { nextPage, prevPage } from '../../actions';

const Pagination = ({ pageNum, totalPage, getNextPage, getPrevPage }) => {
  const maxPageNum = Math.ceil(totalPage / 10);
  return (
    <div className="pagination">
      <button disabled={pageNum === 1} onClick={getPrevPage}>
        Prev
      </button>{' '}
      <span>
        {pageNum} / {maxPageNum}
      </span>{' '}
      <button disabled={pageNum === maxPageNum} onClick={getNextPage}>
        Next
      </button>
    </div>
  );
};

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
