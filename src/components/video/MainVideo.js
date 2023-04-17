import React, {useEffect, useRef} from 'react';
import Video from "./Video";

const MainVideo = () => {
  const videoRef = useRef();

  useEffect(() => {

    if (videoRef.current) {
      const videoElement = videoRef.current.getVideoElement();
      console.log('Video element:', videoElement);
    }
  }, []);

  return (
    <div>
      <h1>메인 비디오</h1>
      <Video
        ref={videoRef}
        // mainUserId={}
        // videoTrack={}
      />
    </div>
  );
};

export default MainVideo;
