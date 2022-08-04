import React, { useState, useEffect } from 'react';
import './DetailArticle.css'
import { useParams } from 'react-router-dom';


const DetailArticle = ({detail}) => {
    const { articleId } = useParams()
    const [art, setArt] = useState(detail.find(d => d.id === articleId))
    const checkForImage = () =>  {
        if (art.multimedia === null) {
            return <p>no image available</p>
        } else {
            return <img className='da-img' src={art.multimedia[0].url} alt={art.multimedia[0].caption}></img>
        }
    } 
    const details = detail.filter(d => d.id === articleId)

    return (
        <div className='DetailArticle'>
            <div className='da-text-box'>
                <p className='da-title'>{art.title}</p>
                <p className='da-byline' >{art.byline}</p>
                <p className='da-abstract'>{art.abstract}</p>
                <a href={art.url}>Read full article here</a>
            </div>
                {checkForImage()}
        </div>
    );
}

export default DetailArticle;