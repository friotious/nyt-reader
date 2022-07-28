import React, { useEffect, useState } from "react";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from '../Components/nav/Nav'
import CategoryDD from './sectionSelect/SectionSelect'
import ArticleContainer from '../Components/articleContainer/ArticleContainer'

const [section, setSection] = useState('home')
const [detail, setDetail] = useState([])

 useEffect(() => {
  getArticles(section).then(data => setSection)
 })
  


const App = () => {
  return (
    <div className="App">
      <Nav />
      <C
      <ArticleContainer />
    </div>
  );
}

export default App;
