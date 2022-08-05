import React from 'react';
import ListArticle from '../listArticle/ListArticle';
import { Link, Outlet } from "react-router-dom";
import './ArticleListContainer.css'

const ArticleListContainer = ({articles, section}) => {


    const articleList = articles.map((article) => {
        if (articles) {
        return <Link to={`/article-detail/${article.id}`} id={article.id} key={article.id} style={{ textDecoration: "none" }}>
                        <ListArticle article={article} id={article.id} key={article.id} />
                   </Link>
        }
            else { return <div>Nothing to report...</div> }      
    })
    return (
        <>
            <div className='section-title'>{section}</div>
            <div className='list-container'>
                {articleList}
            </div>
            <Outlet />
        </>
    );
}

export default ArticleListContainer;