import React, { useState } from 'react';
import './ListArticle.css'

const ListArticle = ({article}) => {
    const [section, setSection] = useState('home')
   const checkForImage = () =>  {
    if (article.multimedia === null) {
        return <p>no image available</p>
    } else {
        return <img className='la-img' src={article.multimedia[1].url} alt={article.multimedia[1].caption}></img>
    }
} 

    

    
 return (
        <div className='list-article'>
        
            <p className='la-title'>{article.title}</p>
            
            {checkForImage()}
        </div>
    );
}

export default ListArticle;