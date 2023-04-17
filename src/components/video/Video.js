import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const Video = (props, ref) => {
  const _videoElement = useRef(null);

  useImperativeHandle(ref, () => ({
    getVideoElement: () => {
      return _videoElement;
    },
  }));

  return (
    <div style={{ height: '100%' }}>
      <video
        ref={_videoElement}
        className="video"
        autoPlay="1"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
        }}
      />
    </div>
  );
};

export default forwardRef(Video);
