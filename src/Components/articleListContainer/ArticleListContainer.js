import React from 'react';
import ListArticle from '../listArticle/ListArticle';
import { Link } from "react-router-dom";
import './ArticleListContainer.css'

const ArticleListContainer = ({articles, section}) => {


    const articleList = articles.map((article) => {
        return  <Link to={`/article-detail/${article.id}`} id={article.id} key={article.id} style={{ textDecoration: "none" }}>
                    <ListArticle article={article} id={article.id} key={article.id} />
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