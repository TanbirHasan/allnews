import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import { getNews } from '../Service/Api';
import News from './News';

const Article = () => {
    const [news , setNews] = useState([]);
    const [page,setPage] = useState(0);

     useEffect(() => {
       dailyNews();
     }, [page]);
    
    const dailyNews = async () => {
       let response = await getNews(page);
       setNews([...news,...response.data]);
       console.log(response);

    }
   
    return (
      <InfiniteScroll dataLength={news.length} next={() => setPage(page => page + 1)} hasMore={true}>
        {news?.length > 0 && news.map((article) => <News article={article} />)}
      </InfiniteScroll>
    );
};

export default Article;