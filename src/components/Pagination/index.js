import React from 'react';
import { connect } from 'react-redux';

import { requestPeople } from '../../actions';

const Pagination = ({ pageNum, totalPage }) => (
  <div className="pagination">
    <button>Prev</button>{' '}
    <span>
      {pageNum} / {totalPage}
    </span>{' '}
    <button>Next</button>
  </div>
);

const mapStateToProps = ({ pageNum }) => ({
  pageNum
});

const mapDispatchToProps = dispatch => ({
  requestPeople: () => dispatch(requestPeople())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
