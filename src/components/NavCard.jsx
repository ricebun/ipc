import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

import * as styles from './NavCardStyle';

function NavCard(props) {
  const { id, article } = props;
  const navigate = useNavigate();

  const navigateToArticle = () => {
    navigate(`article/${id}`);
  };

  return (
    <styles.NavCardWrapper>
      <Card onClick={navigateToArticle}>{article.articleTitle}</Card>
    </styles.NavCardWrapper>
  );
}

export default NavCard;
