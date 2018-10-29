import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCD87a-4jfEsaSqPYDR6RXCw5rm2d23bpY";
const App = () =>{
    return (
        <div>
            <SearchBar/>

        </div>
    );
}

ReactDOM.render(<App/>,document.querySelector('.container'));