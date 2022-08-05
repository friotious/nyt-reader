import React from 'react';
import './SectionSelect.css'
import { Link } from "react-router-dom";


const sections = ["world", "us", "politics", "nyregion", "arts", 
"automobiles", "books", "business", "fashion", "food", "health", 
"home", "insider", "magazine", "movies", "obituaries", "opinion",  
"realestate", "science", "sports", "sundayreview", "technology", 
 "theater", "t-magazine", "travel", "upshot"]

const SectionSelect = ({setSection}) => {
    const sectionList = sections.map(section => {
        return  <Link to={`/${section}`} id={section} key={section} style={{ textDecoration: "none" }}>
                    <button 
                    className='section-list-button' 
                    onClick={() => {setSection(section)}} 
                    key={section} 
                    style={{ textDecoration: "none" }}>{section}</button>
                </Link>  
  })
    return (
        <div className='SectionSelect'>
            <h2>Sections</h2>
            {sectionList}
        </div>
    );
}

export default SectionSelect;