import React from 'react';

const VideoListItem = ({video})=>{
    const ImageURL = video.snippet.thumbnails.default.url;
    const Title = video.snippet.title;
    return(
        <li className="list-group-item" >
        <div className="video-list media">
            <div className="media-left">
                <img src={ImageURL} alt={Title} className="media-object"/>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {Title}
                </div>
            </div>
        </div>
           
        </li>
    );
};

export default VideoListItem;