import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { headerStyles as styles } from '../styles';
import theme from '../styles/ThemeConstants';

function Header(props) {
  const { title, backFunction } = props;

  return (
    <styles.HeaderContainer>
      {backFunction && (
        <styles.BackArrowWrapper>
          <FontAwesomeIcon
            icon={faAngleLeft}
            color={theme.colors.white}
            onClick={backFunction}
            size="2x"
          />
        </styles.BackArrowWrapper>
      )}
      <styles.TitleWrapper>{title}</styles.TitleWrapper>
    </styles.HeaderContainer>
  );
}

export default Header;
