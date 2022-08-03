import React, { useEffect, useState } from "react";
import './App.css';
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Nav from '../Components/nav/Nav'
import SectionSelect from './sectionSelect/SectionSelect'
import ArticleListContainer from '../Components/articleListContainer/ArticleListContainer'
//import {getArticles, testCall } from "../apiCalls";
import DetailArticle from "./detailArticle/DetailArticle";

const apiKey = process.env.REACT_APP_API_KEY
const App = () => {
  let { articleDetail } = useParams()
  const [section, setSection] = useState('home')
  const [articles, setArticles] = useState([])
  const [detail, setDetail] = useState({})

  // filter API data
  const articleCleaner = data => {
    return data.map(article => {
      console.log(article.section, 'test')
      return {
        id: Date.now(),
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

  // const fetch = () => {
  //   .then(res => {
  //     setArticles(res)
  //   })
  // }

 useEffect(() => {
  getArticles(section)
  // console.log('test useEffect')
  // console.log(testCall.results, 'results?')
  // setArticles(testCall.results)
 }, [])

//  useEffect(() => {
//     fetch()
//  }, [section])
// element={< DetailArticle  detail={detail}/>} 


  return (
    <div className="App">
      <Nav />
      <SectionSelect setSection={setSection}/>
      <Routes>
        <Route path='/' element={< ArticleListContainer articles={articles} section={section} setDetail={setDetail}/>} />
        <Route path='article-detail/:articleDetail' 
          render={({match}) => {
            const getDetailArticle = () => {

              
               articles.find(article => {
                  console.log(article.title, 'title', match.params.id, 'id')

                  return article.title === articleDetail

                }
              )

            }
            console.log(getDetailArticle())
            return (
              <DetailArticle detail={getDetailArticle()}/>
            )
          }} />
      </Routes>
    </div>
  );
}

export default App;
