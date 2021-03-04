import { styled } from '@linaria/react';

import {
  CONTAINER_WIDTH,
  MEDIA_MOBILE,
  MEDIA_TABLET,
  OFFSET_SIDE,
  OFFSET_SIDE_MD,
  OFFSET_SIDE_SM,
} from '../constants';

const Container = styled.div`
  width: 100%;
  max-width: ${CONTAINER_WIDTH + OFFSET_SIDE * 2}px;
  margin-left: auto;
  margin-right: auto;
  border-left: ${OFFSET_SIDE}px solid transparent;
  border-right: ${OFFSET_SIDE}px solid transparent;

  ${MEDIA_TABLET} {
    border-left-width: ${OFFSET_SIDE_MD}px;
    border-right-width: ${OFFSET_SIDE_MD}px;
  }

  ${MEDIA_MOBILE} {
    border-left-width: ${OFFSET_SIDE_SM}px;
    border-right-width: ${OFFSET_SIDE_SM}px;
  }
`;

export default Container;
