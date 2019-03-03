import styled from 'styled-components';
import { COLOR_BOX_SHADOW, COLOR_TABLE_BORDER } from '../styles/constants';

export const TableWrapper = styled.div`
  margin: 1rem 0;
  box-shadow: 0 0 3px 3px ${COLOR_BOX_SHADOW};
  padding: 1rem;

  /* https://stackoverflow.com/questions/1257430/css-border-only-inside-the-table */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table td,
  table th {
    border: 1px solid ${COLOR_TABLE_BORDER};
    padding: 0.5rem 1.5rem;
    text-align: center;
    min-width: 100px;
  }
  table tr:first-child th {
    border-top: 0;
  }
  table tr:last-child td {
    border-bottom: 0;
  }
  table tr td:first-child,
  table tr th:first-child {
    border-left: 0;
  }
  table tr td:last-child,
  table tr th:last-child {
    border-right: 0;
  }
`;

export const TBodyRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
