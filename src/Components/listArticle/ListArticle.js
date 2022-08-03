import React from 'react';
import './ListArticle.css'

const ListArticle = ({article}) => {
   const checkForImage = () =>  {
    if (article.multimedia === null) {
        return <p>no image available</p>
    } else {
        return <img className='la-img' src={article.multimedia[1].url}></img>
    }
} 

    

    
 return (
        <div className='list-article'>
            <p className='la-title'>{article.title}</p>
            <p className='la-abstract'>{article.abstract}</p>
            <p className='la-byline' >{article.byline}</p>
            {checkForImage()}
        </div>
    );
}

export default ListArticle;