import React from 'react';
import { useNavigate } from 'react-router-dom';

import { navCardStyles } from '../styles';

function NavCard(props) {
  const { id, article } = props;
  const navigate = useNavigate();

  const navigateToArticle = () => {
    navigate(`article/${id}`);
  };

  return (
    <navCardStyles.NavCardWrapper>
      <navCardStyles.NavCard onClick={navigateToArticle}>
        {article.articleTitle}
      </navCardStyles.NavCard>
    </navCardStyles.NavCardWrapper>
  );
}

export default NavCard;
