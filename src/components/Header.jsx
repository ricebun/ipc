import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import * as styles from './HeaderStyle';

function Header(props) {
  const { title, backFunction } = props;

  return (
    <styles.HeaderContainer>
      {backFunction && (
        <styles.BackArrowWrapper>
          <FontAwesomeIcon
            icon={faAngleLeft}
            color="#ffffff"
            onClick={backFunction}
          />
        </styles.BackArrowWrapper>
      )}
      <styles.TitleWrapper>{title}</styles.TitleWrapper>
    </styles.HeaderContainer>
  );
}

export default Header;
