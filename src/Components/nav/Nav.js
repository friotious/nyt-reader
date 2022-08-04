import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';


const Nav = ({setArticles, articles}) => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
    return (
        <div className='Nav' >
            <Link to='/' className='app-name' style={{ textDecoration: "none" }}> 
                <h1>NYT Reader</h1>
            </Link>
            <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        </div>
    );
}

export default Nav;