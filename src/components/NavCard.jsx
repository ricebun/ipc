import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './NavCardStyle';

function NavCard(props) {
  const { id, article } = props;
  const navigate = useNavigate();

  const navigateToArticle = () => {
    navigate(`article/${id}`);
  };

  return (
    <styles.NavCardWrapper>
      <styles.NavCard onClick={navigateToArticle}>
        {article.articleTitle}
      </styles.NavCard>
    </styles.NavCardWrapper>
  );
}

export default NavCard;
