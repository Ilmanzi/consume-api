import React from 'react';

class YoutubeVideo extends React.Component {
 render() {
    return (
      <div>
        <iframe 
          width="286" 
          height="181" 
          src="https://www.youtube.com/embed/3L7Q-z-RUbY" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </div>
    );
 }
}

export default YoutubeVideo;