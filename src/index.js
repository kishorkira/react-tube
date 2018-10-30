import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import API_KEY from './API_KEY';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            videos: []
        }
        YTSearch({key:API_KEY,term: 'movie'},(videos)=>{
            this.setState({videos});
        });
    }
    render() { 
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
 
ReactDOM.render(<App/>,document.querySelector('.container'));