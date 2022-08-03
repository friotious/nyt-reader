import React from 'react';
import ListArticle from '../listArticle/ListArticle';
import { Link } from "react-router-dom";
import './ArticleListContainer.css'

const ArticleListContainer = ({articles, section}) => {


    const articleList = articles.map((article, index) => {
        return  <Link to={`/article-detail/${article.title}`} id={article.title} key={index} style={{ textDecoration: "none" }}>
                    <ListArticle article={article} key={index} />
                </Link>
    })
    return (
        <>
            <div className='section-title'>{section}</div>
            <div className='list-container'>
                {articleList}
            </div>
        </>
    );
}

export default ArticleListContainer;