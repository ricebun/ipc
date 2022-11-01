import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Icon } from 'semantic-ui-react';

/** embed video via contentful: https://www.contentfulcommunity.com/t/embed-youtube-or-vimeo-video-directly-into-rich-text-content-type/2639/3 */
function Article() {
  const { articleId } = useParams();
  const { articles } = useSelector((state) => state.articles);
  const selectedArticle = _.find(articles, (article) => {
    return article.id === articleId;
  });
  const navigate = useNavigate();

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { data } = node;
        const imgUrl = `https:${data.target.fields.file.url}`;
        return <img src={imgUrl} alt="" />;
      },
      [INLINES.HYPERLINK]: (node) => {
        const { data } = node;
        const videoId = _.split(data.uri, 'watch?v=')[1];
        return (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={videoId}
          />
        );
      },
    },
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Container text>
      <Button icon onClick={handleBackClick}>
        <Icon name="chevron left" />
      </Button>
      <h2>{selectedArticle.articleTitle}</h2>
      {selectedArticle.articleContent.nodeType === 'document' && (
        <div>
          {documentToReactComponents(selectedArticle.articleContent, options)}
        </div>
      )}
    </Container>
  );
}

export default Article;
