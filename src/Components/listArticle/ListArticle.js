import React, { useState } from 'react';
import './ListArticle.css'


const ListArticle = ({article}) => {
    const [section, setSection] = useState('home')
   const checkForImage = () =>  {
    if (article.title === "") {
        return <p>this article is missing...</p>
    }
    if (article.multimedia === null) {
        return  <>
                {/* <img className='la-img' src={oopsImage} alt={article.multimedia[1].caption}></img> */}
                <p>no image available</p>
                </>
    } 
    else {
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