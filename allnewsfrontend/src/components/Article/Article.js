import React, { useEffect, useState } from 'react';

import { getNews } from '../Service/Api';
import News from './News';

const Article = () => {
    const [news , setNews] = useState([]);

     useEffect(() => {
       dailyNews();
     }, []);
    
    const dailyNews = async () => {
       let response = await getNews();
       setNews(response.data);
       console.log(response);

    }
   
    return (
        
          news?.length > 0 && news.map(article => (
              <News article={article}/>

          ))
        
    );
};

export default Article;