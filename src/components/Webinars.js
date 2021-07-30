import React, {useState, useEffect} from 'react';
import { Video } from './Video';

function Webinars() {
    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';
  
  const [videos, setVideos] = useState([]);
  const [currentChannelId, setCurrentChannelId] = useState('UCVRlM9S7LDPyo_mwNpBrnXg');


  useEffect(() => {
    (async () => {
        if (currentChannelId) {
            try {
                const data = await fetch(`${baseUrl}${currentChannelId}`).then(response => response.json());
                if (!data.items) {
                    throw new Error();
                }

                setVideos(data.items);
                console.log(data.items);

            } catch (error) {
                console.log(error);
            }
        }
    })();
}, [currentChannelId]);

  return (
    <div className="webinar">
      
       <h1>ISTE WEBINARS</h1>
       
       <div className="videos">
                {videos.map(video => <Video key={video.guid} video={video} />)}
        </div>
    </div>
  );
}

export default Webinars
