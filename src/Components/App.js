import React, { useEffect, useState } from "react";
import './App.css';
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Nav from '../Components/nav/Nav'
import SectionSelect from './sectionSelect/SectionSelect'
import ArticleListContainer from '../Components/articleListContainer/ArticleListContainer'
//import {getArticles, testCall } from "../apiCalls";
import DetailArticle from "./detailArticle/DetailArticle";
import { v4 as uuidv4 } from 'uuid';

const apiKey = process.env.REACT_APP_API_KEY
const App = () => {
  let { articleId } = useParams()
  const [section, setSection] = useState('home')
  const [articles, setArticles] = useState([])
  const [detail, setDetail] = useState({})

  // filter API data
  const articleCleaner = data => {
    return data.map(article => {
      return {
        id: uuidv4(),
        section: article.section,
        title: article.title,
        abstract: article.abstract,
        url: article.url,
        byline: article.byline,
        multimedia: article.multimedia,
        shortUrl: article.short_url
    }
    })
  }
  //API call
  const getArticles = (section) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
      .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
      }).then(res => {
        setArticles(articleCleaner(res.results)) 
      })
      .catch(err => alert(err));
  }

useEffect(() => {
  setDetail(getDetailArticle(articleId))

}, [articleId])

 useEffect(() => {
  getArticles(section)
 }, [])

const getDetailArticle = () => {
  console.log(articles.filter(article => article.id === articleId))
  return articles.filter(article => article.id === articleId)
}

  return (
    <div className="App">
      <Nav />
      <SectionSelect setSection={setSection}/>
      <Routes>
        <Route path='/' 
               element={< ArticleListContainer 
               articles={articles} 
               section={section} 
               setDetail={setDetail}/>} />
        <Route path='article-detail/:articleId' 
               element={<DetailArticle detail={articles}/>}
            
          />
      </Routes>
    </div>
  );
}

export default App;
