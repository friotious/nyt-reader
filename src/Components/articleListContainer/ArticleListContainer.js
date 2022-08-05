import React from 'react';
import ListArticle from '../listArticle/ListArticle';
import { Link, Outlet, useParams } from "react-router-dom";
import './ArticleListContainer.css'

const ArticleListContainer = ({articles, section}) => {
 const { sectionId } = useParams()
    const articleList = articles.map((article) => {
        if (articles) {
        return <Link to={`/article-detail/${article.id}`} id={article.id} key={article.id} style={{ textDecoration: "none" }}>
                        <ListArticle article={article} id={article.id} key={article.id} />
                   </Link>
        }
            else { return <div>Nothing to report...</div> }      
    })
    return (
        <div className='article-list-section'>
            <div className='section-title'>- { sectionId  || '- home -'} -</div>
            <div className='list-container'>
                {articleList}
            </div>
            <Outlet />
        </div>
    );
}

export default ArticleListContainer;