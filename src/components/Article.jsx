import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { articleStyles } from '../styles';
import Header from './Header';

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
        return (
          <articleStyles.ImageWrapper>
            <img src={imgUrl} alt="" />
          </articleStyles.ImageWrapper>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const { content } = node;
        const videoLinkEl = _.find(
          content,
          (el) => el.nodeType === 'hyperlink'
        );
        if (videoLinkEl) {
          const videoId = _.split(videoLinkEl.data.uri, 'watch?v=')[1];
          return (
            <articleStyles.VideoWrapper>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={videoId}
              />
            </articleStyles.VideoWrapper>
          );
        } else {
          return <p>{children}</p>;
        }
      },
    },
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <articleStyles.PageContainer>
      <Header
        title={selectedArticle.articleTitle}
        backFunction={handleBackClick}
      />
      <articleStyles.ArticleContainer>
        <articleStyles.ArticleContent>
          {selectedArticle.articleContent.nodeType === 'document' && (
            <div>
              {documentToReactComponents(
                selectedArticle.articleContent,
                options
              )}
            </div>
          )}
        </articleStyles.ArticleContent>
      </articleStyles.ArticleContainer>
    </articleStyles.PageContainer>
  );
}

export default Article;
