import styled from 'styled-components';
import { lighten } from 'polished';
import {
  BP_TABLET_VERTICAL,
  DURATION_FAST,
  COLOR_BUTTON
} from '../styles/constants';

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const InnerWrapper = styled.div`
  padding: 2rem;
  position: fixed;
  width: 100%;
  max-width: ${BP_TABLET_VERTICAL}px;
  height: 90vh;
  min-height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 3px;
`;

export const CloseButton = styled.button`
  border-radius: 4px;
  background-color: ${COLOR_BUTTON};
  border: none;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin: 2rem 0;
  color: white;
  transition: all ${DURATION_FAST} ease-in;
  &:hover {
    background-color: ${lighten(0.2, COLOR_BUTTON)};
  }
`;
