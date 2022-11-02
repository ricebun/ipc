import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import client from '../contentfulClient';
import { loadArticlesSuccess } from '../data/reducer';
import { overviewStyles } from '../styles';
import Header from './Header';
import NavCard from './NavCard';

function Overview() {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articles.articles);

  useEffect(() => {
    getContent();
  }, []);

  //   const cleanedEntry = {
  //     id: '',
  //     articleTitle: '',
  //     articleContent: '',
  //     order: '',
  //   };

  const handleEntries = (entriesArray) => {
    const cleanEntries = entriesArray.map((entry) => {
      const cleaned = _.pick(entry.fields, [
        'order',
        'articleTitle',
        'articleContent',
      ]);
      cleaned.id = entry.sys.id;
      return cleaned;
    });
    const sortedEntries = _.sortBy(cleanEntries, (entry) => entry.order);
    return sortedEntries;
  };

  const getContent = async () => {
    try {
      const response = await client.getEntries({ content_type: 'article' });
      dispatch(loadArticlesSuccess(handleEntries(response.items)));
    } catch (error) {
      // eslint-disable-next-line
      console.log('error', error);
    }
  };

  return (
    <overviewStyles.OverviewContainer>
      <Header title="Articles" />
      <overviewStyles.NavCards>
        {articles.length > 0 &&
          articles.map((article) => (
            <NavCard id={article.id} article={article} key={article.id} />
          ))}
      </overviewStyles.NavCards>
    </overviewStyles.OverviewContainer>
  );
}

export default Overview;
