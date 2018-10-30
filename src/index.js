import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import axios from "axios";

import API_KEY from "./API_KEY";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("movie");
  }
  videoSearch(term) {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          key: API_KEY,
          type: "video",
          part: "snippet",
          q: term,
          maxResults: 10
        }
      })
      .then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      });
    // YTSearch(
    //   {
    //     key: API_KEY,
    //     term: term,
    //     maxResults: 30
    //   },
    //   videos => {
    //     this.setState({
    //       videos: videos,
    //       selectedVideo: videos[0]
    //     });
    //   }
    // );
  }
  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 600);
    return (
      <div>
        <SearchBar onSerchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>
            this.setState({
              selectedVideo
            })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
